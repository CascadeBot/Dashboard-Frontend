<template>
  <Container spaced class="grid grid-cols-3 gap-16">
    <div class="col-span-2">
      <Heading>Your servers</Heading>
      <Paragraph class="mt-3">
        All servers you have dashboard access to.
      </Paragraph>
      <div class="mt-10 space-y-4">
        <ServerCard
          v-for="guild in data?.mutualGuilds.guilds"
          :key="guild.id"
          :guild="guild"
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

<script setup lang="ts">
import { useAsyncGetGuilds } from '@/store/guilds';

const { data } = useAsyncGetGuilds();
</script>
