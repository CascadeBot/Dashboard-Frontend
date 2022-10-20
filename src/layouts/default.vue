<template>
  <div class="min-h-screen w-full">
    <ClientOnly>
      <TopNav v-if="!mustFullscreen" />
      <slot />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const mustFullscreen = computed(() => route.meta?.fullscreen === true);
</script>
