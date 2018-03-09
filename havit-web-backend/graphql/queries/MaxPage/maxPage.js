const MAX_PAGE = async params => {
  const [obj, args, ctx] = [...params];
  const { product, reservation, hospitalAdmin, event, notice, maxPage } = ctx;
  const limit = 20;
  const products_count = Math.ceil((await product.find().count()) / limit);
  const reservations_count = Math.ceil(
    (await reservation.find().count()) / limit
  );
  const hospitalAdmins_count = Math.ceil(
    (await hospitalAdmin.find().count()) / limit
  );
  const events_count = Math.ceil((await event.find().count()) / limit);
  const notices_count = Math.ceil((await notice.find().count()) / limit);

  console.log(products_count, reservations_count, hospitalAdmins_count, events_count, notices_count);

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
