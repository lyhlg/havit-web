const ObjectId = require("mongodb").ObjectID;

import { CHECK_DUP_DATA } from "../../common";

const ADD_BANNER = async params => {
  const [obj, args, ctx] = [...params];
  const { title, img, url, priority, status } = args;
  const { banner } = ctx;
  // const productSubInfo = await GET_PRODUCT_OID_USING_PRODUCTID([
  // obj, {productId: productId}, product])
  const chk_dup = await CHECK_DUP_DATA([obj, { url: url }, banner]);
  if (!chk_dup) {
    return await new banner({
      title : title,
      img: img,
      url: url,
      priority: priority,
      status: status
    }).save();
  } else {
    return {
      img: "Already Registed Banner!",
      url: "You have to different path "
    };
  }
};

const MODIFY_BANNER = async params => {
  const [obj, args, ctx] = [...params];
  const { banner } = ctx;

  if (!(Object.keys(args).length === 0)) {
    await banner.update({ url: args.url }, { $set: args });
  } else {
    return {
      img: "You need parameter at least one."
    };
  }

  return await banner.findOne({ url: args.url });
};

const DEL_BANNER = async params => {
  const [obj, args, ctx] = [...params];
  const { banner } = ctx;

  const exist = await CHECK_DUP_DATA([obj, { url: args.url }, banner]);
  console.log(exist);
  if (exist) {
    await banner.update({ url: args.url }, { $set: { status: "판매종료" } });
    return await banner.findOne({ url: args.url });
  } else {
    return {
      type: "Mismatch your productId",
      subType: "Plz Check productId"
    };
  }
};

const GET_PRODUCT_OID_USING_PRODUCTID = async params => {
  const [obj, args, db] = [...params];
  return await db.findOne(args, { _id: 1, type: 1, subType: 1 });
};

export {
  ADD_BANNER,
  DEL_BANNER,
  GET_PRODUCT_OID_USING_PRODUCTID,
  MODIFY_BANNER
};
