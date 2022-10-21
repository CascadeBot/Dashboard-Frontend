<template>
  <Boundary id="page">
    <ServerNav v-if="!mustFullscreen">
      <NuxtPage />
    </ServerNav>
    <NuxtPage v-else />
    <template #pending>
      <SidebarSkeleton />
    </template>
    <template #error>
      <div>
        <p>error (full page)</p>
        <RetryButton />
      </div>
    </template>
  </Boundary>
</template>

<script setup lang="ts">
const route = useRoute();
const mustFullscreen = computed(() => route.meta?.fullscreen === true);
</script>
