<template>
  <div>
    <p>Homepage here</p>
    <p>Is logged in: {{ store.authenticated }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/store/session';
const store = useSessionStore();

// TODO figure out how to handle loading states & error states for pages
</script>
