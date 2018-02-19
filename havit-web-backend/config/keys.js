module.exports = {
  google: {
    clientID: '356033391619-6t1m5mm02jks2msgd6m6huleq2sbgfol.apps.googleusercontent.com',
    clientSecret: 'JSWU_SvdZbq2xJbHGiPMQuFU',
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
    dbURI: "mongodb://havit:havit@ds231758.mlab.com:31758/havit"
  },
  session: {
    cookieKey: "userCustomToken",
    secret: "userSecretKey"
  }
};
