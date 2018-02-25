import { autoNumbering } from '../../../utils/index';
import { CHECK_DUP_DATA } from '../../common';

const ADD_LIKE_PRODUCT = async ( params ) => {
  const [obj, args, { user }] = [...params];
  let checkAlreadyLikeIt = false;

  // user 테이블에 likeProduct에 이미 해당 상품을 찜 해뒀는지 확인
  (await user.findOne({ user_id_email: args.user_id_email })).likeProduct
    .forEach(item => {
      if (item === args.productId) {
        checkAlreadyLikeIt = !checkAlreadyLikeIt;
      }}
    )

  // 해당 상품이 찜이 안되었을 경우에만 추가
  if (!checkAlreadyLikeIt) {
    await user.update(
      { user_id_email: args.user_id_email },
      { $push: { likeProduct: args.productId } });
  }

  return await user.findOne({ user_id_email: args.user_id_email });
}

const ADD_PRODUCT = async ( params ) => {
  const [obj, args, { product, productCounter }] = [...params];
  const chk_dup = await CHECK_DUP_DATA([obj, args, product]);
  if ( !chk_dup ) {
    const number = await autoNumbering("productid", productCounter);
    let obj_counter = { productId : number };
    let new_args = Object.assign(args, obj_counter);
    return await new product(new_args).save();
  } else {
    return chk_dup;
  }
}

const EDIT_PRODUCT = async (params) => {
  const [obj, args, { product }] = [...params];

  await product.update(
      { productId: args.id },
      { $set: args }
    )
  return product.findOne({ productId: args.id });
}

export {
  ADD_LIKE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT
}
