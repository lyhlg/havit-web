import { autoNumbering } from "../../../utils/index";
import { CHECK_DUP_DATA } from "../../common";

const ADD_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { event, counter, hospitalAdmin } = ctx;
  const number = await autoNumbering("eventid", counter);
  const hospitalInfo = await hospitalAdmin.findOne(
    { code: args.hospitalCode },
    { loc: 1, name: 1, _id: 0 }
  );

  const new_hospitalInfo = {
    hospitalName: hospitalInfo.name,
    hospitalLoc: hospitalInfo.loc
  };

  let productId_counter = { productId: number };
  let new_args = Object.assign(args, productId_counter, new_hospitalInfo);
  console.log(new_args);
  return await event(new_args).save();
};

const MODIFY_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { productId } = args;
  const { event } = ctx;

  delete args.productId;

  await event.update({ productId }, { $set: args });
  return event.findOne({productId});
};

const DEL_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode, productId } = args;
  const { event } = ctx;

  const exist = await event.findOne({ hospitalCode, productId });

  if (exist) {
    await event.remove({ hospitalCode, productId });
    return exist;
  }
};

export { ADD_EVENT, MODIFY_EVENT, DEL_EVENT };
