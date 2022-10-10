<template>
  <div />
</template>

<script setup lang="ts">
import { useBackdropStore } from '@/store/backdrop';

interface Props {
  open?: boolean;
  name: string;
}
const props = withDefaults(defineProps<Props>(), {
  open: false,
});
const open = computed(() => props.open);

const store = useBackdropStore();

watch([open], () => {
  store.setState(props.name, open.value);
});
</script>
