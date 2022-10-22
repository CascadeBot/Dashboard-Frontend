<template>
  <Boundary id="page">
    <ServersPartial />

    <template #pending>
      <ServersSkeleton />
    </template>
    <template #error>
      <p>error</p>
    </template>
  </Boundary>
</template>

<script setup lang="ts">
definePage().needsAuth().build();
</script>
