<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else-if="error">
    <p>Failed to load servers</p>
  </div>
  <div v-else-if="result">
    <p>Servers go here</p>
    <p v-for="guild in result.mutualGuilds.guilds" :key="guild.id">
      {{ guild.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useGetGuilds } from '@/store/guilds';

// this is cached by graphql client, so its safe to call multiple times
const { result, error, loading } = useGetGuilds();
</script>
