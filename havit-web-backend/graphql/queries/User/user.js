const FIND_USER = async ( params ) => {
  const [ obj, args, ctx ] = [...params];
  const { user_id_email, password } = args;
  const { user } = ctx;
  console.log( "FIND_USER!!!! ");

  if ( !password ){
    return await user.find({user_id_email});
  }
  console.log( password );
  return await user.hasingPasswd (password, async (res) => {
    console.log( user_id_email, res);
    return await user.find({
      user_id_email, password: res
    });
  })

};

export {
  FIND_USER,
}
