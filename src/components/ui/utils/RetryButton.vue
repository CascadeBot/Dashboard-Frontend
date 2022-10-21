<template>
  <button @click="refresh()">Retry</button>
</template>

<script setup lang="ts">
const { refresh } = useBoundary();
</script>
