<template>
  <MenuItem>
    <Link
      class="py-2 px-4 m-1 rounded-md block transition-colors bg-slate-300 hover:bg-slate-500 duration-100 cursor-pointer group"
      :to="props.to"
      :type="props.type"
      dropdown
    >
      <slot />
    </Link>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';

interface Props {
  to: string;
  type?: 'external' | 'internal';
}
const props = defineProps<Props>();
</script>
