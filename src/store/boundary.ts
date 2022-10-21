import { defineStore } from 'pinia';

export const boundarySymbol = '__boundary__';
export const boundaryDivider = ':';

interface QueueItem {
  key: string;
  pending: boolean;
  error: Error | null;
  nonce: number;
}
interface Boundary {
  key: string;
}
interface State {
  queue: QueueItem[];
  boundaries: Boundary[];
}

export const useBoundaryStore = defineStore('boundary', {
  state: (): State => ({
    queue: [] as QueueItem[],
    boundaries: [] as Boundary[],
  }),
  getters: {
    getQuery: (state) => (key: string) => {
      return state.queue.find((v) => v.key === key);
    },
    queriesUnderBoundary:
      (state) =>
      (key: string): QueueItem[] => {
        return state.queue.filter((v) => v.key.startsWith(key + ':'));
      },
    queriesForBoundary:
      (state) =>
      (key: string): QueueItem[] => {
        const startsWithKey = key + ':';
        const mustNotStartWith = state.boundaries
          .filter((v) => v.key.startsWith(startsWithKey))
          .map((v) => v.key + ':');

        return state.queue.filter((v) => {
          if (!v.key.startsWith(startsWithKey)) return false;
          if (mustNotStartWith.find((boundary) => v.key.startsWith(boundary)))
            return false;
          return true;
        });
      },
  },
  actions: {
    // boundary registration
    unmountBoundary(key: string): void {
      this.boundaries = this.boundaries.filter((v) => v.key !== key);
    },
    mountBoundary(key: string): void {
      this.boundaries.push({
        key,
      });
    },

    // queue items registration
    mountQuery(key: string): void {
      this.queue.push({
        key,
        error: null,
        pending: true,
        nonce: 0,
      });
    },
    unmountQuery(key: string): void {
      this.queue = this.queue.filter((v) => v.key !== key);
    },
  },
});
