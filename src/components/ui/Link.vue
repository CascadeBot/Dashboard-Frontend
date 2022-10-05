<template>
  <a v-if="props.type === 'external'" :href="props.to">
    <slot />
  </a>
  <NuxtLink v-else :to="props.to">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  type?: 'external' | 'internal';
  to: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'external',
});
</script>
