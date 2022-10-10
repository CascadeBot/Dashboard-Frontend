<template>
  <div class="flex items-center justify-end">
    <p v-if="error">Failed to load account</p>
    <p v-else-if="loading">Loading...</p>
    <UserDropdown v-else :user="result.me" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { getCurrentUser } from '@/queries/auth/getCurrentUser';

const { loading, error, result } = useQuery(getCurrentUser);
</script>
