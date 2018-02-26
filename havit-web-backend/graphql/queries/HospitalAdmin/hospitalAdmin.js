const FIND_HOSPITAL_ADMIN = async ( params ) => {
  const [obj, args, { hospitalAdmin }] = [...params];
  return await hospitalAdmin.find(args);

};

export default FIND_HOSPITAL_ADMIN;
