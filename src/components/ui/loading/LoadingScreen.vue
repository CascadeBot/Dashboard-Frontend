<template>
  <div class="h-16 w-96 flex justify-center items-center relative">
    <LoadingError v-if="props.error" />
    <Loading v-else />
    <div class="absolute top-[90px] left-0 right-0 flex flex-col">
      <div class="h-32 text-center relative">
        <LoadingLines />
        <div
          class="bg-gradient-to-b from-transparent to-slate-800 left-0 right-0 bottom-0 absolute h-28"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  error: false,
});
</script>
