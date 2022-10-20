<template>
  <div
    class="min-h-screen w-full bg-slate-800 flex justify-center items-center"
  >
    <ClientOnly>
      <slot />
    </ClientOnly>
  </div>
</template>
