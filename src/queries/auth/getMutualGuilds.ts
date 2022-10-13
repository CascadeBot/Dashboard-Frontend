import { gql } from 'graphql-tag';

export interface ApiGetMutualGuilds {
  mutualGuilds: {
    guilds: {
      id: string;
      name: string;
      memberCount: number;
      onlineCount: number;
      iconUrl?: string;
    }[];
  };
}
export const getMutualGuilds = gql`
  query getMutualGuilds {
    mutualGuilds {
      guilds {
        id
        name
        memberCount
        onlineCount
        iconUrl
      }
    }
  }
`;
