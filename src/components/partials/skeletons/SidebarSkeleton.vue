<template>
  <Container spaced>
    <SideNavContainer>
      <template #side>
        <SideNav>
          <SkeletonWide size="md" />

          <SkeletonLine length="md" class="mb-4 mt-12" />
          <SkeletonWide class="mb-4" />
          <SkeletonWide class="mb-4" />
          <SkeletonWide class="mb-4" />

          <SkeletonLine length="md" class="mb-4 mt-12" />
          <SkeletonWide class="mb-4" />
          <SkeletonWide class="mb-4" />
          <SkeletonWide class="mb-4" />
        </SideNav>
      </template>

      <div>
        <SkeletonHeading length="xl" class="mb-4" />
        <SkeletonLine length="md" />
      </div>
    </SideNavContainer>
  </Container>
</template>
