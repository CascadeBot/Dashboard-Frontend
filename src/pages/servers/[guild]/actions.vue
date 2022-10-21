<template>
  <Boundary id="guild">
    <Heading>Your actions</Heading>
    <ActionsPartial />

    <template #pending>
      <p>loading (actions page)</p>
    </template>
    <template #error>
      <div>
        <p>error (actions page)</p>
        <RetryButton />
      </div>
    </template>
  </Boundary>
</template>
