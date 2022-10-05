import { gql } from 'graphql-tag';

export const getAuthorizeUrl = gql`
  query getAuthorizeUrl($redirect: String = null) {
    getOAuthInfo {
      authorizeUrl(redirect: $redirect)
    }
  }
`;
