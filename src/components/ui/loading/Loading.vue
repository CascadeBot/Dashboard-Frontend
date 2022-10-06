<template>
  <div class="h-[150px] w-[150px] flex justify-center items-center">
    <ClientOnly>
      <Vue3Lottie :animation-data="animationData" :height="100" :width="100" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import * as animationData from '~/assets/animations/loading.json';
</script>
