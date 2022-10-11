<template>
  <ServerNav v-if="!mustFullscreen">
    <NuxtPage />
  </ServerNav>
  <NuxtPage v-else />
</template>

<script setup lang="ts">
const route = useRoute();
const mustFullscreen = computed(() => route.meta?.fullscreen === true);
</script>
