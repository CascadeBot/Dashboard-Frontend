import { Ref } from 'vue';
import { useBoundaryKey } from './useBoundary';
import { useBoundaryStore } from '@/store/boundary';

export function useBoundaryFetch<T>(key: string, query: () => Promise<T>) {
  const storageKey = useBoundaryKey(key);
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
      handleQuery(query());
    }
  });
  handleQuery(query());
  watch([store], () => {
    if (!queryState.value) return;

    // if nonce changes, a refresh is requested
    if (queryState.value.nonce !== lastNonce.value) {
      handleQuery(query());
      lastNonce.value = queryState.value.nonce;
    }
  });

  return {
    pending,
    errored,
    data,
  };
}
