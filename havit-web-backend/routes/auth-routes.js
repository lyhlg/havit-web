const router = require("express").Router();
const passport = require("passport");
const nodemailer = require("nodemailer");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
import { MailAuth, User } from "../db";
const keys = require("../config/keys");
import cors from "cors";
import { FRONT_DEV_SRV } from "../utils";

let rand, mailOptions, host, link;

// logout
router.get("/logout", (req, res) => {
  console.log(req.session);
  res.clearCookie(keys.session.cookieKey);
  req.session.destroy(err => {
    if (err) console.error(err);
    else {
      res.send(`<script>window.location.href="${FRONT_DEV_SRV}"</script>`);
    }
  });
});

const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "havitmailer",
    pass: "codestateshavit"
  }
});

// Local Login
// router.post("/locallogin", passport.authenticate("{strategy}", successRedirect:));

router.post("/locallogin", passport.authenticate("local", {
  successRedirect: `"${FRONT_DEV_SRV}"`,
  failureRedirect: `"${FRONT_DEV_SRV}/login",`,
  failureFlash: true
}));


passport.serializeUser((user, done) => {
  console.log();
  // Strategy 성공 시 호출됨
  done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
});

passport.deserializeUser((user, done) => {
  // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
  done(null, user); // 여기의 user가 req.user가 됨
});

passport.use(new LocalStrategy({
      usernameField: 'id',
      passwordField: 'pw',
      session: true,
      passReqToCallback: true
    }, (req, id, password, done) => {
      console.log("id, password: ", id, password);
      Users.findOne({ user_id_email: id }, (err, user) => {
        if (err) return done(err); // 서버 에러 처리
        if (!user)
          return done(null, false, { message: "존재하지 않는 아이디입니다" }); // 임의 에러 처리
        return user.comparePassword(password, (passError, isMatch) => {
          if (isMatch) {
            return done(null, user); // 검증 성공
          }
          return done(null, false, { message: "비밀번호가 틀렸습니다" }); // 임의 에러 처리
        });
      });
    }
  )
);


// mail auth res 바꿔
router.get("/mailauth", (req, res) => {
  console.log("mailAuth!!!!!!!!!!!!!!!!!!!!", req);
  rand = Math.floor(Math.random() * 100) * 999;
  host = req.req.headers.host;
  // link = "http://" + req.req.headers.host + "/verify?id=" + rand;
  // console.log(' 이거확인 ', host, rand, link,req.req.query.to );
  MailAuth.findOne({ mail_account: req.req.query.to }).then(currentUser => {
    if (currentUser) {
      console.log(
        "인증 절차중에 있습니다. 메일을 확인해주세요.",
        currentUser.Auth_number
      );
      tomail(currentUser.Auth_number);
    } else {
      console.log(" 없어서 넣는다. ");
      new MailAuth({
        mail_account: req.req.query.to,
        Auth_number: rand
      })
        .save()
        .then(newmailAuth => {
          console.log("new mail Auth !!", req.req.query.to, rand);
        });
      tomail(rand);
    }
  });
  const tomail = code => {
    mailOptions = {
      from: "Havit 관리자 <havitmailer@gmail.com>",
      to: req.req.query.to,
      subject: "[havit] 홈페이지 회원가입을 위해 인증번호를 기입해주세요",
      html: `안녕하세요,<br> Havit 웹 사이트 입니다. 아래 인증 번호를 회원가입 창의 인증번호에 입력해주세요<br> <h3>인증번호<h3> : ${code} </a>`
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        res.end(`Message sent : ${response.message}`);
      }
      smtpTransport.close();
    });
  };
});

router.get("/verify", function(req, res) {
  MailAuth.findOne({
    mail_account: req.req.query.email,
    Auth_number: req.req.query.authcode
  }).then(auth => {
    if (auth) {
      console.log("인증완료");
      MailAuth.remove({ mail_account: req.req.query.email });
      res.send("인증되었습니다.");
    } else {
      console.log("인증실패");
      res.send("인증번호가 잘못 되었습니다.");
    }
  });
});

module.exports = router;
