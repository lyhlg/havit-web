import { CHK_MAX_PAGE } from "../../common";

const FIND_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { type, subType, page, productId } = args;
  const { product, review } = ctx;
  const limit = 12;

  // For pagenation
  const maxPage = await CHK_MAX_PAGE(product);
  await product.updateMany({}, { $set: { maxPage: maxPage } });

  // page 설정
  page ? page : 1;

  if (obj) {
    if (obj.productId && !obj.stars) {
      // 예약 -> 제품검색
      return await product.find({ productId: obj.productId });
    } else if (obj.code) {
      // 병원 -> 제품검색
      return await obj.products.map(async item => {
        return await product.findOne({ productId: item });
      });
    } else if (obj.stars) {
      // 리뷰 -> 제품검색
      return await product.findOne({ productId: obj.productId });
    }
  }

  const results = async target => {
    return await product
      .find(target)
      .sort({ productId: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  };

  // 전체 상품 검색
  if (!(type && subType)) return results({});

  // 상품 상세 정보
  if (productId) {
    console.log("productId만 들어왔을 때 ");
    return results({ productId });
  }

  // type 과 subtype이 모두 넘어왔을 경우
  if (type && subType) {
    return results({ type, subType });
  }

  // type만 넘어올 경우
  if (type) results({ type: args.type });
};

const LIKE_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { page, user, product } = ctx;
  const limit = 12;

  page ? page : 1;

  if (obj) {
    const { user_id_email } = obj;
    return (await user.findOne({ user_id_email })).likeProducts.map(
      async item => {
        return await product.findOne({ productId: item });
      }
    );
  } else {
    return (await user.findOne(args)).likeProducts.map(async item => {
      return await product.findOne({ productId: item });
    });
  }
};

export { FIND_PRODUCT, LIKE_PRODUCT };
