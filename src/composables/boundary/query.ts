import { useBoundaryKey } from './useBoundary';

export function useBoundaryFetch<T>(key: string, query: () => Promise<T>) {
  // TODO actually fetch and store state in store
  const storageKey = useBoundaryKey(key);
  query();
  // TODO temp
  watchEffect(() => {
    console.log(storageKey.value);
  });
  return {
    pending: true,
    error: false,
    data: {},
  };
}
