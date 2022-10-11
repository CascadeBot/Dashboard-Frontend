<template>
  <Link
    type="internal"
    :to="props.to"
    class="inline-flex mr-4 flex-col items-center overflow-hidden group"
  >
    <div
      class="flex py-1 mb-1 px-6 justify-center items-center bg-opacity-0 group-hover:bg-opacity-100 bg-slate-300 rounded-md transition-colors"
    >
      <p
        class="text-center text-slate-100 group-hover:text-slate-50 transition-colors"
        :class="{
          'text-red-200 group-hover:text-red-200': isActive,
        }"
      >
        <slot />
      </p>
    </div>
    <div
      class="h-1 w-full rounded-t-xl bg-red-200 duration-300 transition-transform translate-y-2"
      :class="{
        'translate-y-0-overwrite': isActive,
      }"
    />
  </Link>
</template>

<script setup lang="ts">
interface Props {
  to: string;
}
const props = withDefaults(defineProps<Props>(), {});
const { isActive } = useIsActive(props.to);
</script>

<style>
.translate-y-0-overwrite {
  transform: translateY(0) !important;
}
</style>
