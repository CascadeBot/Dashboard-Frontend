<template>
  <Boundary id="page">
    <ServersPartial />

    <template #pending>
      <ServersSkeleton />
    </template>
    <template #error>
      <p>error</p>
    </template>
  </Boundary>
</template>
