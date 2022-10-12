<template>
  <div>
    <Heading>Your actions</Heading>
    <p v-if="loading">loading...</p>
    <p v-else-if="error">errored, whoops</p>
    <p v-else class="whitespace-pre">{{ JSON.stringify(result, null, 2) }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { getCurrentUser } from '@/queries/auth/getCurrentUser';

const { loading, error, result } = useQuery(getCurrentUser);
</script>
