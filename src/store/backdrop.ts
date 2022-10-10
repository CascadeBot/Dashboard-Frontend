import { defineStore } from 'pinia';

export interface Backdrop {
  id: string;
}

export const useBackdropStore = defineStore('backdrops', {
  state: () => ({
    drops: [] as Backdrop[],
  }),
  getters: {
    isOpen(store) {
      return (id: string): boolean => {
        return !!store.drops.find((v) => v.id === id);
      };
    },
  },
  actions: {
    setState(id: string, state: boolean) {
      if (state) this.open(id);
      else this.close(id);
    },
    open(id: string) {
      this.drops.push({
        id,
      });
    },
    close(id: string) {
      this.drops = this.drops.filter((v) => v.id !== id);
    },
  },
});
