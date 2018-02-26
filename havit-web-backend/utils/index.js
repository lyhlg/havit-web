// ISO 시간 입력으로 입력 되는 date 값에 +9 시간 해준다.
export const getCurrentDate = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var today = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();

  return new Date(
    Date.UTC(year, month, today, hours, minutes, seconds, milliseconds)
  );
}

export const reserveNumCal = () => {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    millisecond = date.getMilliseconds();

  if (month < 10) { month = '0' + month.toString(); }
  if (day < 10) { day = '0' + day.toString(); }
  if (hour < 10) { hour = '0' + hour.toString(); }
  if (minute < 10) { minute = '0' + minute.toString(); }
  if (second < 10) { second = '0' + second.toString(); }
  if (millisecond < 10) {
    millisecond = '00' + millisecond.toString();
  } else if (millisecond < 100) {
    millisecond = '0' + millisecond.toString();
  }
  let ChangeNumToStr = (...dateParams) => {
    return dateParams.map(item => item.toString()).join('');
  };
  return ChangeNumToStr(year, month, day, hour, minute, second, millisecond);
};
export const FRONT_DEV_SRV = 'http://localhost:3000';



export const autoNumbering = async (sequenceName, targetCounter) => {
  switch (sequenceName) {
    case 'productid' : {
      const exist = await targetCounter.findOne({_id: sequenceName});

      if ( !exist ){
        await targetCounter({_id:sequenceName, sequence_value:0}).save();
      }
      const sequenceDocument = await targetCounter.update(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } }
      );

      return (await targetCounter.findOne({_id:sequenceName})).sequence_value;
      break;
    }
    case 'noticeid' : {
      const exist = await targetCounter.findOne({_id: sequenceName});

      if ( !exist ){
        await targetCounter({_id:sequenceName, sequence_value:0}).save();
      }
      const sequenceDocument = await targetCounter.update(
        { _id: sequenceName },
        { $inc: { sequence_value: 1 } }
      );

      return (await targetCounter.findOne({_id:sequenceName})).sequence_value;
    }
  }
}
