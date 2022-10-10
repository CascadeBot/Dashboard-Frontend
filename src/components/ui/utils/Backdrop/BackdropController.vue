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

const store = useBackdropStore();

watchEffect(() => {
  store.setState(props.name, props.open);
});
</script>
