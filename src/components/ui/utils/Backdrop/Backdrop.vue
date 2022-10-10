<template>
  <div>
    <transition>
      <div
        v-if="open"
        class="fixed top-0 w-screen h-screen left-0 bg-opacity-50 bg-black"
      />
    </transition>
    <div class="relative" :class="{ 'z-50': openDelayed }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBackdropState } from '@/store/backdrop';

interface Props {
  name: string;
}
const props = defineProps<Props>();
const { openDelayed, open } = useBackdropState(props.name);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-opacity ease-linear duration-100;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
