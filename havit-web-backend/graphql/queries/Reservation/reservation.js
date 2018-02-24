const ObjectId = require("mongodb").ObjectID;

const FIND_RESERVATION = async ( params ) => {
  const [obj, args, {reservation}] = [...params];

  if ( obj ) {
    return await reservation.find({ user_id_email: obj.user_id_email });
  } else {
    return await reservation.find(args);
  }
};

const GET_DASHBOARD_COUNT = async ( params ) => {
  const [obj, { code }, { hospital, product, reservation }] = [...params];
  const countArr = [];
  // reservation.chk_total_purch_cancel_Count((res) => {
  //   console.log( res);
  // });
  // const hospitalProductList = (await hospital.findOne({code:code})).products;
  // console.log("hospitalProductList : ", hospitalProductList);

  // ((await hospital.findOne({code:code})).products).map( async item => {
  //   return (await product.findOne({_id: ObjectId(item)})).productName;
  // }).map ( async item2 => {
  //   console.log( item2);
  //   if (await reservation.find({productName: items2}, {status: 1, _id:0})) {
  //   }
  // })

  // async function a() {
  //   const b = await hospitalProductList.map(async (item) => {
  //     return await product.findOne({_id: ObjectId(item)})
  //   })
  //   return b.map( a => a.productName)
  // }
  // a().then( a => console.log(a));
  const hospitalReservationList = (await hospital.findOne({code:code})).reservations;
  console.log(hospitalReservationList);
  // const a = await reservation.findOne({})


  // const a = (await reservation.find({hospitalCode:code})).map( item => {
  //   return item.productName;
  // });

  // console.log( 'title ', a);
  // console.log("code: ", code);
  // var a = awiat reservation.find({hospitalCode : code}, {products:1, _id:0});
  // console.log(a);

  // return await reservation.chk_total_purch_cancel_count((res) => {
  //   console.log( res);
  // })
}

export {
  FIND_RESERVATION,
  GET_DASHBOARD_COUNT
};
