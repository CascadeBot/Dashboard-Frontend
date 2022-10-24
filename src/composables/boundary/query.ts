import { Ref } from 'vue';
import { useBoundaryKey } from './useBoundary';
import { useBoundaryStore } from '@/store/boundary';

export interface BoundaryFetchSettings {
  staticKey?: boolean;
}

export function useBoundaryFetch<T>(
  key: string,
  query: (refreshed: boolean) => Promise<T>,
  settings: BoundaryFetchSettings = {},
) {
  const storageKey = useBoundaryKey(key, settings.staticKey ?? false);
  const store = useBoundaryStore();
  const queryState = computed(() => store.getQuery(storageKey.value));

  // lifecycle
  onMounted(() => {
    store.mountQuery(storageKey.value);
  });
  onUnmounted(() => {
    store.unmountQuery(storageKey.value);
  });

  // state
  const started = ref(false);
  const lastNonce = ref(0);
  const data = ref<T | null>(null) as Ref<T | null>;
  const pending = ref(true);
  const errored = ref(false);
  let resultCb: ((params: { data: T }) => void) | null = null;

  // handle query
  function handleQuery(promise: Promise<T>) {
    if (!queryState.value) return;
    queryState.value.pending = true;
    queryState.value.error = null;
    pending.value = true;
    errored.value = false;
    data.value = null;

    promise
      .then((v) => {
        if (resultCb) resultCb({ data: v });
        if (queryState.value) queryState.value.pending = false;
        pending.value = false;
        data.value = v;
      })
      .catch((err) => {
        if (queryState.value) {
          queryState.value.pending = false;
          queryState.value.error = err;
        }
        pending.value = false;
        errored.value = true;
      });
  }

  watchEffect(() => {
    if (queryState.value && !started.value) {
      started.value = true;
      handleQuery(query(false));
    }
  });
  handleQuery(query(false));
  watch([store], () => {
    if (!queryState.value) return;

    // if nonce changes, a refresh is requested
    if (queryState.value.nonce !== lastNonce.value) {
      handleQuery(query(true));
      lastNonce.value = queryState.value.nonce;
    }
  });

  // helpers
  function onResult(cb: (data: { data: T }) => void) {
    resultCb = cb;
  }
  function refetch() {
    handleQuery(query(true));
  }

  return {
    pending,
    errored,
    data,
    onResult,
    refetch,
  };
}
