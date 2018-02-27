import { autoNumbering } from "../../../utils/index";

const ADD_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { event, productCounter } = ctx;
  const realVal = Object.keys(args).length;
  const number = await autoNumbering("productid", productCounter);

  let productId_counter = { productId: number };
  let new_args = Object.assign(args, productId_counter);

  if (realVal === 7) {
    return await event(new_args).save();
  }
};

const DEL_EVENT = async params => {
  const [ obj, args, ctx ] = [...params];
  const { hospitalCode, productId } = args;
  const { event } = ctx;

  await event.update(
    { productId },
    { status : "종료" })

  return await event.findOne({ productId : productId });
};

export { ADD_EVENT, DEL_EVENT };
