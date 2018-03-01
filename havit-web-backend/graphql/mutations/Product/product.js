import { autoNumbering } from "../../../utils/index";
import { CHECK_DUP_DATA } from "../../common";
const ObjectId = require("mongodb").ObjectID;

const ADD_LIKE_PRODUCT = async params => {
  const [obj, args, { user }] = [...params];
  let checkAlreadyLikeIt = false;

  // user 테이블에 likeProduct에 이미 해당 상품을 찜 해뒀는지 확인
  (await user.findOne({
    user_id_email: args.user_id_email
  })).likeProduct.forEach(item => {
    if (item === args.productId) {
      checkAlreadyLikeIt = !checkAlreadyLikeIt;
    }
  });

  // 해당 상품이 찜이 안되었을 경우에만 추가
  if (!checkAlreadyLikeIt) {
    await user.update(
      { user_id_email: args.user_id_email },
      { $push: { likeProduct: args.productId } }
    );
  }

  return await user.findOne({ user_id_email: args.user_id_email });
};

const ADD_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const {
    type,
    subType,
    hospitalCode,
    hospitalLoc,
    hospitalName,
    productName,
    description,
    price,
    options
  } = args;
  const {
    product,
    productCounter,
    hospital,
    hospitalAdmin,
    productOption
  } = ctx;

  const chk_dup = await CHECK_DUP_DATA([
    obj,
    {
      type: type,
      subType: subType,
      hospitalCode: hospitalCode,
      productName: productName
    },
    product
  ]);

  let option1 = [];
  let option2 = [];
  let inputTarget = 0;

  SEPERATE_TYPE_FOR_PRODUCT_OPTIONS(options, (o1, o2) => {
      option1 = o1;
      option2 = o2;
  });
  delete args.options;

  if (!chk_dup) {
    const number = await autoNumbering("productid", productCounter);
    let productSubNumber = { productId: number };
    const optionUpdate = await SAVE_N_UP_PRODUCT_OPTION(
      number,
      option1,
      option2,
      productOption,
      "SAVE"
    );
    const optionObj = { options: optionUpdate._id };

    let new_args = Object.assign(args, productSubNumber, optionObj);

    const newProduct = await new product(new_args).save();
    // 새 제품 병원의 리스트로 업데이트
    await hospital.update(
      { code: args.hospitalCode },
      { $push: { products: newProduct.productId } }
    );
    return newProduct;
  } else {
    return chk_dup;
  }
};

const EDIT_PRODUCT = async params => {
  console.log("EDIT_PRODUCT");
  const [obj, args, ctx] = [...params];
  const { product, productOption } = ctx;

  const pid = args.id;
  const needToCngOptions = args.options;
  if (!args.options) {
    await product.update({ productId: pid }, { $set: args });
    return product.findOne({ productId: pid });
  } else {
    let option1 = [];
    let option2 = [];
    delete args.id;
    delete args.options;
    SEPERATE_TYPE_FOR_PRODUCT_OPTIONS(needToCngOptions, (o1, o2) => {
      option1 = o1;
      option2 = o2;
    });
    // console.log(pid, option1, option2);
    await SAVE_N_UP_PRODUCT_OPTION(
      pid,
      option1,
      option2,
      productOption,
      "UPDATE"
    );
    await product.update({ productId: pid }, { $set: args });
    return product.findOne({ productId: pid });
  }
};

const SEPERATE_TYPE_FOR_PRODUCT_OPTIONS = (options, cb) => {
  let option1 = [];
  let option2 = [];
  let inputTarget = 0;
  options.forEach(item => {
    if (item.length === 0) inputTarget = !inputTarget;
    else {
      inputTarget ? option2.push(item) : option1.push(item);
    }
  });
  return cb(option1, option2);
};

const SAVE_N_UP_PRODUCT_OPTION = async (pid, o1, o2, productOption, type) => {
  console.log(pid, o1, o2, type);
  if (type === "SAVE") {
    return await productOption({
      productId: pid,
      type: o1,
      subType: o2
    }).save();
  } else if (type === "UPDATE") {
    return await productOption.update(
      { productId: pid },
      { $set: { type: o1, subType: o2 } }
    );
  }
};

export { ADD_LIKE_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT };
