module.exports = {
  google: {
    clientID: '235629451128-6epmo55kkdeiah4phs7psth5e09g1ujj.apps.googleusercontent.com',
    clientSecret: 'DrrPiIrs6pgjIf4HxqPhd7w2',
    callbackURL: '/auth/google/redirect'
  },
  kakao: {
    clientID: '446e216413d5c9dc773929a0ed599799',
    clientSecret: '9Fwye8ABk6TysiVHnDebw92nz7q2G1nU',
    callbackURL: '/auth/kakao/redirect'
  },
  naver: {
    clientID: 'g1LBZVu3_6S_kwMD8Dhc',
    clientSecret: '5x8XE5LJ6r',
    callbackURL: '/auth/naver/redirect'
  },
  mongodb: {
    dbURI: "mongodb://havit:havit@162.243.137.152:27017/havit"
  },
  session: {
    cookieKey: "userCustomToken",
    secret: "userSecretKey"
  }
};

//dbURI: "mongodb://havit:havit@ds231758.mlab.com:31758/havit"
