<template>
  <div>
    <div
      class="bg-slate-400 bg-opacity-50 rounded-md h-2"
      :class="{
        'w-12': props.length === 'sm',
        'h-24': props.length === 'md',
        'h-40': props.length === 'xl',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  length?: 'sm' | 'md' | 'xl';
}
const props = withDefaults(defineProps<Props>(), {
  length: 'sm',
});
</script>
