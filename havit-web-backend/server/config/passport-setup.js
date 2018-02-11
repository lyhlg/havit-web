const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const NaverStrategy = require('passport-naver').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});


passport.use(
  new GoogleStrategy({
    // options for google strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: keys.google.callbackURL
  }, (accessToken, refreshToken, profile, done) => {
    console.log("profile:", profile._json);
    const _profile = profile._json;
    // check if user already exists in our own db
    User.findOne({ user_id_email: _profile.emails[0].value }).then((currentUser) => {
      if (currentUser) {
        // already have this user
        console.log('user is: ', currentUser);
        done(null, currentUser);
      } else {
        // if not, create user in our db
        new User({
          specId: _profile.id,
          username: _profile.displayName,
          user_id_email: _profile.emails[0].value,
          auth: 'google'
          // thumbnail: profile._json.image.url
        }).save().then((newUser) => {
          console.log('created new user: ', newUser);
          done(null, newUser);
        });
      }
    });
  })
);

passport.use(
  new NaverStrategy({
    clientID: keys.naver.clientID,
    clientSecret: keys.naver.clientSecret,
    callbackURL: keys.naver.callbackURL
  }, (accessToken, refreshToken, profile, done) => {
    console.log("Naver profile:", profile._json);
    const _profile = profile._json;
    User.findOne({ user_id_email: _profile.email }).then((currentUser) => {
      console.log('currentUser: ', currentUser);
      if (currentUser) {
        console.log('user is: ', currentUser);
        done(null, currentUser);
      } else {
        // if not, create user in our db
        new User({
          specId: _profile.id,
          username: _profile.nickname,  // 이름을 따로 받지 않음
          user_id_email: _profile.email,
          auth: 'naver'
        }).save().then((newUser) => {
          console.log('created new user: ', newUser);
          done(null, newUser);
        });
      }
    });
  })
);

passport.use(
  new KakaoStrategy({
    clientID: keys.kakao.clientID,
    clientSecret: keys.kakao.clientSecret,
    callbackURL: keys.kakao.callbackURL
  }, (accessToken, refreshToken, profile, done) => {
    console.log("Kakao profile:", profile._json);
    const _profile = profile._json;
    User.findOne({ user_id_email: _profile.kaccount_email }).then((currentUser) => {
      console.log('currentUser: ', currentUser);
      if (currentUser) {
        console.log('user is: ', currentUser);
        done(null, currentUser);
      } else {
        // if not, create user in our db
        new User({
          specId: _profile.id,
          username: _profile.nickname,  // 이름을 따로 받지 않음
          user_id_email: _profile.kaccount_email,
          auth: 'kakao'
        }).save().then((newUser) => {
          console.log('created new user: ', newUser);
          done(null, newUser);
        });
      }
    });
  })
);
