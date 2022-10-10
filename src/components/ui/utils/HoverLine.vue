<template>
  <div class="overflow-hidden relative block">
    <p
      class="transition-transform duration-300 translate-y-0 group-hover:translate-y-full"
      :class="{ '!translate-y-full': props.active }"
    >
      <slot />
    </p>
    <p
      class="absolute top-0 left-0 duration-300 transition-transform -translate-y-full group-hover:translate-y-0"
      :class="{ '!translate-y-0': props.active }"
    >
      {{ props.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  active?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  active: false,
});
</script>
