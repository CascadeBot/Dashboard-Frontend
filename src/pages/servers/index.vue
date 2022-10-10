<template>
  <Container spaced class="grid grid-cols-3 gap-16">
    <div class="col-span-2">
      <Heading>Your servers</Heading>
      <Paragraph class="mt-3">
        All servers you have dashboard access to.
      </Paragraph>
      <div class="mt-10 space-y-4">
        <ServerCard
          :server="{
            avatarUrl:
              'https://cdn.discordapp.com/icons/533679825026678784/fe544f20821838caec98d5f7a9df944f.webp?size=96',
            discordId: '533679825026678784',
            name: 'Cascade test Server',
            onlineCount: 16,
            totalCount: 12623,
          }"
        />
      </div>
    </div>
    <div class="col-span-1 space-y-4">
      <Paragraph>
        This server list only shows what servers you have access to the
        dashboard with.
      </Paragraph>
      <Paragraph>
        Ask an admin of the server for access to the dashboard or you can
        <Link to="#" class="text-red-100 underline"
          >add cascade to your server</Link
        >.
      </Paragraph>
    </div>
  </Container>
</template>
