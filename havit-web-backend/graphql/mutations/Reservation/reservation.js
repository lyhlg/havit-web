const ADD_RESERVATION = async (params, reserveNumCal) => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode, user_id_email } = args;
  const { user, hospital, reservation } = ctx;

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

  return await new reservation(new_args).save();
};

const MODIFY_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];
  const { reservation, hospital, product } = ctx;
  if (args.reserveNum && args.openPhoneNum) {
    console.log(args.openPhoneNum);
    await reservation.update(
      { reserveNum: args.reserveNum },
      { $set: { openPhoneNum: args.openPhoneNum } }
    );
    // DB에 count 추가필요
    await ADD_BILL([obj, args, ctx]);
    return await reservation.findOne({ reserveNum: args.reserveNum });
  } else {
    let updateUserReservation = async () => {
      return await reservation.update(
        { reserveNum: args.reserveNum },
        {
          $set: {
            reserveDate: args.reserveDate,
            userName: args.userName,
            phone: args.phone
          }
        }
      );
    };
    updateUserReservation();
    return await reservation.findOne({ reserveNum: args.reserveNum });
  }
};

const ADD_BILL = async params => {
  const [obj, args, ctx] = [...params];
  console.log(args);
  const { hospitalCode } = args;
  const { hospital, product, reservation, payment } = ctx;
  const title = (await reservation.findOne({ reserveNum: args.reserveNum }))
    .productName;
  const billing =
    (await product.findOne({ hospitalCode: hospitalCode, productName: title }))
      .price * 0.1;
  console.log(billing);
  return await payment.update(
    { code: hospitalCode },
    { $inc: { price: billing } }
  );
};

// 예약 삭제 (고객)
const DEL_RESERVATION = async params => {
  const [obj, args, { reservation }] = [...params];
  const { user_id_email, reserveNum } = args;
  const exist = await reservation.findOne(args);
  if (exist) {
    await reservation.remove(args);
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
