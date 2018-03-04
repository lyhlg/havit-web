const ObjectId = require("mongodb").ObjectID;
import { autoNumbering } from "../../../utils/index";

import { CHECK_DUP_DATA } from "../../common";

const ADD_BANNER = async params => {
  const [obj, args, ctx] = [...params];
  const { title, img, url, priority, status } = args;
  const { banner, counter } = ctx;
  const chk_dup = await CHECK_DUP_DATA([obj, { url: url }, banner]);
  let number, obj_counter;
  if (chk_dup) {
    return {
      img: "Already Registed Banner!",
      url: "You have to different path "
    };
  }

  number = await autoNumbering("bannerid", counter);
  obj_counter = { _id: number };

  return await new banner({
    _id: number,
    title: title,
    img: img,
    url: url,
    priority: priority
  }).save();
};

const MODIFY_BANNER = async params => {
  const [obj, args, ctx] = [...params];
  const { id, img, title, url, priority } = args;
  const { banner } = ctx;

  if (!img) delete args.img;
  await banner.update({ _id: id }, { $set: args });

  return await banner.findOne({ url: args.url });
};

const DEL_BANNER = async params => {
  const [obj, args, ctx] = [...params];
  const { id } = args;
  const { banner } = ctx;
  const exist = await CHECK_DUP_DATA([obj, { _id: id }, banner]);

  await banner.remove({ _id: id });
  return exist;
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
