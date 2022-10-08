<template>
  <LoadingScreen :error="error.error">
    <LoadingErrorText :visible="error.error">
      Whoops, something went wrong with logging you in. Please try again later.
    </LoadingErrorText>
  </LoadingScreen>
</template>

<script setup lang="ts">
import { useLoadingLines } from '@/store/loading';

definePageMeta({
  layout: 'loading',
});

const route = useRoute();
const { addLine } = useLoadingLines('Storing session token');

const { process, error } = useStoreSessionProcess((event) => {
  const eventData = sessionEventMap[event];
  addLine(eventData.text, eventData.error);
});

onMounted(() => {
  process(
    route.query.token as string,
    route.query.redirect as string | undefined,
  );
});
</script>
