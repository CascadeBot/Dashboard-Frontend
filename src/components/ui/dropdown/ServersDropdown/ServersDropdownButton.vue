<template>
  <div class="flex items-center py-2">
    <img
      src="~/assets/images/logos/cascade.svg"
      class="rounded-full h-12 w-12 mr-4"
    />
    <div class="flex-1 text-left flex flex-col">
      <p class="text-white">Cascade Test Server</p>
      <HoverLine text="Click to switch server" class="text-slate-100">
        12k members
      </HoverLine>
    </div>
    <vue-feather
      type="chevron-down"
      class="text-slate-50 transition-transform text-lg"
      :class="{
        'rotate-180': props.open,
      }"
    />
  </div>
</template>
<script setup lang="ts">
interface Props {
  open: boolean;
}
const props = defineProps<Props>();
</script>
