<template>
  <div class="flex items-center justify-end">
    <Loading v-if="pending && store.authenticated" />
    <div v-else-if="!store.authenticated || !data">
      <p>Login button here</p>
    </div>
    <UserDropdown v-else-if="data" :user="data.me" />
  </div>
</template>

<script setup lang="ts">
import {
  ApiGetCurrentUser,
  getCurrentUser,
} from '@/queries/auth/getCurrentUser';
import { useRefreshSession, useSessionStore } from '@/store/session';

const store = useSessionStore();
const { data, pending, refetch } = useGqlQuery<ApiGetCurrentUser>(
  'page:user',
  getCurrentUser,
  {},
  {
    staticKey: true,
  },
);
useRefreshSession(() => {
  refetch();
});
</script>
