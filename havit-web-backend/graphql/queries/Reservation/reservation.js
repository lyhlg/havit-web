const FIND_RESERVATION = async ( params ) => {
  const [obj, args, {reservation}] = [...params];
  // reservation.chk_total_purch_cancel_Count((res) => {
  //   console.log( res);
  // });
  // console.log( a);
  // var a = reservation.findOne({userName:"이용현"}).totalRsrvCount();
  // console.log(a);
  if ( obj ) {
    return await reservation.find({ user_id_email: obj.user_id_email });
  } else {
    return await reservation.find(args);
  }
};

const GET_DASHBOARD_COUNT = async ( params ) => {
  const [obj, { code }, { hospital, reservation }] = [...params];
  // console.log("code: ", code);
  // var a = awiat reservation.find({hospitalCode : code}, {products:1, _id:0});
  // console.log(a);

  // return await reservation.chk_total_purch_cancel_count((res) => {
  //   console.log( res);
  // })
}

export default FIND_RESERVATION;
