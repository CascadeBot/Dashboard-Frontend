<template>
  <MenuItem>
    <div
      class="py-2 px-4 m-1 rounded-md transition-colors bg-slate-300 hover:bg-slate-500 duration-100 cursor-pointer group"
    >
      <slot />
    </div>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';
</script>
