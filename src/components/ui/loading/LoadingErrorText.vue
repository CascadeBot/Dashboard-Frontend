<template>
  <p
    class="text-center mt-4 text-sm max-w-xs mx-auto transition-[opacity,transform] delay-500 duration-700"
    :class="{
      'opacity-0 -translate-y-4': !props.visible,
      'opacity-100 translate-y-0': props.visible,
    }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
interface Props {
  visible?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  visible: true,
});
</script>
