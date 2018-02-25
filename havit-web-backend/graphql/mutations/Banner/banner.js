const ObjectId = require("mongodb").ObjectID;

import { CHECK_DUP_DATA } from '../../common';

const ADD_BANNER = async (params) => {
  const [obj, {productId, priority}, { banner, product }] = [...params];
  const productSubInfo = await GET_PRODUCT_OID_USING_PRODUCTID([
    obj, {productId: productId}, product])

  // const productSubInfo = await product.findOne(
  //   {productId: productId},
  //   { _id:1, type:1, subType:1 });
  const chk_dup = await CHECK_DUP_DATA([obj,{product: productSubInfo._id},banner]);
  // const chk_dup = await banner.findOne({product: productSubInfo._id});
  if ( !chk_dup ) {
    return await new banner({
      type: productSubInfo.type,
      subType: productSubInfo.subType,
      priority: priority,
      product: productSubInfo._id}).save();
  } else {
    return {
      type: "Alreay product exist.",
      subType: "Check your banner list"
    }
  }
}

const DEL_BANNER = async (params) => {
  const [obj, { productId }, { banner, product }] = [...params];
  const productSubInfo = await GET_PRODUCT_OID_USING_PRODUCTID([
    obj, {productId: productId}, product])
  const searchTarget = { product: productSubInfo._id };
  const exist = await CHECK_DUP_DATA([obj,searchTarget, banner]);
  console.log(exist);
  if (exist) {
    await banner.update(
      searchTarget,
      {$set : { status : "판매종료" }}
    )
    return await banner.findOne(searchTarget);
  } else {
    return {
      type: "Mismatch your productId",
      subType: "Plz Check productId"
    }
  }
}

const GET_PRODUCT_OID_USING_PRODUCTID = async (params) => {
  const [obj, args, db] = [...params];
  return await db.findOne(args, { _id:1, type:1, subType:1 });
}


export {
  ADD_BANNER,
  DEL_BANNER,
  GET_PRODUCT_OID_USING_PRODUCTID
};
