const GET_PAYMENT = async params => {
  const [ obj, args, ctx ] = [...params];
  const { code } = args;
  const { payment } = ctx;
  return await payment.findOne({code:code});
};

export {
  GET_PAYMENT
};



/*

  const a = (await hospital.findOne({ code: code })).reservations;
  console.log(a);
  const b = await a.map(async item => {
    const c = await reservation.findOne({ reserveNum: item });
    console.log(c.openPhoneNum);
    if (c.openPhoneNum === 1) {
      const d = await product.find({
        productName: c.productName,
        hospitalCode: c.hospitalCode
      });
      return d.price * 0.1;
    }
    console.log('hihi')
    // console.log(c);
  });
  (async () => {
    console.log(await b);
  })();
  */
