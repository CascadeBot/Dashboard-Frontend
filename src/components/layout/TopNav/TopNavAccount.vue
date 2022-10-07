<template>
  <div class="flex justify-end items-center">
    <p v-if="error">Failed to load account</p>
    <p v-else-if="loading">loading...</p>
    <p v-else>{{ result.me.discordId }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { getCurrentUser } from '@/queries/auth/getCurrentUser';

const { loading, error, result } = useQuery(getCurrentUser);
</script>
