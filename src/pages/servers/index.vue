<template>
  <Boundary id="page">
    <ServersPartial />

    <template #pending>
      <p>loading</p>
    </template>
    <template #error>
      <p>error</p>
    </template>
  </Boundary>
</template>
