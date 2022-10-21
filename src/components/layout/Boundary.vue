<template>
  <div>
    <slot v-if="viewState.error" name="error" />
    <slot v-else-if="viewState.pending" name="pending" />
    <div v-show="viewState.completed">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  injectBoundaryKey,
  useBoundaryKey,
} from '@/composables/boundary/useBoundary';
import { useBoundaryStore } from '@/store/boundary';

interface Props {
  id: string;
}
const props = defineProps<Props>();

injectBoundaryKey(props.id);
const key = useBoundaryKey(props.id);

// state
const hasHadResult = ref(false);
const hasMounted = useMounted();
const store = useBoundaryStore();

// lifecycle hooks
onMounted(() => {
  store.mountBoundary(key.value);
});
onUnmounted(() => {
  store.unmountBoundary(key.value);
});

// view state logic
const queries = computed(() => {
  // if this is the first time it gets results,
  // it needs to wait for everything under it to complete
  if (!hasHadResult.value) return store.queriesUnderBoundary(key.value);

  // if this is not the first time it got results,
  // only show pending screen on queries specifically associated with this boundary
  return store.queriesForBoundary(key.value);
});
const viewState = computed(() => {
  const pendingAmount = queries.value.reduce(
    (a, v) => (a += v.pending ? 1 : 0),
    0,
  );
  const viewError = queries.value.find((v) => v.error)?.error;
  const hasCompleted = !viewError && pendingAmount === 0;

  return {
    completed: hasCompleted,
    error: viewError,
    pending: !viewError && pendingAmount > 0,
  };
});

// make sure refreshes render correctly
watchEffect(() => {
  if (viewState.value.completed && hasMounted.value) hasHadResult.value = true;
});
// TODO error boundary
</script>
