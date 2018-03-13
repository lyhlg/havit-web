const MAX_PAGE = async params => {
  const [obj, args, ctx] = [...params];
  const { email } = args;
  const { product, reservation, hospitalAdmin, event, notice, maxPage } = ctx;
  const limit = 20;
  let reservations_count,
    products_count,
    hospitalAdmins_count,
    events_count,
    notices_count;

  await hospitalAdmin.findOne({ adminAccount: email }).then(async res => {
    if (res) {
      reservations_count = Math.ceil(
        (await reservation.find({ hospitalCode: res.code }).count()) / limit
      );
    } else {
      reservations_count = Math.ceil(
        (await reservation.find({ user_id_email: email }).count()) / limit
      );
    }
  });

  products_count = Math.ceil((await product.find().count()) / limit);
  hospitalAdmins_count = Math.ceil(
    (await hospitalAdmin.find().count()) / limit
  );
  events_count = Math.ceil((await event.find().count()) / limit);
  notices_count = Math.ceil((await notice.find().count()) / limit);


  (await maxPage.findOne({ _id: "maxpage" }))
    ? await maxPage.update(
        { _id: "maxpage" },
        {
          products_count,
          reservations_count,
          hospitalAdmins_count,
          events_count,
          notices_count
        }
      )
    : await maxPage({
        _id: "maxpage",
        products_count,
        reservations_count,
        hospitalAdmins_count,
        events_count,
        notices_count
      }).save();

  return await maxPage.find();
};

export { MAX_PAGE };
