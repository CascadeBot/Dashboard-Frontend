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
const error = ref({ error: false, message: '' });
onErrorCaptured((e) => {
  error.value.message = e.message;
  error.value.error = true;
});
</script>
