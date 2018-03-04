import { autoNumbering } from "../../../utils/index";

const ADD_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { event, counter, hospitalAdmin } = ctx;
  const realVal = Object.keys(args).length;
  const number = await autoNumbering("eventid", counter);
  const hospitalInfo = await hospitalAdmin.findOne(
    { code: args.hospitalCode },
    { loc: 1, name: 1, _id: 0 }
  );

  const new_hospitalInfo = {
    hospitalName: hospitalInfo.name,
    hospitalLoc: hospitalInfo.loc
  }

  let productId_counter = { productId: number };
  let new_args = Object.assign(args, productId_counter, new_hospitalInfo);

  return await event(new_args).save();

};

const DEL_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode, productId } = args;
  const { event } = ctx;

  await event.update({ productId }, { status: "종료" });

  return await event.findOne({ productId: productId });
};

export { ADD_EVENT, DEL_EVENT };
