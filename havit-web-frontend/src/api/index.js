import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import * as url from 'utils';
import ProductDetail from '../components/Common/ProductDetail';

const client = new ApolloClient({
  link: new HttpLink({ uri: `${url.API_DEV}/graphql` }),
  cache: new InMemoryCache(),
});

export const getLogin = (callback, email, password) => {
  return client
    .query({
      query: gql`
        query($email: String, $password: String) {
          Users(user_id_email: $email, password: $password) {
            user_id_email
            name
            auth
            phone
            birthday
            gender
            level
            hospitalCode
            likeAreas
            likePoints
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })
    .then(res => callback(res));
};

export const getUserInfo = (email, password) => {
  return client.query({
    query: gql`
      query($email: String, $password: String) {
        Users(user_id_email: $email, password: $password) {
          user_id_email
          name
          auth
          phone
          birthday
          gender
          level
          hospitalCode
          likeAreas
          likePoints
        }
      }
    `,
    variables: {
      email,
      password,
    },
  });
};

export const getProducts = (type, subType, productId, page) => {
  return client.query({
    query: gql`
      query($type: String, $subType: String, $productId: Int, $page: Int) {
        Products(
          type: $type
          subType: $subType
          productId: $productId
          page: $page
        ) {
          type
          subType
          productId
          img
          hospitalCode
          hospitalLoc
          hospitalName
          productName
          description
          price
          purchased
          productDetail

          options {
            type
          }
          reviews {
            user_id_email
            stars
            comment
          }
        }
      }
    `,
    variables: {
      type,
      subType,
      productId,
      page,
    },
  });
};

export const getReservations = (email, status, page) => {
  return client.query({
    query: gql`
      query($email: String, $status: String, $page: Int) {
        Reservations(user_id_email: $email, status: $status, page: $page) {
          reserveNum
          hospitalCode
          hospitalLoc
          hospitalName
          userName
          phone
          openPhoneNum
          productId
          productName
          reserveDate
          careDate
          status
        }
      }
    `,
    variables: {
      email,
      status,
      page,
    },
  });
};

export const getLikeProducts = email => {
  return client.query({
    query: gql`
      query($email: String) {
        LikeProducts(user_id_email: $email) {
          _id
          type
          productId
          subType
          img
          hospitalCode
          hospitalLoc
          hospitalName
          productName
          description
          price
          purchased
          productDetail
        }
      }
    `,
    variables: {
      email,
    },
  });
};

export const getHospital = email => {
  return client.query({
    query: gql`
      query($email: String) {
        Hospitals(adminAccount: $email) {
          code
          adminAccount
          reservations {
            reserveNum
            hospitalCode
            userName
            phone
            openPhoneNum
            productId
            productName
            reserveDate
            careDate
            status
          }
          products {
            type
            subType
            productId
            img
            hospitalCode
            hospitalLoc
            hospitalName
            productName
            description
            price
            purchased
            productDetail
            reviews {
              _id
              stars
            }
          }
        }
      }
    `,
    variables: {
      email,
    },
  });
};

export const getHospitalAdmin = page => {
  return client.query({
    query: gql`
      query($page: Int) {
        HospitalAdmin(page: $page) {
          code
          name
          loc
          adminAccount
        }
      }
    `,
    variables: {
      page,
    },
  });
};

export const getNotices = (id, page) => {
  return client.query({
    query: gql`
      query($id: Int, $page: Int) {
        Notices(id: $id, page: $page) {
          _id
          title
          body
          author
          createdOn
        }
      }
    `,
    variables: {
      id,
      page,
    },
  });
};

export const getBanners = id => {
  return client.query({
    query: gql`
      query($id: Int) {
        Banners(id: $id) {
          _id
          title
          img
          url
          priority
        }
      }
    `,
    variables: {
      id,
    },
  });
};

export const getEvents = (email, productId, status, page) => {
  return client.query({
    query: gql`
      query($email: String, $productId: Int, $status: String, $page: Int) {
        Events(
          user_id_email: $email
          productId: $productId
          status: $status
          page: $page
        ) {
          productId
          hospitalCode
          hospitalLoc
          hospitalName
          productName
          description
          price
          status
          priority
          purchased
          productDetail
        }
      }
    `,
    variables: {
      email,
      productId,
      status,
      page,
    },
  });
};

export const getPayment = email => {
  return client.query({
    query: gql`
      query($email: String) {
        Payments(user_id_email: $email) {
          code
          count
          price
        }
      }
    `,
    variables: {
      email,
    },
  });
};

export const addProduct = (
  type,
  subType,
  img,
  email,
  productName,
  description,
  price,
  ProductDetail,
  options
) => {
  return client.mutate({
    mutation: gql`
      mutation(
        $type: String
        $subType: String
        $img: String
        $email: String
        $description: String
        $price: Int
        $productDetail: String
        $option: [String]
      ) {
        addProduct(
          type: $type
          subType: $subType
          img: $img
          user_id_email: $email
          productName: $productName
          description: $description
          price: $price
          ProductDetail: $ProductDetail
          options: $options
        ) {
          productId
        }
      }
    `,
    variables: {
      type,
      subType,
      img,
      email,
      productName,
      description,
      price,
      ProductDetail,
      options,
    },
  });
};
export const addReservation = (
  email,
  hospitalCode,
  userName,
  phone,
  productId,
  option,
  reserveDate,
  callback
) => {
  return client
    .mutate({
      mutation: gql`
        mutation(
          $email: String
          $hospitalCode: String
          $userName: String
          $phone: Int
          $productId: Int
          $option: String
          $reserveDate: Float
        ) {
          addReservation(
            user_id_email: $email
            hospitalCode: $hospitalCode
            userName: $userName
            phone: $phone
            productId: $productId
            option: $option
            reserveDate: $reserveDate
          ) {
            userName
          }
        }
      `,
      variables: {
        email,
        hospitalCode,
        userName,
        phone,
        productId,
        option,
        reserveDate,
      },
    })
    .then(res => callback(res));
};

export const addReview = (email, stars, comment, productId) => {
  return client.mutate({
    mutation: gql`
      mutation(
        $email: String
        $stars: Float
        $comment: String
        $productId: Int
      ) {
        addReview(
          user_id_email: $email
          stars: $stars
          comment: $comment
          productId: $productId
        ) {
          _id
          user_id_email
          stars
          comment
        }
      }
    `,
    variables: {
      email,
      stars,
      comment,
      productId,
    },
  });
};

export const addUserInfo = (
  callback,
  email,
  password,
  auth,
  name,
  phone,
  birthday,
  gender,
  likeAreas,
  likePoints,
  hospitalCode
) => {
  return client
    .mutate({
      mutation: gql`
        mutation(
          $email: String
          $password: String
          $auth: String
          $name: String
          $phone: Int
          $birthday: Int
          $gender: String
          $likeAreas: [String]
          $likePoints: [String]
          $hospitalCode: String
        ) {
          addUserInfo(
            user_id_email: $email
            password: $password
            auth: $auth
            name: $name
            phone: $phone
            birthday: $birthday
            gender: $gender
            likeAreas: $likeAreas
            likePoints: $likePoints
            hospitalCode: $hospitalCode
          ) {
            name
            auth
            phone
            level
            birthday
            gender
            hospitalCode
          }
        }
      `,
      variables: {
        email,
        password,
        auth,
        name,
        phone,
        birthday,
        gender,
        likeAreas,
        likePoints,
        hospitalCode,
      },
    })
    .then(res => callback(res));
};

export const addLikeProducts = (email, productId) => {
  return client.mutate({
    mutation: gql`
      mutation($email: String, $productId: Int) {
        addLikeProducts(user_id_email: $email, productId: $productId) {
          user_id_email
        }
      }
    `,
    variables: {
      email,
      productId,
    },
  });
};

export const delLikeProducts = (email, productId, callback) => {
  return client
    .mutate({
      mutation: gql`
        mutation($email: String, $productId: Int) {
          delLikeProducts(user_id_email: $email, productId: $productId) {
            user_id_email
          }
        }
      `,
      variables: {
        email,
        productId,
      },
    })
    .then(() => callback());
};

export const modifyReservation = (
  reserveNum,
  userName,
  phone,
  reserveDate,
  openPhoneNum
) => {
  return client.mutate({
    mutation: gql`
      mutation(
        $reserveNum: Float
        $userName: String
        $phone: Int
        $reserveDate: Float
        $openPhoneNum: Int
      ) {
        modifyReservation(
          reserveNum: $reserveNum
          userName: $userName
          phone: $phone
          reserveDate: $reserveDate
          openPhoneNum: $openPhoneNum
        ) {
          _id
          reserveNum
          user_id_email
          openPhoneNum
          userName
          phone
          productName
          reserveDate
          careDate
          status
        }
      }
    `,
    variables: {
      reserveNum,
      userName,
      phone,
      reserveDate,
      openPhoneNum,
    },
  });
};

export const fixReservation = (reserveNum, careDate) => {
  return client.mutate({
    mutation: gql`
      mutation($reserveNum: Float, $careDate: Float) {
        fixReservation(reserveNum: $reserveNum, careDate: $careDate) {
          reserveNum
        }
      }
    `,
    variables: {
      reserveNum,
      careDate,
    },
  });
};

export const delReservation = (email, productId, reserveNum, callback) => {
  return client
    .mutate({
      mutation: gql`
        mutation($email: String, $productId: Int, $reserveNum: Float) {
          delReservation(
            user_id_email: $email
            productId: $productId
            reserveNum: $reserveNum
          ) {
            user_id_email
            hospitalCode
          }
        }
      `,
      variables: {
        email,
        productId,
        reserveNum,
      },
    })
    .then(res => callback(res));
};

export const confirmPurchase = reserveNum => {
  return client.mutate({
    mutation: gql`
      mutation($reserveNum: Float) {
        confirmPurchase(reserveNum: $reserveNum) {
          _id
          reserveNum
          user_id_email
          hospitalCode
          userName
          phone
          productName
          reserveDate
          careDate
          status
        }
      }
    `,
    variables: {
      reserveNum,
    },
  });
};

export const addNotice = (title, body, author, img) => {
  return client.mutate({
    mutation: gql`
      mutation($title: String, $body: String, $author: String, $img: String) {
        addNotice(title: $title, body: $body, author: $author, img: $img) {
          _id
          title
          body
          author
          views
          createdOn
        }
      }
    `,
    variables: {
      title,
      body,
      author,
      img,
    },
  });
};

export const addBanner = (img, title, url, priority, callback) => {
  return client
    .mutate({
      mutation: gql`
        mutation($img: String, $title: String, $url: String, $priority: Int) {
          addBanner(img: $img, title: $title, url: $url, priority: $priority) {
            _id
            title
            img
            url
            priority
          }
        }
      `,
      variables: {
        img,
        title,
        url,
        priority,
      },
    })
    .then(res => callback(res));
};

export const delBanner = (id, callback) => {
  return client
    .mutate({
      mutation: gql`
        mutation($id: Int) {
          delBanner(id: $id) {
            title
          }
        }
      `,
      variables: {
        id,
      },
    })
    .then(res => callback(res));
};

export const addHospitalAdmin = (code, name, loc) => {
  return client.mutate({
    mutation: gql`
      mutation($code: String, $name: String, $loc: String) {
        addHospitalAdmin(code: $code, name: $name, loc: $loc) {
          code
          name
          loc
        }
      }
    `,
    variables: {
      code,
      name,
      loc,
    },
  });
};

export const addEvent = (
  hospitalCode,
  productName,
  description,
  img,
  price,
  status,
  priority,
  productDetails,
  callback
) => {
  return client
    .mutate({
      mutation: gql`
        mutation(
          $hospitalCode: String
          $productName: String
          $description: String
          $img: String
          $price: Int
          $status: String
          $priority: Int
          $productDetails: String
        ) {
          addEvent(
            hospitalCode: $hospitalCode
            productName: $productName
            description: $description
            img: $img
            price: $price
            status: $status
            priority: $priority
            productDetails: $productDetails
          ) {
            hospitalCode
            productName
            description
            price
            status
            priority
          }
        }
      `,
      variables: {
        hospitalCode,
        productName,
        description,
        img,
        price,
        status,
        priority,
        productDetails,
      },
    })
    .then(res => callback(res));
};

export const delEvent = (hospitalCode, productId) => {
  return client.mutate({
    mutation: gql`
      mutation($hospitalCode: String, $productId: Int) {
        addEvent(hospitalCode: $hospitalCode, productId: $productId) {
          hospitalCode
          productName
          description
          price
          status
          priority
        }
      }
    `,
    variables: {
      hospitalCode,
      productId,
    },
  });
};

export const delHospitalAdmin = (code, callback) => {
  return client
    .mutate({
      mutation: gql`
        mutation($code: String) {
          delHospitalAdmin(code: $code) {
            name
          }
        }
      `,
      variables: {
        code,
      },
    })
    .then(res => callback(res));
};
