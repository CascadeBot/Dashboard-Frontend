<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Errored getting data</p>
    <a v-else :href="result.getOAuthInfo.authorizeUrl">Click to login!</a>
  </div>
</template>
<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable';
import { getAuthorizeUrl } from '@/queries/auth/getAuthorizeUrl';

definePageMeta({
  layout: 'loading',
});

// TODO better UI/UX
// TODO automatically redirect to requested link
// TODO use query parameter for redirect
// TODO validate redirect value

const { loading, result, error } = useQuery(getAuthorizeUrl, {
  redirect: '/me',
});
</script>
