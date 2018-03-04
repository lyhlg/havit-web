import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import * as url from 'utils';

const client = new ApolloClient({
  link: new HttpLink({ uri: `${url.API_DEV}/graphql` }),
  cache: new InMemoryCache(),
});

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

export const getProducts = (type, subType, page, productId) => {
  return client.query({
    query: gql`
      query($type: String, $subType: String, $page: Int, $productId: Int) {
        Products(
          type: $type
          subType: $subType
          page: $page
          productId: $productId
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
      page,
      productId,
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
          userName
          phone
          openPhoneNum
          productId
          productName
          reserveDate
          careDate
          status
          maxPage
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
            maxPage
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

export const getHospitalAdmin = () => {
  return client.query({
    query: gql`
      query {
        HospitalAdmin {
          code
          name
          loc
          adminAccount
        }
      }
    `,
  });
};

export const getNotices = id => {
  return client.query({
    query: gql`
      query($id: Int) {
        Notices(id: $id) {
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
      id,
    },
  });
};

export const getBanners = () => {
  return client.query({
    query: gql`
      query {
        Banners {
          title
          url
          priority
          status
        }
      }
    `,
  });
};

export const getEvents = () => {
  return client.query({
    query: gql`
      query {
        Events {
          _id
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
          productImage
        }
      }
    `,
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

export const addReservation = (
  email,
  hospitalCode,
  userName,
  phone,
  productId,
  productName,
  reserveDate
) => {
  return client.mutate({
    mutation: gql`
      mutation(
        $email: String
        $hospitalCode: String
        $userName: String
        $phone: String
        $productId: Int
        $productName: String
        $reserveDate: String
      ) {
        addReservation(
          user_id_email: $email
          hospitalCode: $hospitalCode
          userName: $userName
          phone: $phone
          productId: $productId
          productName: $productName
          reserveDate: $reserveDate
        )
      }
    `,
    variables: {
      email,
      hospitalCode,
      userName,
      phone,
      productId,
      productName,
      reserveDate,
    },
  });
};

export const addReview = (email, stars, comment, product) => {
  return client.mutate({
    mutation: gql`
      mutation(
        $email: String
        $stars: String
        $comment: String
        $product: String
      ) {
        addReview(
          user_id_email: $email
          stars: $stars
          comment: $comment
          product: $product
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
      product,
    },
  });
};

export const addUserInfo = (
  email,
  name,
  password,
  phone,
  birthday,
  gender,
  likeArea,
  likePoint,
  code
) => {
  return client.mutate({
    mutation: gql`
      mutation(
        $email: String
        $name: String
        $password: String
        $phone: String
        $birthday: String
        $gender: String
        $likeArea: [String]
        $likePoint: [String]
        $code: String
      ) {
        addUserInfo(
          user_id_email: $email
          name: $name
          password: $password
          phone: $phone
          birthday: $birthday
          gender: $gender
          likeArea: $likeArea
          likePoint: $likePoint
          hospitalCode: $code
        ) {
          specId
          name
          auth
          phone
          birthday
          gender
          hospitalCode
        }
      }
    `,
    variables: {
      email,
      name,
      password,
      phone,
      birthday,
      gender,
      likeArea,
      likePoint,
      code,
    },
  });
};

export const addLikeProducts = (email, productId) => {
  return client.mutate({
    mutation: gql`
      mutation($email: String, $productId: Int) {
        addLikeProducts(user_id_email: $email, productId: $productId) {
          specId
        }
      }
    `,
    variables: {
      email,
      productId,
    },
  });
};

export const modifyReservation = (reserveNum, openPhoneNum, reserveDate) => {
  return client.mutate({
    mutation: gql`
      mutation($reserveNum: String, $openPhoneNum: Int, $reserveDate: String) {
        modifyReservation(
          reserveNum: $reserveNum
          openPhoneNum: $openPhoneNum
          reserveDate: $reserveDate
        ) {
          _id
          reserveNum
          user_id_email
          hospitalCode
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
      openPhoneNum,
      reserveDate,
    },
  });
};

export const fixReservation = (reserveNum, careDate) => {
  return client.mutate({
    mutation: gql`
      mutation($reserveNum: String, $careDate: String) {
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

export const delReservation = (email, productId, reserveNum) => {
  return client.mutate({
    mutation: gql`
      mutation($email: String, $productId: Int, $reserveNum: String) {
        delReservation(
          user_id_email: $email
          productId: $productId
          reserveNum: $reserveNum
        ) {
          user_id_email
        }
      }
    `,
    variables: {
      email,
      productId,
      reserveNum,
    },
  });
};
export const confirmPurchase = reserveNum => {
  return client.mutate({
    mutation: gql`
      mutation($reserveNum: String) {
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

export const addUser = (email, specId, user) => {
  return client.mutate({
    mutation: gql`
      mutation($email: String, $specId: Float, $user: String) {
        addUser(user_id_email: $email, specId: $specId, name: $user) {
          specId
          name
          password
          auth
          phone
          birthday
          gender
          hospitalCode
        }
      }
    `,
    variables: {
      email,
      specId,
      user,
    },
  });
};

export const addNotice = (title, body, author, file) => {
  return client.mutate({
    mutation: gql`
      mutation($title: String, $body: String, $author: String, $file: Upload) {
        addNotice(title: $title, body: $body, author: $author, file: $file) {
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
      file,
    },
  });
};

export const addBanner = (priority, title, url, status) => {
  return client.mutate({
    mutation: gql`
      mutation($priority: Int, $title: String, $url: String, $status: String) {
        addBanner(
          priority: $priority
          title: $title
          url: $url
          status: $status
        ) {
          _id
          title
          img
          url
          priority
          status
        }
      }
    `,
    variables: {
      priority,
      title,
      url,
      status,
    },
  });
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
  price,
  status,
  priority,
  productImage
) => {
  return client.mutate({
    mutation: gql`
      mutation(
        $hospitalCode: String
        $productName: String
        $description: String
        $price: Int
        $status: String
        $priority: Int
        $productImage: String
      ) {
        addEvent(
          hospitalCode: $hospitalCode
          productName: $productName
          description: $description
          price: $price
          status: $status
          priority: $priority
          productImage: $productImage
        ) {
          hospitalCode
          productName
          description
          price
          status
          priority
          productImage
        }
      }
    `,
    variables: {
      hospitalCode,
      productName,
      description,
      price,
      status,
      priority,
      productImage,
    },
  });
};
