<template>
  <LoadingScreen>
    <p v-if="error">Errored getting data</p>
  </LoadingScreen>
</template>
<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable';
import { getAuthorizeUrl } from '@/queries/auth/getAuthorizeUrl';
import { useLoadingLines } from '@/store/loading';

definePageMeta({
  layout: 'loading',
});

// TODO validate redirect value
const { query } = useRoute();
const { addLine } = useLoadingLines('Retrieving login link');

const { error, onError, onResult } = useQuery(getAuthorizeUrl, {
  redirect: query.redirect ?? null,
});
onResult(({ data }) => {
  addLine('redirecting to discord...');
  window.location.href = data.getOAuthInfo.authorizeUrl;
});
onError(() => {
  addLine('Failed to retrieve login link');
});
</script>
