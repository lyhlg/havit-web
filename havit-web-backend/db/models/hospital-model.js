const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  code: { type: String, required: true },
  adminAccount: String,
  reservations: [String],
  products: [String],
});


module.exports = mongoose.model('hospital', hospitalSchema);

// dummy
/*
db.hospitals.insert([{
  code: 'AAAA100000',
  reservations: [],
  products : [],
  adminAccount: "lyhlg0201@gmail.com"
},
{
  code: 'AAAA100001',
  reservations: [],
  products : [],
  adminAccount: "test@gmail.com"
},
{
  code: 'AAAA100002',
  reservations: [],
  products : [],
  adminAccount: "test1@gmail.com"
},
{
  code: 'AAAA100003',
  reservations: [],
  products : [],
  adminAccount: "test2@gmail.com"
},
{
  code: 'AAAA100004',
  reservations: [],
  products : [],
  adminAccount: "test3@gmail.com"
},
{
  code: 'AAAA100005',
  reservations: [],
  products : [],
  adminAccount: "test4@gmail.com"
},
{
  code: 'AAAA100006',
  reservations: [],
  products : [],
  adminAccount: "test5@gmail.com"
}])
*/
