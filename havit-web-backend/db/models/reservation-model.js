const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  user_id_email: String,
  hospitalCode: String,
  reserveNum: {type: String, required:true },
  userName: String,
  phone: String,
  productName: String,
  reserveDate: String,
  careDate: { type: String, default : "전화예약 대기중"},
  status: {
    type: String, default: "전화예약 대기중"
  },
  createdOn: { type: Date, default: Date.now }
});


module.exports = mongoose.model('reservation', reservationSchema);

// module.exports = Users;


// Dummy 밑에 필요 없음. addReservation을 통해서 추가하자.
/*
mutation{
  addReservation (user_id_email: "lyhlg0201@gmail.com",
    hospitalCode: "AAAA100000",
    userName: "이용현",
    phone: "01086674355",
    productName: "여드름제로 7단계까지 풀패키지 129,000",
    reserveDate: "201802181920") {
    _id
    careDate
    status
  }
}
mutation{
  addReservation (user_id_email: "dubbsong@gmail.com",
    hospitalCode: "AAAA100000",
    userName: "송진영",
    phone: "01098279992",
    productName: "프리미엄 필링 프로그램",
    reserveDate: "201802200910") {
    _id
    careDate
    status
  }
}
*/
