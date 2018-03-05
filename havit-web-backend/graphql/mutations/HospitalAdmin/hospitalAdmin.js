const ADD_HOSPITAL_ADMIN = async params => {
  const [obj, args, ctx] = [...params];
  const { code, name, loc } = args;
  const { hospitalAdmin } = ctx;

  return await hospitalAdmin.findOne({ code }).then(async res => {
    if (res) {
      return await hospitalAdmin.findOne({ code });
    }
    await new hospitalAdmin(args).save();
    return await hospitalAdmin.findOne(args);
  });
};

const DEL_HOSPITAL_ADMIN = async params => {
  const [obj, args, ctx] = [...params];
  const { code } = args;
  const {
    user,
    reservation,
    product,
    hospital,
    hospitalAdmin,
    salesCount
  } = ctx;

  const hospitalRsrvList = await hospital.findOne({ code });

  // [유저] Reservation 삭제
  (await user.find({})).forEach(item => {
    item.reservations.forEach(async rsrvNum => {
      if (hospitalRsrvList.reservations.includes(rsrvNum)) {
        await user.update(
          { user_id_email: item.user_id_email },
          { $pull: { reservations: rsrvNum } }
        );
      }
    });
  });

  // [유저] LikeProduct 삭제
  (await user.find({})).forEach(item => {
    item.likeProducts.forEach(async likeProductNum => {
      if (hospitalRsrvList.reservations.includes(likeProductNum)) {
        await user.update(
          { user_id_email: item.user_id_email },
          { $pull: { likeProducts: likeProductNum } }
        );
      }
    });
  });

  // [예약] Reservation Table 삭제
  const b = await reservation.remove({ hospitalCode: code });
  console.log(" RESERVATION 삭제 : ", b);

  // [제품] Product 삭제
  const c = await product.remove({ hospitalCode: code });
  console.log(" PRODUCT 삭제 : ", c);

  // [제품별 판매 건] 테이블 document 삭제
  const d = (await salesCount.find()).forEach(async item => {
    if (hospitalRsrvList.products.includes(item._id)) {
      await salesCount.remove({ _id: item._id });
    }
  });
  console.log(" salesCount 삭제 : ", d);

  // [병원] 테이블 삭제
  await hospital.remove({ code });

  // [병원관리자계정] 관리자 계정 삭제
  return await hospitalAdmin.findOne({ code }).then(async res => {
    if (res) {
      await hospitalAdmin.remove({ code });
      return res;
    }
  });
};

export { ADD_HOSPITAL_ADMIN, DEL_HOSPITAL_ADMIN };
