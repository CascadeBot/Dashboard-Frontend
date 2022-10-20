<template>
  <div>
    <Suspense>
      <slot />

      <template #fallback>
        <slot v-if="error.error" name="error" />
        <slot v-else name="pending" />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
// TODO store component in boundary store
// TODO error boundary
// TODO compute view state
const error = ref({ error: false, message: '' });
onErrorCaptured((e) => {
  error.value.message = e.message;
  error.value.error = true;
});
</script>
