<template>
  <div class="flex">
    <div class="w-[21rem] mr-16">
      <slot name="side" />
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
