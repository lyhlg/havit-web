const GET_PAYMENT = async (params) => {
  const [obj, args, ctx] = [...params];
  const { code } = args;
  const { hospital, reservation, product } = ctx;
  const reservationList = await reservation.find({hospitalCode:code});
  const a = reservationList.map( async item => {
    if ( item.openPhoneNum === 1 ){
      console.log( '1이다 ' , item.product)
      const calPrice = (await product.findOne(
        {productName: item.productName, hospitalCode: item.hospitalCode},
        {price:1, _id:0}
      )).price
      // console.log( calPrice. )
      // item.product.map( product => {
      //   console.log(product);
      //   console.log( product.price * 0.1);
      // })
    }
  })

}

export {
  GET_PAYMENT
}
