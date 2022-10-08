import { defineStore } from 'pinia';
import { RemovableRef, useStorage } from '@vueuse/core';

interface Store {
  token: null | string;
}

export const useSessionStore = defineStore('session', {
  state: (): { store: RemovableRef<Store> } => ({
    store: useStorage('cascade:dashboard:session', {
      token: null,
    }),
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
  },
});
