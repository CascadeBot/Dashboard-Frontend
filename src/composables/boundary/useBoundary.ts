import { ComputedRef } from 'vue';
import { MaybeRef } from '@vueuse/core';
import { boundaryDivider, boundarySymbol } from '@/store/boundary';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const storageKey = useBoundaryKey(key);
  // TODO provide controls
  return {
    key: storageKey,
  };
}
