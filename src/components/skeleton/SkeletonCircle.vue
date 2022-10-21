<template>
  <div
    class="bg-slate-400 bg-opacity-50 rounded-full inline-block"
    :class="{
      'h-8 w-8': props.size === 'sm',
      'h-16 w-16': props.size === 'md',
      'h-32 w-32': props.size === 'xl',
    }"
  />
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'xl';
}
const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
});
</script>
