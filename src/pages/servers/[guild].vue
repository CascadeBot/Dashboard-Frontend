<template>
  <PageBoundary>
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
  </PageBoundary>
</template>

<script setup lang="ts">
definePage().needsAuth().build();

const route = useRoute();
const mustFullscreen = computed(() => route.meta?.fullscreen === true);

// TODO make this 404 when accessed directly
</script>
