<template>
  <Link
    :to="props.to"
    :type="props.type"
    class="flex justify-center items-center"
  >
    <img
      class="bg-slate-300 h-10 w-10 rounded-full mr-4"
      src="~/assets/images/logos/cascade.png"
    />
    <p class="font-bold text-xl text-white mr-5">
      <slot />
    </p>
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
