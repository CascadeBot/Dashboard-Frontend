<template>
  <p class="whitespace-pre">{{ JSON.stringify(data.me, null, 2) }}</p>
</template>

<script async setup lang="ts">
import {
  ApiGetCurrentUser,
  getCurrentUser,
} from '@/queries/auth/getCurrentUser';

const { data } = await useAsyncQuery<ApiGetCurrentUser>(
  'getuserTEMP',
  getCurrentUser,
);
</script>
