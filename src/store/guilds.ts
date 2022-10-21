import { defineStore } from 'pinia';
import { useQuery } from '@vue/apollo-composable';
import {
  ApiGetMutualGuilds,
  getMutualGuilds,
} from '@/queries/auth/getMutualGuilds';

interface Guild {
  id: string;
  iconUrl?: string;
  onlineCount: number;
  memberCount: number;
  name: string;
}

export const useGuildStore = defineStore('guilds', {
  state: () => ({
    guilds: [] as Guild[],
  }),
  getters: {
    get: (store) => (id: string) => {
      return store.guilds.find((v) => v.id === id);
    },
  },
  actions: {
    setGuilds(guilds: Guild[]) {
      this.guilds = guilds;
    },
  },
});

// gets mutual guilds but also stores it in a store
export function useGetGuilds() {
  const store = useGuildStore();

  const { loading, error, result, onResult } =
    useQuery<ApiGetMutualGuilds>(getMutualGuilds);

  onResult(({ data }) => {
    store.setGuilds(data.mutualGuilds.guilds);
  });

  return {
    loading,
    error,
    result,
  };
}

// gets mutual guilds but also stores it in a store (async version)
export function useAsyncGetGuilds() {
  const store = useGuildStore();

  const { data, onResult } = useGqlQuery<ApiGetMutualGuilds>(
    'mutual_servers',
    getMutualGuilds,
  );
  onResult(({ data }) => {
    store.setGuilds(data.mutualGuilds.guilds);
  });

  return {
    data,
  };
}
