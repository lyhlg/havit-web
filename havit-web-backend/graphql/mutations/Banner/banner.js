const ObjectId = require("mongodb").ObjectID;

import CHECK_DUP_DATA from '../../common';

const ADD_BANNER = async (params) => {
  const [obj, args, { banner, product }] = [...params];

  if ( !CHECK_DUP_DATA ) {
    const productSubInfo = await product.findOne(args,{ _id:1, type:1, subType:1 });
    console.log( productSubInfo);
    await new banner({
      type: productSubInfo.type,
      subType: productSubInfo.subType,
      product: productSubInfo._id}).save()
    console.log(a);
  }



}

const DEL_BANNER = async (params) => {

}


export {
  ADD_BANNER,
  DEL_BANNER
};
