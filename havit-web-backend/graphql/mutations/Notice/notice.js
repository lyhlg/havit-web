import { autoNumbering } from '../../../utils/index';
import { CHECK_DUP_DATA } from '../../common';

const ADD_NOTICE = async (params) => {
  const [obj, args, {notice, noticeCounter}] = [...params];
  const numberOfCount =  Object.keys(args).length;

  const chk_dup = await CHECK_DUP_DATA([obj, args, notice]);
  if ( !chk_dup && (numberOfCount===3) ) {
    const number = await autoNumbering("noticeid", noticeCounter);
    console.log( number );
    let obj_counter = { _id : number };
    let new_args = Object.assign(args, obj_counter);
    return await new notice(new_args).save();

  } else if ( numberOfCount !== 3 ){
    return {
      title:"Input your Title, IF you don't fill it, your request is not passed.",
      body:"Input your Body, IF you don't fill it, your request is not passed.",
      author:"Input your Name, IF you don't fill it, your request is not passed.",
      view:404
    };
  } else {
    return chk_dup;
  }
};

const DEL_NOTICE = async (params) => {
  const [obj, {id}, { notice }] = [...params];
  const arg = { _id : id}
  const chk_dup = await CHECK_DUP_DATA([obj, arg, notice]);
  console.log( chk_dup);
  if ( chk_dup ) {
    await notice.remove(arg);
    return chk_dup;
  } else {
    return {
      title:"Request ERROR :(",
      body:"Bad ID Number",
      author:"PLZ CHECK your request ID!~",
      views:404
    };
  }
};

export {
  ADD_NOTICE,
  DEL_NOTICE
};
