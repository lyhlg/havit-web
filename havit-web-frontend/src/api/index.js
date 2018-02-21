import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import * as url from 'utils';

const client = new ApolloClient({
  link: new HttpLink({ uri: `${url.API_DEV}/graphql` }),
  cache: new InMemoryCache(),
});

export const getProducts = (type, subType) => {
  return client.query({
    query: gql`
      query($type: String, $subType: String) {
        Products(type: $type, subType: $subType) {
          _id
          type
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
          reviews {
            user_id_email
            stars
            comment
          }
        }
      }
    `,
    variables: {
      type: type,
      subType: subType,
    },
  });
};

export const getReservations = email => {
  return client.query({
    query: gql`{
      Reservations(user_id_email: ${email}) {
        _id
        user_id_email
        hospitalCode
        userName
        phone
        productName
        reserveDate
        careDate
        status
      }
    }`,
  });
};

export const getLikeProducts = email => {
  return client.query({
    query: gql`{
      Users(user_id_email: ${email}) {
        likeProduct {
          _id
          type
          subType
          img
          hospitalCode
          hospitalLoc
          hospitalName
          title
          description
          price
          purchased
          productDetail
        }
      }
  }`,
  });
};

export const getUserInfo = email => {
  return client.query({
    query: gql`{
      Users(user_id_email: ${email}) {
        specId
        name
        password
        auth
        phone
        birthday
        gender
        hospitalCode
      }
  }`,
  });
};

export const addReservation = (
  email,
  hospitalCode,
  userName,
  phone,
  productName,
  reserveDate
) => {
  return client.query({
    mutation: gql`{
      addReservation(
        user_id_email: ${email},
        hospitalCode: ${hospitalCode},
        userName: ${userName},
        phone: ${phone},
        productName: ${productName},
        reserveDate: ${reserveDate}
      )
    }`,
  });
};

export const addReview = (email, stars, comment, product) => {
  return client.query({
    mutation: gql`{
      addReview(
        user_id_email: ${email},
        stars: ${stars},
        comment: ${comment},
        product: ${product}
      )
    }`,
  });
};

export const addUserInfo = (
  email,
  name,
  phone,
  birthday,
  gender,
  likeArea,
  likePoint,
  code
) => {
  return client.query({
    mutation: gql`{
      addUserInfo(
        user_id_email: ${email},
        name: ${name},
        phone: ${phone},
        birthday: ${birthday},
        gender: ${gender},
        likeArea: ${likeArea},
        likePoint: ${likePoint},
        code: ${code}
      )
    }`,
  });
};

export const addLikeProducts = (email, productId) => {
  return client.query({
    mutation: gql`{
      addLikeProducts(
        user_id_email: ${email},
        productId: ${productId}
      )
    }`,
  });
};

export const modifyReservation = (reserveNum, userName, phone, reserveDate) => {
  return client.query({
    mutation: gql`{
      modifyReservation(
        reserveNum: ${reserveNum},
        userName: ${userName},
        phone: ${phone},
        reserveDate: ${reserveDate}
      )
    }`,
  });
};

export const fixReservation = (reserveNum, careDate) => {
  return client.query({
    mutation: gql`{
      fixReservation(
        reserveNum: ${reserveNum},
        careDate: ${careDate}
      )
    }`,
  });
};

export const confirmPurchase = reserveNum => {
  return client.query({
    mutation: gql`{
      confirmPurchase(
        reserveNum: ${reserveNum}
      )
    }`,
  });
};
