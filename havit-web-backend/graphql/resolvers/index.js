const ObjectId = require('mongodb').ObjectID;
import reserveNum from '../../jsFunction';

const prepare = (o) => {
  o._id = o._id.toString();
  return o;
};


export default {
  Query: {
    Users: async (obj, args, ctx) => await ctx.user.find(),
    Reservations : async (obj, args, ctx) => {
      return await ctx.reservation.find();
    },
    ReservationLists: async (obj, args, ctx) => {
      return await ctx.reservation.find({ user: args.user_id_email });
    },
    LikeProducts: async (obj, args, ctx) => { // 잘안되네... data가 null로 나온다.
      return (await ctx.user.findOne({ user_id_email: args.user_id_email }))
        .likeProduct
        .map(async item => {
          console.log(item);
          return await ctx.product.find({ _id: ObjectId(item) });
        })
    },
    Products: async (obj, args, ctx) => {
      return (await ctx.product.find(args)).map(item => {
        item.review.filter(async i => {
          const a = await ctx.review.find({ _id: ObjectId(i) });
        })
        // return prepare(item);
        return item;
      });
    },

    EditInfo: async (obj, args, ctx) => {
      return ctx.user.find({ user_id_email: args.user_id_email });
    },
    Reviews: async (obj, args, ctx) => {
      return await ctx.review.find();
    },
    Hospitals: async (obj, args, ctx) => {
      return await ctx.hospital.find(args);
    }
  },
  Hospital : {
    reservations: async (obj, args, ctx) => {
      return (await ctx.hospital.findOne(
        {adminAccount: obj.adminAccount},
        {reservations:1}))
        .reservations.map(async item => {
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
      return await obj.review.map(async item => {
        const res = await ctx.review.findOne({ _id: ObjectId(item) })
        return res;
      });
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
      let obj_reserveNum = { reserveNum: reserveNum() };
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
      const targetReviewId = (await new ctx.review(args).save());
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
      return targetReviewId;
    },

    addUserInfo: async (obj, args, ctx) => {
      var userUpdate = async () => {
        await ctx.user.update(
          { user_id_email: args.user_id_email },
          {
            $set: {
              name: args.name,
              phone: args.phone,
              birthday: args.birthday,
              gender: args.gender
            },
            $push: {
              likeArea: {
                $each: args.likeArea
              },
              likePoint: {
                $each: args.likePoint
              }
            }
          }
        )
      }
      userUpdate();
      return await ctx.user.find({ user_id_email: args.user_id_email });
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
    }
  }
};
