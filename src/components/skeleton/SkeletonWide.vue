<template>
  <div>
    <div
      class="bg-slate-400 bg-opacity-50 rounded-md"
      :class="{
        'h-8': props.size === 'sm',
        'h-16': props.size === 'md',
        'h-32': props.size === 'xl',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'xl';
}
const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
});
</script>
