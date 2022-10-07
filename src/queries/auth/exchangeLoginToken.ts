import { gql } from 'graphql-tag';

export const exchangeLoginToken = gql`
  mutation exchangeLoginToken($token: String!) {
    exchangeLoginToken(loginToken: $token) {
      token
    }
  }
`;
