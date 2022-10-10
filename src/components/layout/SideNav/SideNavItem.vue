<template>
  <div class="my-1 flex">
    <div class="w-3 flex items-center justify-start">
      <div v-if="isActive" class="w-1 rounded h-4 bg-red-300" />
    </div>
    <Link
      type="internal"
      :to="props.to"
      class="text-slate-100 flex-1 rounded flex items-center justify-start py-2 px-4 transition-colors duration-100 hover:bg-slate-300 hover:text-slate-50"
      :class="{
        'bg-slate-500 !text-red-200': isActive,
      }"
    >
      <vue-feather v-if="props.icon" :type="props.icon" class="text-xl mr-2" />
      <slot />
    </Link>
  </div>
</template>

<script setup lang="ts">
interface Props {
  to: string;
  icon?: string;
}
const props = defineProps<Props>();
const { isActive } = useLink({ to: props.to });
</script>
