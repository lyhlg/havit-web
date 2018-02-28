const router = require('express').Router();
const passport = require('passport');
const nodemailer = require('nodemailer');
// const mailAuth = require('../models/mailauth-model');
const bodyParser = require('body-parser');
import { MailAuth } from '../db';
const local = require ('localStorage');
const keys = require('../config/keys');
import cors from 'cors';
import { FRONT_DEV_SRV } from '../utils';


const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "havitmailer",
    pass: "codestateshavit"
  }
});

let rand, mailOptions, host, link;

// logout
router.get('/logout', (req, res) => {
  console.log( req.session)
    res.clearCookie(keys.session.cookieKey);
    req.session.destroy(err => {
      if (err) console.error(err);
      else {
        res.send(`<script>window.location.href="${FRONT_DEV_SRV}"</script>`);
      }
    });
});

// Local Login
router.get('local', passport.authenticate('{strategy}'));

// mail auth res 바꿔
router.get('/mailauth', (req, res) => {
  console.log('mailAuth!!!!!!!!!!!!!!!!!!!!',req);
  rand = Math.floor((Math.random() * 100)) * 999;
  host = req.req.headers.host;
  // link = "http://" + req.req.headers.host + "/verify?id=" + rand;
  // console.log(' 이거확인 ', host, rand, link,req.req.query.to );
  MailAuth.findOne({ mail_account: req.req.query.to}).then((currentUser) => {
    if ( currentUser ){
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
      from: 'Havit 관리자 <havitmailer@gmail.com>',
      to: req.req.query.to,
      subject: "[havit] 홈페이지 회원가입을 위해 인증번호를 기입해주세요",
      html: `안녕하세요,<br> Havit 웹 사이트 입니다. 아래 인증 번호를 회원가입 창의 인증번호에 입력해주세요<br> <h3>인증번호<h3> : ${code} </a>`
    }
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        res.end(`Message sent : ${response.message}`);
      }
      smtpTransport.close();
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
