<template>
  <div class="h-[150px] w-[150px] flex justify-center items-center">
    <Vue3Lottie :animation-data="animationData" :height="100" :width="100" />
  </div>
</template>

<script lang="ts" setup>
import * as animationData from '~/assets/animations/loading.json';
</script>
