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
        const a = await ctx.review.findOne({ _id: ObjectId(item) })
        return a;
      });
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
      // Client 쪽에서 product의 oid를 전달함
      args.product = ObjectId(args.product);
      // save() : 리뷰 작성시 해당 review 를 product에 연결한다.
      var save = async () => {
        return await ctx.product.update(
          { _id: ObjectId(args.product) },
          {
            $push:
              { review: args.product }
          }
        )
      }
      save();
      return new ctx.review(args).save();
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
    }
  }
};
