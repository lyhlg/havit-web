const FIND_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, productId, status, page } = args;
  const { event, hospital } = ctx;
  const limit = 20;
  let existCode = {},
    code;

  const results = async target => {
    return await event
      .find(target)
      .sort({ priority: 1, hospitalCode : 1})
      .skip((page - 1) * limit)
      .limit(limit);
  };

  // page 설정
  page ? page : 1;

  if (user_id_email) {
    code = (await hospital.findOne({ adminAccount: user_id_email })).code;
    existCode = { hospitalCode: code };
  }

  // 관리자 - 상태별 필터 적용
  if (status) return await results({ status });

  if (user_id_email && status) {
    // 병원 - 상태별 필터 적용
    return await results({ hospitalCode: code, status: status });
  }

  if (productId) {
    // 관리자, 병원 - 제품 상세 보기
    return await results({ productId });
  }

  if (!(user_id_email && productId && status)) {
    // 관리자 - EVENT 전체 검색
    return await results({});
  }

};

export { FIND_EVENT };
