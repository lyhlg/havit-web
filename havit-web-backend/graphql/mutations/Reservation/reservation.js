const ADD_RESERVATION = async (params, reserveNumCal) => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode, user_id_email, productId } = args;
  const { user, hospital, reservation, salesCount } = ctx;

  let obj_reserveNum = { reserveNum: reserveNumCal() };
  let new_args = Object.assign(args, obj_reserveNum, { openPhoneNum: 0 });

  await hospital.update(
    { code: hospitalCode },
    { $push: { reservations: obj_reserveNum.reserveNum } }
  );
  await user.update(
    { user_id_email },
    { $push: { reservation: obj_reserveNum.reserveNum } }
  );
  await salesCount.update(
    { _id: productId },
    { $inc: { total: 1, purchased: 1 } }
  );

  return await new reservation(new_args).save();
};

const MODIFY_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];
  const { reserveNum, openPhoneNum, reserveDate, userName, phone } = args;
  const { reservation, hospital, product } = ctx;

  if (reserveNum && openPhoneNum) {
    await reservation.update(
      { reserveNum },
      { $set: { openPhoneNum: openPhoneNum } }
    );
    await ADD_BILL([obj, args, ctx]);
    return await reservation.findOne({ reserveNum: reserveNum });
  } else {
    userName && Phone
      ? await reservation.update(
          { reserveNum: reserveNum },
          {
            $set: {
              reserveDate: reserveDate,
              userName: userName,
              phone: phone
            }
          }
        )
      : await reservation.update(
          { reserveNum: reserveNum },
          {
            $set: {
              reserveDate: reserveDate
            }
          }
        );


    return await reservation.findOne({ reserveNum: reserveNum });
  }
};

const ADD_BILL = async params => {
  const [obj, args, ctx] = [...params];
  const { reserveNum } = args;
  const { hospital, product, reservation, payment } = ctx;

  let res = {},
    code;

  if (Object.keys(args).length) {
    code = (await reservation.findOne({ reserveNum })).hospitalCode;
  }

  const title = (await reservation.findOne({ reserveNum: reserveNum }))
    .productName;
  const billing =
    (await product.findOne({ hospitalCode: code, productName: title })).price *
    0.1;
  return await payment.update({ code }, { $inc: { price: billing, count: 1 } });
};

// 예약 삭제 (고객) - 아에 삭제할건지 취소된걸로 할건지 고민 필요
const DEL_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, productId, reserveNum } = args;
  const { reservation, salesCount } = ctx;
  const exist = await reservation.findOne({ user_id_email, reserveNum });
  if (exist) {
    await reservation.remove({ user_id_email, reserveNum });
    await salesCount.update(
      { _id: productId },
      { $inc: { purchased: -1, canceled: 1 } }
    );
    return exist;
  }
  return {
    user_id_email: "user_id_email is not registerd OR",
    reserveNum: "reservation Number is Not Correct"
  };
};

// 예약 확정 (병원) - 시술 시간에 기입됨
const FIX_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];

  // 병원에서 시술일로 등록한 날짜를 reservation에 update
  let fixReserveCareDate = async () => {
    return await ctx.reservation.update(
      { reserveNum: args.reserveNum },
      {
        $set: {
          careDate: args.careDate,
          status: "시술진행중"
        }
      }
    );
  };
  fixReserveCareDate();
  return await ctx.reservation.findOne({ reserveNum: args.reserveNum });
};

// 구매 확정 (고객) - 추가 변경 불가능
const CONFIRM_PURCHASE = async params => {
  const [obj, args, ctx] = [...params];

  // 시술 진행 상태를 완료로 변경
  let confirmUpdate = async () => {
    return await ctx.reservation.update(
      { reserveNum: args.reserveNum },
      { $set: { status: "시술완료" } }
    );
  };

  // 구매 확정이 되었으므로, 구매 개수의 count를 1 증가한다.
  let sellingCount = async () => {
    let arg = await ctx.reservation
      .findOne(
        { reserveNum: args.reserveNum },
        { _id: 0, hospitalCode: 1, productName: 1 }
      )
      .then(async res => {
        return await ctx.product.update({ arg }, { $inc: { purchased: 1 } });
      });
  };

  await confirmUpdate();
  await sellingCount();
  return await ctx.reservation.findOne({ reserveNum: args.reserveNum });
};

export {
  ADD_RESERVATION,
  MODIFY_RESERVATION,
  DEL_RESERVATION,
  FIX_RESERVATION,
  CONFIRM_PURCHASE
};
