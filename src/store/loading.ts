import { defineStore } from 'pinia';

export interface Line {
  id: number;
  text: string;
  error: boolean;
}

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    _idGen: 0,
    lines: [] as Line[],
  }),
  actions: {
    startScreen(text: string) {
      const id = ++this._idGen;
      this.lines = [
        {
          text,
          id,
          error: false,
        },
      ];
    },
    appendLine(text: string, error = false) {
      const id = ++this._idGen;
      this.lines.unshift({
        text,
        id,
        error,
      });
    },
    stopScreen() {
      this.lines = [];
    },
  },
});

export function useLoadingLines(startText: string) {
  const store = useLoadingStore();

  onBeforeMount(() => {
    store.startScreen(startText);
  });
  onBeforeUnmount(() => {
    store.stopScreen();
  });

  function addLine(text: string, error?: boolean) {
    store.appendLine(text, error);
  }

  return {
    addLine,
  };
}
