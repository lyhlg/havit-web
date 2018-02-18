import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import * as url from 'utils';

const client = new ApolloClient({
  link: new HttpLink({ uri: `${url.API_DEV}/graphql` }),
  cache: new InMemoryCache(),
});

export const getProducts = () => {
  return client.query({
    query: gql`
      {
        Products {
          _id
          type
          subType
          img
          hospitalLoc
          hospitalName
          title
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
  });
};

export const getReservations = () => {
  return client.query({
    query: gql`
      {
        ReservationLists {
          _id
          reserveNum
          userName
          phone
          productName
          reserveDate
          status
        }
      }
    `,
  });
};

export const getLikeProducts = () => {
  return client.query({
    query: gql`{
    LikeProducts {

    }
  }`,
  });
};

export const getUserInfo = () => {
  return client.query({
    query: gql`{
    Users {
      
    }
  }`,
  });
};
