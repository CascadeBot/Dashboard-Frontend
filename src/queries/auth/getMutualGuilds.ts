import { gql } from 'graphql-tag';

export const getMutualGuilds = gql`
  query getMutualGuilds {
    mutualGuilds {
      guilds {
        id
        name
        member_count
        online_count
        icon_url
      }
    }
  }
`;
