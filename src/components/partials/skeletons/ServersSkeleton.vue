<template>
  <Container spaced class="grid grid-cols-3 gap-16">
    <div class="col-span-2">
      <Heading>Your servers</Heading>
      <SkeletonLine length="xl" class="my-6" />
      <div class="mt-10 space-y-4">
        <SkeletonWide size="xl" />
        <SkeletonWide size="xl" />
        <SkeletonWide size="xl" />
      </div>
    </div>
    <div class="col-span-1 space-y-2">
      <SkeletonLine full />
      <SkeletonLine length="xl" class="!mb-6" />
      <SkeletonLine full />
      <SkeletonLine length="xl" />
      <SkeletonLine length="2xl" />
    </div>
  </Container>
</template>
