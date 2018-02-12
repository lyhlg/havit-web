const router = require('express').Router();
const passport = require('passport');
const nodemailer = require('nodemailer');
const mailAuth = require('../models/mailauth-model');
const bodyParser = require('body-parser');

const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "havitmailer",
    pass: "codestateshavit"
  }
});
var rand, mailOptions, host, link;

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/');
});

// Local Login
router.get('local', passport.authenticate('{strategy}'));

// Google Login
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:3000/');
});

// Naver Login
router.get('/naver', passport.authenticate('naver'));
router.get('/naver/redirect', passport.authenticate('naver', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: 'http://localhost:3000/'
  })
);

// Kakao Login
router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/redirect', passport.authenticate('kakao', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: 'http://localhost:3000/'
  })
);

router.get('/mailauth', (res, req) => {
  console.log('mailAuth!!!!!!!!!!!!!!!!!!!!');
  rand = Math.floor((Math.random() * 100))*999;
  host = req.get('host');
  link = "http://" + req.get('host') + "/verify?id=" + rand;
  mailAuth.findOne({mail_account:req.query.to}).then((currentUser) => {
    if ( currentUser){
      console.log('인증 절차중에 있습니다. 메일을 확인해주세요.');
    } else {
      new mailAuth({
        mail_account: req.query.to,
        Auth_number: rand
      }).save().then((newmailAuth) =>{
        console.log('new mail Auth !!', req.query.to, rand);
      })
    }
  });
  mailOptions = {
    to: req.query.to,
    subject: "Please confirm your Email account",
    html: `안녕하세요,<br> Havit 웹 사이트 입니다. 아래 인증 번호를 회원가입 창의 인증번호에 입력해주세요<br> 인증번호 : ${rand} </a>`
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end("error");
    } else {
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });
});

router.get('/verify', function (req, res) {
  mailAuth.findOne({ mail_account: req.query.email, Auth_number: req.query.authcode}).then(auth => {
    if(auth) {
      console.log('인증완료');
      mailAuth.remove({mail_account:req.query.email});
      res.send('인증되었습니다.');
    } else {
      console.log('인증실패');
      res.send('인증번호가 잘못 되었습니다.');
    }
  })
});


module.exports = router;
