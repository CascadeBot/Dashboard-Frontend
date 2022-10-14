import { defineStore } from 'pinia';
import { RemovableRef, useStorage } from '@vueuse/core';

interface Store {
  token: null | string;
}

export const useSessionStore = defineStore('session', {
  state: (): { store: RemovableRef<Store>; nonce: number } => ({
    store: useStorage('cascade:dashboard:session', {
      token: null,
    }),
    nonce: 1,
  }),
  getters: {
    token(): Store['token'] {
      return this.store.token;
    },
    authenticated() {
      return !!this.token;
    },
  },
  actions: {
    setToken(token: string) {
      this.store.token = token;
    },
    clear() {
      this.store.token = null;
    },
    refreshUser() {
      this.nonce = this.nonce++;
    },
  },
});

export function useRefreshSession(cb: () => void) {
  const store = useSessionStore();
  const nonce = computed(() => store.nonce);
  watch(nonce, () => {
    cb();
  });
}
