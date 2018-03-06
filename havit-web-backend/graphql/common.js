const CHECK_DUP_DATA = async params => {
  const [obj, args, db] = [...params];
  console.log( args);
  return await db.findOne(args);
};

const CHK_MAX_PAGE = async db => {
  return Math.floor((await db.find().count()) / 12 + 1);
};

export { CHECK_DUP_DATA, CHK_MAX_PAGE };
