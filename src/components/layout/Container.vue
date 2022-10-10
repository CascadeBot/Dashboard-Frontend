<template>
  <div
    class="container mx-auto"
    :class="{
      'my-16': props.spaced,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  spaced?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  spaced: false,
});
</script>
