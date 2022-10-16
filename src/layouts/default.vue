<template>
  <div class="min-h-screen w-full">
    <ClientOnly>
      <TopNav />
      <slot />
    </ClientOnly>
  </div>
</template>
