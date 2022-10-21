<template>
  <Boundary id="guild">
    <Heading>Your actions</Heading>
    <ActionsPartial />

    <template #pending>
      <ActionsSkeleton />
    </template>
    <template #error>
      <div>
        <p>error (actions page)</p>
        <RetryButton />
      </div>
    </template>
  </Boundary>
</template>
