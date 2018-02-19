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

// // export redirect: <script>window.close(); window.opener.location.href="http://localhost:3000/addinfo"</script>
