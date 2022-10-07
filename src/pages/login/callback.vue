<template>
  <LoadingScreen />
</template>

<script setup lang="ts">
import { useLoadingLines } from '@/store/loading';

definePageMeta({
  layout: 'loading',
});

const route = useRoute();
const { addLine } = useLoadingLines('Storing session token');

const { process } = useStoreSessionProcess((event) => {
  const eventData = sessionEventMap[event];
  addLine(eventData.text);
});

onMounted(() => {
  process(
    route.query.token as string,
    route.query.redirect as string | undefined,
  );
});
</script>
