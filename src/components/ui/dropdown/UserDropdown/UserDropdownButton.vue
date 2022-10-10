<template>
  <div class="flex justify-center items-center">
    <img
      src="~/assets/images/logos/cascade.svg"
      class="rounded-full h-8 w-8 border-slate-700 border-2"
    />
    <p class="text-white flex-1 mx-2">
      mrjvs
      <span class="text-slate-100">#2165</span>
    </p>
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
