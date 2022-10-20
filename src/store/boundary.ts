import { defineStore } from 'pinia';

export const boundarySymbol = '__boundary__';
export const boundaryDivider = ':';

export interface Boundary {
  key: string;
}

// TODO store boundary components and data queries
export const useBoundaryStore = defineStore('boundary', {
  state: () => ({
    list: [] as Boundary[],
  }),
});
