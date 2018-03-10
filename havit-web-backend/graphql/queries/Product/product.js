import { CHK_MAX_PAGE } from "../../common";

const FIND_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { type, subType, page, productId } = args;
  const { product, review } = ctx;
  const limit = 20;

  // page 설정
  page ? page : 1;

  const results = async target => {
    return await product
      .find(target)
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  };

  if (obj) {
    if (obj.productId && !obj.stars) {
      // 예약 -> 제품검색
      return result({ productId: obj.productId });
    } else if (obj.code) {
      // 병원 -> 제품검색
      let prod = await obj.products.map(async item => {
        return await product.findOne({ productId: item });
      });
      return await Promise.all(prod).then(res => res.reverse());
    } else if ("" + obj.purchased && "" + obj.canceled) {
      return await product.find({ productId: obj._id });
    } else if (obj.stars) {
      // 리뷰 -> 제품검색
      return await product.findOne({ productId: obj.productId });
    }
  } else {
    // 상품 상세 정보
    if (productId) return results({ productId });

    // type 과 subtype이 모두 넘어왔을 경우
    if (type && subType && !productId) return results({ type, subType });

    // type만 넘어올 경우
    if (type && !productId) return results({ type: args.type });

    // 전체검색
    if (!type && !subType && !productId) return results({});
  }
};

const LIKE_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, page } = args;
  const { user, product } = ctx;

  if (obj) {
    const { user_id_email } = obj;
    return (await user.findOne({ user_id_email })).likeProducts.map(
      async productId => {
        return await product.findOne({ productId });
      }
    );
  } else {
    return (await user.findOne({ user_id_email })).likeProducts.map(
      async productId => {
        return await product.findOne({ productId });
      }
    );
  }
};

const SEARCH_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { filter, keyword } = args;
  const { product } = ctx;

  return filter === "hospital"
    ? await product.find({ hospitalName: new RegExp(keyword) })
    : await product.find({ productName: new RegExp(keyword) });
};

export { FIND_PRODUCT, LIKE_PRODUCT, SEARCH_PRODUCT };
