import { gql } from 'graphql-tag';

export interface ApiGetCurrentUser {
  me: {
    id: string;
    discord: {
      id: string;
      avatarUrl: string;
      discriminator: string;
      name: string;
    };
  };
}
export const getCurrentUser = gql`
  query getCurrentUser {
    me {
      id
      discord {
        id
        avatarUrl
        discriminator
        name
      }
    }
  }
`;
