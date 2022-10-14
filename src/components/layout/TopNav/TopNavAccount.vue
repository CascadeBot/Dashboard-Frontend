<template>
  <div class="flex items-center justify-end">
    <div v-if="!store.authenticated || error">
      <p>Login button here</p>
    </div>
    <Loading v-else-if="loading" />
    <UserDropdown v-else-if="result" :user="result.me" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import {
  ApiGetCurrentUser,
  getCurrentUser,
} from '@/queries/auth/getCurrentUser';
import { useRefreshSession, useSessionStore } from '@/store/session';

const store = useSessionStore();
const { loading, error, result, refetch } =
  useQuery<ApiGetCurrentUser>(getCurrentUser);
useRefreshSession(() => {
  refetch();
});
</script>
