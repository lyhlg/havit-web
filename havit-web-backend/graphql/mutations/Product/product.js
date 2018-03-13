import { autoNumbering } from "../../../utils/index";
import { CHECK_DUP_DATA } from "../../common";
const ObjectId = require("mongodb").ObjectID;

const ADD_LIKE_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, productId } = args;
  const { user } = ctx;
  let checkAlreadyLikeIt = false;

  // user 테이블에 likeProduct에 이미 해당 상품을 찜 해뒀는지 확인
  (await user.findOne({
    user_id_email: user_id_email
  })).likeProducts.forEach(item => {
    if (item === productId) {
      checkAlreadyLikeIt = !checkAlreadyLikeIt;
    }
  });

  // 해당 상품이 찜이 안되었을 경우에만 추가
  if (!checkAlreadyLikeIt) {
    await user.update(
      { user_id_email: user_id_email },
      { $push: { likeProducts: productId } }
    );
  }

  return await user.findOne({ user_id_email: user_id_email });
};

const DEL_LIKE_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, productId } = args;
  const { user } = ctx;

  await user.update({ user_id_email }, { $pull: { likeProducts: productId } });
  return await user.findOne({ user_id_email });
};

const ADD_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const {
    user_id_email,
    type,
    subType,
    productName,
    description,
    price,
    options
  } = args;
  const {
    product,
    counter,
    hospital,
    hospitalAdmin,
    productOption,
    salesCount
  } = ctx;

  const hospitalInfo = await hospitalAdmin.findOne(
    { adminAccount: user_id_email },
    { loc: 1, name: 1, code: 1, _id: 0 }
  );

  const new_hospitalInfo = {
    hospitalName: hospitalInfo.name,
    hospitalLoc: hospitalInfo.loc,
    hospitalCode: hospitalInfo.code
  };

  const chk_dup = await CHECK_DUP_DATA([
    obj,
    { type, subType, hospitalCode: hospitalInfo.code, productName },
    product
  ]);

  if (!chk_dup) {
    const number = await autoNumbering("productid", counter);
    let productSubNumber = { productId: number };
    const optionUpdate = await SAVE_N_UPDATE_PRODUCT_OPTION(
      number,
      options,
      productOption,
      "SAVE"
    );
    const optionObj = { options: optionUpdate._id };

    let new_args = Object.assign(
      args,
      productSubNumber,
      optionObj,
      new_hospitalInfo
    );

    const newProduct = await new product(new_args).save();
    // 새 제품 병원의 리스트로 업데이트
    await hospital.update(
      { code: hospitalInfo.code },
      { $push: { products: newProduct.productId } },
      { upsert: 1 }
    );
    await salesCount({ _id: number }).save();
    return newProduct;
  } else {
    return chk_dup;
  }
};

const EDIT_PRODUCT = async params => {
  console.log( "edit_product 드러와따!!!!!!!!!!!!!");
  const [obj, args, ctx] = [...params];
  const {
    productId,
    type,
    subType,
    img,
    productName,
    description,
    price,
    productDetail,
    options
  } = args;
  const { product, productOption } = ctx;

  if ( !img ) delete args.img;
  if ( !productDetail ) delete args.productDetail;
  if ( !options ) delete args.options;

  if (!args.options) {
    await product.update({ productId }, { $set: args });
    return product.findOne({ productId });
  }

  await SAVE_N_UPDATE_PRODUCT_OPTION(
    productId,
    options,
    productOption,
    "UPDATE"
  );
  delete args.productId;
  await product.update({ productId }, { $set: args });
  return product.findOne({ productId });
};

const SAVE_N_UPDATE_PRODUCT_OPTION = async (
  productId,
  type,
  productOption,
  processing
) => {
  if (processing === "SAVE") {
    return await productOption({
      productId,
      type
    }).save();
  }

  if (processing === "UPDATE") {
    return await productOption.update({ productId }, { $set: { type } });
  }
};

const DEL_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { productId } = args;
  const {
    reservation,
    hospital,
    productOption,
    salesCount,
    product,
    user
  } = ctx;

  const findProduct = await product.findOne({ productId });
  const code = findProduct.hospitalCode;

  // [예약] 예약에서 pid에 해당하는 것들 삭제
  // + 예약 id 확인해서 user/hospitals 에서 예약된 내용 확인해서 삭제
  (await reservation.find()).forEach(async item => {
    await user.update(
      { user_id_email: item.user_id_email },
      { $pull: { reservations: item.reserveNum } }
    );
    await hospital.update(
      { code },
      { $pull: { reservations: item.reserveNum } }
    );
  });
  await reservation.remove({ productId });

  // [병원] 병원 테이블에 products에서 id 삭제
  await hospital.update({ code }, { $pull: { products: productId } });

  // [옵션] 제품 옵션 삭제
  await productOption.remove({ productId });

  // [제품별 판매 건] 테이블 document 삭제
  await salesCount.remove({ _id: productId });

  // [제품] product 테이블에서 해당 productId삭제
  await product.remove({ productId });

  return findProduct;
};

export {
  ADD_LIKE_PRODUCT,
  DEL_LIKE_PRODUCT,
  ADD_PRODUCT,
  DEL_PRODUCT,
  EDIT_PRODUCT
};
