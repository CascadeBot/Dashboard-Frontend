import { ComputedRef } from 'vue';
import { MaybeRef } from '@vueuse/core';
import {
  boundaryDivider,
  boundarySymbol,
  useBoundaryStore,
} from '@/store/boundary';

// computes boundary key and returns it (uses provided key from parents)
export function useBoundaryKey(key?: MaybeRef<string>): ComputedRef<string> {
  const injectedKey = inject<ComputedRef<string> | undefined>(
    boundarySymbol,
    undefined,
  );
  const computedKey = computed(() => {
    const suffixKey = key ? unref(key) : '';
    const prefixKey = injectedKey ? unref(injectedKey) : '';
    const divider = suffixKey && prefixKey ? boundaryDivider : '';
    return prefixKey + divider + suffixKey;
  });
  return computedKey;
}

// provides boundary key to child components
export function injectBoundaryKey(key: MaybeRef<string>) {
  const storageKey = useBoundaryKey(key);
  provide<ComputedRef<string>>(boundarySymbol, storageKey);
}

// controls for a boundary, key can be optional and will target closest parent boundary
export function useBoundary(key?: string) {
  const storageKey = useBoundaryKey(key);
  const store = useBoundaryStore();

  return {
    refresh() {
      const queries = store.queriesUnderBoundary(storageKey.value);
      queries.forEach((v) => v.nonce++); // incrementing the nonce will force a refresh
    },
  };
}
