const ObjectId = require('mongodb').ObjectID;
import { reserveNumCal } from '../../utils';
import * as query from '../queries';

export default {
  Query: {
    Users: (...params) => query.FIND_USER(params),
    Reservations : (...params) => query.FIND_RESERVATION(params),
    LikeProducts: (...params) => query.LIKE_PRODUCT(params),
    Products: (...params) => query.FIND_PRODUCT(params),
    Reviews: (obj, args, ctx) => query.FIND_REVIEW(params),
    Hospitals: (obj, args, ctx) => query.FIND_HOSPITAL(params),
    HospitalAdmin: (obj, args, ctx) => query.FIND_HOSPITALADMIN(params),
    Banners: async (obj, args, ctx) => {
      switch (args.type) {
        case 'skinBanners' : {
          return (await ctx.banner.findOne({}, { skinBanners: 1, _id: 0 })).skinBanners
          break;
        }
        case 'beautyBanners' : {
          return (await ctx.banner.findOne({}, { beautyBanners: 1, _id: 0 })).beautyBanners
          break;
        }
        case 'totalBanners': {
          return (await ctx.banner.findOne({}, { totalBanners: 1, _id: 0 })).totalBanners
          break;
        }
      }
    }
  },
  Banner : {
    totalBanners: async (obj, args, ctx) =>{
      return await ctx.product.find({
        _id: ObjectId(obj)
      })
    },
    skinBanners: async (obj, args, ctx) => {
      return await ctx.product.find({
        _id: ObjectId(obj)
      })
    },
    beautyBanners: async (obj, args, ctx) => {
      return await ctx.product.find({
        _id: ObjectId(obj)
      })
    }
  },
  Hospital : {
    reservations: async (obj, args, ctx) => {
      return (await ctx.hospital.findOne(
        {adminAccount: obj.adminAccount},
        {reservations:1}))
        .reservations.map(async item => {
          console.log( item );
        return await ctx.reservation.findOne({ reserveNum: item });
      });
    },

    products: (obj, args, ctx) => {
      return obj.products.map( async item => {
        return await ctx.product.findOne({_id: ObjectId(item)});
      })
    }
  },

  Product: {
    reviews: async (obj, args, ctx) => {
      return obj.reviews.map(async item => {
          return await ctx.review.findOne({ _id: ObjectId(item) });
        })
    }
  },

  User: {
    reservation: async (obj, args, ctx) => {
      return await ctx.reservation.find({user_id_email: obj.user_id_email});
    },
    likeProduct: async (obj, args, ctx) => {
      return (await ctx.user.findOne({user_id_email:obj.user_id_email})).likeProduct
        .map(async item => {
          return await ctx.product.findOne({_id:ObjectId(item)});
        })
    },
    reviews: async (obj, args, ctx) => {
      return obj.reviews.map( async item => {
        return await ctx.review.findOne({_id: ObjectId(item)});
      })
    }
  },


  Review : {
    product: async (obj, args, ctx) => {
      const convert = obj._id.toString();
      return (await ctx.product.findOne({_id:ObjectId(obj.product)}))
      a.reviews.filter(item => {
          console.log(item);
          if (item === convert) return a;
        })
    }
  },

  Mutation: {
    addReservation: async (obj, args, ctx) => {
      let obj_reserveNum = { reserveNum: reserveNumCal() };
      let new_args = Object.assign(args, obj_reserveNum);

      const addToHospitalReserveLists = async (id) => {
        return await ctx.hospital.update(
          { code: args.hospitalCode },
          { $push:
            { reservations: id }
          }
        );
      }
      addToHospitalReserveLists(obj_reserveNum.reserveNum);
      return await new ctx.reservation(new_args).save();
    },
    addReview: async (obj, args, ctx) => {
      args.product = ObjectId(args.product);
      const targetReview = (await new ctx.review(args).save());
      const save = async (id) => {
        await ctx.user.update(
          { user_id_email: args.user_id_email },
          {
            $push:
              { reviews: id }
          }
        );
        return await ctx.product.update(
          { _id: ObjectId(args.product) },
          {
            $push:
              { reviews: id }
          }
        )
      }
      save(targetReviewId._id);
      return targetReview;
    },

    addUserInfo: async (obj, args, ctx) => {
      let code = args.code;
      let userPreUpdate = async () => {
        if (args.code) {
          let chkHospitalCode = async ({ code }) => {
            let findHospital = await ctx.hospitalAdmin.findOne({ code: code });
            if (findHospital) {
              let regUserToHospital = async ({ code, user_id_email }) => {
                return await ctx.hospital.update(
                  { code: code },
                  {
                    $set: {
                      code: code, adminAccount: user_id_email
                    }
                  },
                  { upsert: 1 }
                )
              }
              regUserToHospital(args);
            }
          }
          chkHospitalCode(args);
        } else {
          code = null;
        }
      }

      let userUpdate = async () => {
        await ctx.user.update(
          { user_id_email: args.user_id_email },
          {
            $set: {
              name: args.name,
              phone: args.phone,
              birthday: args.birthday,
              gender: args.gender,
              hospitalCode: args.code,
              likeArea: args.likeArea,
              likePoint: args.likePoint
            }
          }
        )
      }
      userPreUpdate();
      userUpdate();
      return await ctx.user.findOne({ user_id_email: args.user_id_email });
    },
    addLikeProducts : async (obj, args, ctx) => {
      let checkAlreadyLikeIt = false;
      let userInfo = async () => {
        var a = await ctx.user.findOne({ user_id_email: args.user_id_email });
        return a;
      };

      (await ctx.user.findOne({user_id_email:args.user_id_email})).likeProduct
        .forEach(item => {
          console.log(item, args.productId);
          if (item === args.productId) {
            checkAlreadyLikeIt = !checkAlreadyLikeIt;
            console.log(checkAlreadyLikeIt);
          }
        }
      )
      // 찜하기 상품이 이미 등록되어 없을 때에만 등록 (중복 추가 예외처리)
      if ( !checkAlreadyLikeIt ) {
        await ctx.user.update(
        {user_id_email: args.user_id_email},
        {$push:
          { likeProduct: args.productId }
        });
      }

      return userInfo();
    },

    modifyReservation : async (obj, args, ctx) => {
      let updateUserReservation = async () => {
        return await ctx.reservation.update(
          {reserveNum: args.reserveNum},
          {
            $set : {
              reserveDate: args.reserveDate,
              userName: args.userName,
              phone: args.phone
            }}
        )}
      updateUserReservation();
      return await ctx.reservation.findOne({ reserveNum: args.reserveNum })
    },

    fixReservation : async (obj, args, ctx) => {
      let fixReserveCareDate = async () => {
        return await ctx.reservation.update(
          { reserveNum: args.reserveNum },
          {
            $set: {
              careDate: args.careDate
            }
          }
        )
      }
      let sellingCount = async () => {
        let arg = await ctx.reservation.findOne(
          { reserveNum: args.reserveNum },
          { _id: 0, hospitalCode: 1, productName: 1 }
        ).then ( async res => {
          return await ctx.product.update(
            { arg },
            {
              $inc: {
                purchased: 1
              }
            })
        })
      }
      fixReserveCareDate();
      sellingCount();
      return await ctx.reservation.findOne({ reserveNum: args.reserveNum })
    },

    confirmPurchase : async ( obj, args, ctx ) => {
      let confirmUpdate = async () => {
        return await ctx.reservation.update(
          { reserveNum: args.reserveNum },
          {
            $set: {
              status: "시술완료"
            }
          }
        )
      }
      let sellingCount = async () => {
        let arg = await ctx.reservation.findOne(
          { reserveNum: args.reserveNum },
          { _id: 0, hospitalCode: 1, productName: 1 }
        ).then(async res => {
          return await ctx.product.update(
            { arg },
            {
              $inc: {
                purchased: 1
              }
            })
        })
      }
      confirmUpdate();
      sellingCount();
      return await ctx.reservation.findOne({reserveNum : args.reserveNum})
    }
  }
};
