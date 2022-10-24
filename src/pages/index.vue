<template>
  <div>
    <p>Homepage here</p>
    <p>Is logged in: {{ store.authenticated }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/store/session';
const store = useSessionStore();

// TASKS BEFORE MERGE:
// TODO better loading / error state for user dropdown
// TODO unified error component with retry button
// TODO associate user dropdown loader with page boundary
// TODO make dropdown guild selector
// TODO redirect homepage (current file) to /servers
// TODO refresh should not fetch from graphql cache
// TODO handle cancel button on discord login
// TODO nuxt error boundary on <Boundary />
// TODO nuxt error layout (fallback)
// TODO nuxt 404 layout (fallback)
// TODO add icons for sidenav and topnav
// TODO skeleton animations
</script>
