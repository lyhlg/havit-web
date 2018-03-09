const ObjectId = require("mongodb").ObjectID;

const FIND_HOSPITAL = async params => {
  const [obj, args, ctx] = [...params];
  const { hospital } = ctx;

  return await hospital.find(args);
};

export {
  FIND_HOSPITAL
};
