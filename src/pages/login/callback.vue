<template>
  <LoadingScreen />
</template>

<script setup lang="ts">
import { useLoadingLines } from '~~/src/store/loading';

definePageMeta({
  layout: 'loading',
});
useLoadingLines('Storing session token');
// TODO store token and redirect
// TODO validate redirect
</script>
