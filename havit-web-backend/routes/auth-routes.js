const router = require('express').Router();
const passport = require('passport');
const nodemailer = require('nodemailer');
// const mailAuth = require('../models/mailauth-model');
const bodyParser = require('body-parser');
import { MailAuth } from '../db';
const local = require ('localStorage');
const keys = require('../config/keys');

const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "havitmailer",
    pass: "codestateshavit"
  }
});

const checkFirstLogin = (req, res, next) => {
  if (req.user.phone) next();
  else {
    res.send(`<script>window.close(); window.opener.location.href="http://localhost:3000/addinfo"</script>`);
  }
};
// const sendMailAccount = (req,res, next) => {
//   console.log(req.user.user_id_email);
//   local.setItem('aaa','bbb');

//   res.send(req.user.user_id_email);
// };

// const cookie = (req, res, next) => {
//   console.log("cookie", res);
//   res.send(res.headers);
//   next();
// };

var rand, mailOptions, host, link;

// logout
router.get('/logout', (req, res) => {
    res.clearCookie(keys.session.cookieKey);
    req.session.destroy(err => {
      if (err) console.error(err);
      else {
        res.redirect("http://localhost:3000");
      }
    });
});

// Local Login
router.get('local', passport.authenticate('{strategy}'));

// Google Login
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
router.get('/google/redirect', passport.authenticate('google'), checkFirstLogin, (req, res) => {
  res.send('<script>window.close(); window.opener.location.href="http://localhost:3000"</script>')
});

// Naver Login
router.get('/naver', passport.authenticate('naver'));
router.get('/naver/redirect', passport.authenticate('naver'), checkFirstLogin, (req, res) => {
  res.send('<script>window.close(); window.opener.location.href="http://localhost:3000"</script>')
});

// Kakao Login
router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/redirect', passport.authenticate('kakao'), checkFirstLogin, (req, res) => {
  res.send('<script>window.close(); window.opener.location.href="http://localhost:3000"</script>')
});

// mail auth
router.get('/mailauth', (res, req) => {
  console.log('mailAuth!!!!!!!!!!!!!!!!!!!!',req.req.headers.host);
  rand = Math.floor((Math.random() * 100))*999;
  host = req.req.headers.host;
  // link = "http://" + req.req.headers.host + "/verify?id=" + rand;
  // console.log(' 이거확인 ', host, rand, link,req.req.query.to );
  MailAuth.findOne({ mail_account: req.req.query.to}).then((currentUser) => {
    if ( currentUser){
      console.log('인증 절차중에 있습니다. 메일을 확인해주세요.', currentUser.Auth_number);
      tomail(currentUser.Auth_number);
    } else {
      console.log( ' 없어서 넣는다. ')
      new MailAuth({
        mail_account: req.req.query.to,
        Auth_number: rand
      }).save().then((newmailAuth) =>{
        console.log('new mail Auth !!', req.req.query.to, rand);
      })
      tomail(rand);
    }
  });
  const tomail = (code) => {
    mailOptions = {
      to: req.req.query.to,
      subject: "[havit] 홈페이지 회원가입을 위해 인증번호를 기입해주세요",
      html: `안녕하세요,<br> Havit 웹 사이트 입니다. 아래 인증 번호를 회원가입 창의 인증번호에 입력해주세요<br> <h3>인증번호<h3> : ${code} </a>`
    }
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        res.end("sent"); // 뭘 보여줘야 할지 ?
      }
    });
  }
});

router.get('/verify', function (req, res) {
  MailAuth.findOne({ mail_account: req.req.query.email, Auth_number: req.req.query.authcode}).then(auth => {
    if(auth) {
      console.log('인증완료');
      MailAuth.remove({mail_account:req.req.query.email});
      res.send('인증되었습니다.');
    } else {
      console.log('인증실패');
      res.send('인증번호가 잘못 되었습니다.');
    }
  })
});


module.exports = router;
