<template>
  <div>
    <div
      class="bg-slate-400 bg-opacity-50 rounded-xl h-6"
      :class="{
        'w-12': props.length === 'sm',
        'w-24': props.length === 'md',
        'w-40': props.length === 'xl',
        'w-64': props.length === '2xl',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  length?: string;
}
const props = withDefaults(defineProps<Props>(), {
  length: 'sm',
});
</script>
