<template>
  <div>
    <transition>
      <div
        v-if="store.isOpen(props.name)"
        class="fixed top-0 w-screen h-screen left-0 bg-opacity-50 bg-black"
      />
    </transition>
    <div class="relative z-50">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBackdropStore } from '@/store/backdrop';

interface Props {
  name: string;
}
const props = defineProps<Props>();

const store = useBackdropStore();
</script>

<style>
.v-enter-active,
.v-leave-active {
  @apply transition-opacity ease-linear duration-100;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
