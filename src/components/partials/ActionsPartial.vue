<template>
  <p class="whitespace-pre">{{ JSON.stringify(result?.me, null, 2) }}</p>
</template>

<script async setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import {
  ApiGetCurrentUser,
  getCurrentUser,
} from '@/queries/auth/getCurrentUser';

const { result } = useQuery<ApiGetCurrentUser>(getCurrentUser);
useBoundaryFetch('user', () => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
});
</script>
