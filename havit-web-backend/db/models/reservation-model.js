const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var count = 0;

function reserNumCal() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var today = date.getDate();
  console.log( year, month, today)
  if (month < 10) {
    month = '0' + month.toString();
  }
  if (today < 10) {
    today = '0' + today.toString();
  }
  count++;
  switch (count.toString().length) {
    case 1:
      count = '000' + count.toString();
      break;
    case 2:
      count = '00' + count.toString();
      break;
    case 3:
      count = '0' + count.toString();
      break;
    default:
      count.toString();
  }
  console.log(year.toString() + month.toString() + today.toString() + count.toString());
  return year.toString() + month.toString() + today.toString() + count.toString();
}

const reservationSchema = new Schema({
  user: [String],
  hostpital: [String],
  reserveNum: { type: String, required: true, unique: true, default: reserNumCal() },
  userName: String,
  phone: String,
  productName: String,
  reserveDate: String,
  status: {
    type: String, default: "전화예약 대기중"
  },
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('reservation', reservationSchema);

// module.exports = Users;


// Dummy
/*
db.reservations.insert([{
  user: 'lyhlg0201@gmail.com',
  hostpital: '강남병원',
  userName: '이용현',
  phone: '01086674355',
  productName: '프락셀',
  reserveDate: '20180701',
},{
  user: 'ly123411@gmail.com',
  hostpital: '아산병원',
  userName: '이후후',
  phone: '01082145355',
  productName: '피부여드름치료',
  reserveDate: '20180501',
}])
*/
