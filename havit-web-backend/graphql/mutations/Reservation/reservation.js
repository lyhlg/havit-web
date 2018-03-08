const ADD_RESERVATION = async (params, reserveNumCal) => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode, user_id_email, productId, option } = args;
  const {
    user,
    product,
    hospital,
    hospitalAdmin,
    reservation,
    salesCount
  } = ctx;

  const hospitalInfo = await hospitalAdmin.findOne(
    { code: args.hospitalCode },
    { loc: 1, name: 1, _id: 0 }
  );

  const getHospitalInfo = {
    hospitalName: hospitalInfo.name,
    hospitalLoc: hospitalInfo.loc
  };

  let getProductName = {
    productName: (await product.findOne({ productId })).productName
  };
  let obj_reserveNum = { reserveNum: reserveNumCal() };
  let new_args = Object.assign(
    args,
    obj_reserveNum,
    getHospitalInfo,
    getProductName,
    { openPhoneNum: 0 }
  );

  await hospital.update(
    { code: hospitalCode },
    { $push: { reservations: obj_reserveNum.reserveNum } }
  );
  await user.update(
    { user_id_email },
    { $push: { reservations: obj_reserveNum.reserveNum } }
  );
  await salesCount.update(
    { _id: productId },
    { $inc: { total: 1, purchased: 1 } }
  );

  return await new reservation(new_args).save();
};

const MODIFY_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];
  const {
    reserveNum,
    openPhoneNum,
    reserveDate,
    userName,
    phone,
  } = args;
  const { reservation, hospital, product } = ctx;

  // img = img || delete args.img;
  // productDetail = productDetail || delete args.productDetail;

  if (reserveNum && openPhoneNum) {
    await reservation.update(
      { reserveNum },
      { $set: { openPhoneNum: openPhoneNum } }
    );
    await ADD_BILL([obj, args, ctx]);
    return await reservation.findOne({ reserveNum: reserveNum });
  } else {
    reserveNum && reserveDate && userName && Phone
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

// 예약 삭제 (고객) - 예약 내역 완전 삭제
const DEL_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, productId, reserveNum } = args;
  const { reservation, salesCount, user, hospital } = ctx;
  const exist = await reservation.findOne({ user_id_email, reserveNum });
  const getHospitalCode = exist.hospitalCode;

  if (exist) {
    await user.update(
      { user_id_email },
      { $pull: { reservations: reserveNum } }
    );
    await hospital.update(
      { code: getHospitalCode },
      { $pull: { reservations: reserveNum } }
    );
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
  const { reserveNum, careDate } = args;
  const { reservation } = ctx;

  // 병원에서 시술일로 등록한 날짜를 reservation에 update
  await reservation.update(
    { reserveNum: reserveNum },
    {
      $set: {
        careDate: careDate,
        status: "시술진행중"
      }
    }
  );
  return await reservation.findOne({ reserveNum: reserveNum });
};

// 구매 확정 (고객) - 추가 변경 불가능
const CONFIRM_PURCHASE = async params => {
  const [obj, args, ctx] = [...params];
  const { reserveNum } = args;
  const { reservation, product } = ctx;

  // 시술 진행 상태를 완료로 변경
  await reservation.update(
    { reserveNum: reserveNum },
    { $set: { status: "시술완료" } }
  );

  return await reservation.findOne({ reserveNum: reserveNum });
};

const ADD_BILL = async params => {
  const [obj, args, ctx] = [...params];
  const { reserveNum } = args;
  const { hospital, product, reservation, payment, monthPayment } = ctx;
  console.log("ADD_BILL");
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
  return await payment.update(
    { code },
    { $inc: { price: billing, count: 1 } },
    { upsert: 1 }
  );
};

export {
  ADD_RESERVATION,
  MODIFY_RESERVATION,
  DEL_RESERVATION,
  FIX_RESERVATION,
  CONFIRM_PURCHASE
};
