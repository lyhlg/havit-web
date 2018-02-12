const router = require('express').Router();
const passport = require('passport');

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
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

// // Facebook Login
// router.get('/auth/login/facebook',
//   passport.authenticate('facebook')
// );
// // facebook 로그인 연동 콜백
// router.get('/auth/login/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// );

module.exports = router;
