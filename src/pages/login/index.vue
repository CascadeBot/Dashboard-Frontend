<template>
  <LoadingScreen :error="errorRef.error">
    <LoadingErrorText :visible="errorRef.error">
      Whoops, something went wrong with logging you in. Try again later.
    </LoadingErrorText>
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
const errorRef = ref({
  error: false,
});

const { onError, onResult, load } = useLazyQuery(getAuthorizeUrl);

onResult(({ data }) => {
  addLine('redirecting to discord...');
  window.location.href = data.getOAuthInfo.authorizeUrl;
});
onError(() => {
  // TODO handle errors better
  errorRef.value.error = true;
  addLine('Failed to retrieve login link', true);
});

onMounted(() => {
  const redirect = query.redirect;
  if (!isValidRedirect(redirect)) {
    errorRef.value.error = true;
    addLine('Invalid redirect link', true);
    return;
  }

  // request oauth link, onResult and onError handles the rest
  load(undefined, {
    redirect: redirect ?? null,
  });
});
</script>
