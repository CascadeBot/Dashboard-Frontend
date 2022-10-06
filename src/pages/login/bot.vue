<template>
  <LoadingScreen />
</template>

<script setup lang="ts">
import { useLoadingLines } from '~~/src/store/loading';

definePageMeta({
  layout: 'loading',
});
useLoadingLines('Exchanging login token for session');
// TODO exchange token from session token
// TODO redirect to /login/callback with redirect and session token
</script>
