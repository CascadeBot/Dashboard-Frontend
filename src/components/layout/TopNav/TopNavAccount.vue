<template>
  <div class="flex items-center justify-end">
    <p v-if="error">Failed to load account</p>
    <p v-else-if="loading">Loading...</p>
    <UserDropdown v-else-if="result" :user="result.me" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import {
  ApiGetCurrentUser,
  getCurrentUser,
} from '@/queries/auth/getCurrentUser';

// TODO better state handling (loading state, error state)
const { loading, error, result } = useQuery<ApiGetCurrentUser>(getCurrentUser);
</script>
