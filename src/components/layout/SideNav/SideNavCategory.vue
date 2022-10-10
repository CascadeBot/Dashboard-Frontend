<template>
  <div>
    <p class="text-slate-150 uppercase font-bold ml-8 mt-8 mb-2 text-xs">
      {{ props.name }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}
const props = defineProps<Props>();
</script>
