import { CHK_MAX_PAGE } from "../../common";

const FIND_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, status } = args;
  let { page } = args;
  const { reservation, hospital } = ctx;
  const limit = 20;
  let code;

  // For pagenation
  const maxPage = await CHK_MAX_PAGE(reservation);
  await reservation.updateMany({}, { $set: { maxPage: maxPage } });

  page ? page : 1;

  if (obj) {
    if (obj.adminAccount) {
      const prod = (await hospital.findOne(
        { adminAccount: obj.adminAccount },
        { reservations: 1 }
      )).reservations.map(async item => {
        return await reservation.findOne({ reserveNum: item });
      });
      return await Promise.all(prod).then(res => res.sort( (a,b) => b.reserveNum-a.reserveNum))
    }
    return await reservation
      .find({ user_id_email: obj.user_id_email })
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  if (user_id_email && status) {
    // 고객정보(병원)에서 상태별 정보 요청 API
    return await reservation
      .find({
        user_id_email: user_id_email,
        status: status
      })
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  if (user_id_email) {
    // 계정별 (고객/병원) 예약 내역 조회
    const findCode = await hospital.findOne({ adminAccount: user_id_email });
    if (findCode) {
      // 병원
      code = findCode.code;
    } else {
      // 고객
      code = null;
    }

    return code
      ? await reservation
          .find({ hospitalCode: code })
          .sort({ _id: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
      : await reservation
          .find({ user_id_email: user_id_email })
          .sort({ _id: -1 })
          .skip((page - 1) * limit)
          .limit(limit);
  }
};

const GET_OPENED_NUMBER = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email } = args;
  const { reservation, hospital } = ctx;
  const limit = 20;
  let { page } = args,
    findCode;

  page ? page : 1;

  // For pagenation
  const maxPage = await CHK_MAX_PAGE(reservation);
  await reservation.updateMany({}, { $set: { maxPage: maxPage } });

  // 병원 계정별 전화번호부 오픈한 이력 확인
  if (user_id_email) {
    findCode = (await hospital.findOne({ adminAccount: user_id_email })).code;
  }

  return await reservation
    .find({ hospitalCode: findCode, openPhoneNum: 1 })
    .sort({ reserveNum: 1 })
    .skip((page - 1) * limit)
    .limit(limit);
};

export { FIND_RESERVATION, GET_OPENED_NUMBER };
