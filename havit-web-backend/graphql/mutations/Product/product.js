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
    type,
    subType,
    hospitalCode,
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
    { code: args.hospitalCode },
    { loc: 1, name: 1, _id: 0 }
  );

  const new_hospitalInfo = {
    hospitalName: hospitalInfo.name,
    hospitalLoc: hospitalInfo.loc
  };

  const chk_dup = await CHECK_DUP_DATA([
    obj,
    {
      type: type,
      subType: subType,
      hospitalCode: hospitalCode,
      productName: new_hospitalInfo.hospitalName
    },
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
      { code: args.hospitalCode },
      { $push: { products: newProduct.productId } }
    );
    await salesCount({ _id: number }).save();
    return newProduct;
  } else {
    return chk_dup;
  }
};

const EDIT_PRODUCT = async params => {
  console.log("EDIT_PRODUCT");
  const [obj, args, ctx] = [...params];
  const { productId } = args;
  const { product, productOption } = ctx;

  const needToCngOptions = args.options;
  if (!args.options) {
    await product.update({ productId }, { $set: args });
    return product.findOne({ productId });
  }

  await SAVE_N_UPDATE_PRODUCT_OPTION(
    productId,
    option,
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
  console.log("pid, type, type: ", productId, type, type);
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

export { ADD_LIKE_PRODUCT, DEL_LIKE_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT };
