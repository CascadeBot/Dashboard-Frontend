<template>
  <LoadingScreen>
    <p v-if="false">Errored getting data</p>
  </LoadingScreen>
</template>
<script lang="ts" setup>
import { useLazyQuery } from '@vue/apollo-composable';
import { getAuthorizeUrl } from '@/queries/auth/getAuthorizeUrl';
import { useLoadingLines } from '@/store/loading';
import { isValidRedirect } from '@/utils/redirect';

definePageMeta({
  layout: 'loading',
});

const { query } = useRoute();
const { addLine } = useLoadingLines('Retrieving login link');

const { onError, onResult, load } = useLazyQuery(getAuthorizeUrl);

onResult(({ data }) => {
  addLine('redirecting to discord...');
  window.location.href = data.getOAuthInfo.authorizeUrl;
});
onError(() => {
  // TODO handle errors better
  addLine('Failed to retrieve login link');
});

onMounted(() => {
  const redirect = query.redirect;
  if (!isValidRedirect(redirect)) {
    addLine('Invalid redirect link');
    return;
  }

  // request oauth link, onResult and onError handles the rest
  load(undefined, {
    redirect: redirect ?? null,
  });
});
</script>
