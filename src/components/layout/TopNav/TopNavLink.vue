<template>
  <Link
    :to="props.to"
    :type="props.type"
    class="py-2 px-2 mr-3 text-slate-100 hover:text-white transition-colors"
  >
    <slot />
  </Link>
</template>

<script setup lang="ts">
interface Props {
  to: string;
  type?: 'external' | 'internal';
}
const props = withDefaults(defineProps<Props>(), {
  type: 'external',
});
</script>
