<template>
  <div>
    <div class="text-center select-none">
      <p
        v-for="(line, i) in limitedLines"
        :key="line.id"
        class="transition-all absolute left-0 right-0 duration-300"
        :class="{
          'text-red-100': line.error,
        }"
        :style="getStyles(i)"
      >
        {{ line.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoadingStore } from '@/store/loading';

const { lines } = useLoadingStore();
const limitedLines = computed(() => lines.slice(0, 7));
const curLines = ref(0);

function getStyles(i: number) {
  const index = i - (lines.length - curLines.value);

  if (index < 0) {
    return {
      transform: `scale(1) translateY(-40px)`,
      opacity: '0',
    };
  }

  const opacity = Math.max(100 - index * 40, 0);
  const offset = Math.min(index, 4);
  const offsetPixels = offset * 40;
  const scale = index === 0 ? 1 : 0.75;
  return {
    transform: `scale(${scale}) translateY(${offsetPixels}px)`,
    opacity: opacity / 100 + '',
  };
}

onMounted(() => {
  curLines.value = lines.length;
});
watch([lines], () => {
  const lineAmount = lines.length;
  if (lineAmount !== curLines.value) {
    setTimeout(() => {
      curLines.value = lineAmount;
    }, 100);
  }
});
</script>
