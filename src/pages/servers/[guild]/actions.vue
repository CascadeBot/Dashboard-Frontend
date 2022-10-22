<template>
  <GuildBoundary>
    <Heading>Your actions</Heading>
    <ActionsPartial />

    <template #pending>
      <ActionsSkeleton />
    </template>
    <template #error>
      <div>
        <p>error (actions page)</p>
        <RetryButton />
      </div>
    </template>
  </GuildBoundary>
</template>

<script setup lang="ts">
definePage().needsAuth().build();
</script>
