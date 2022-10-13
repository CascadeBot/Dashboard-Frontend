<template>
  <Container spaced class="grid grid-cols-3 gap-16">
    <div class="col-span-2">
      <Heading>Your servers</Heading>
      <Paragraph class="mt-3">
        All servers you have dashboard access to.
      </Paragraph>
      <p v-if="loading">loading...</p>
      <p v-else-if="error">Whoops, errorred</p>
      <div v-else-if="result" class="mt-10 space-y-4">
        <ServerCard
          v-for="guild in result.mutualGuilds.guilds"
          :key="guild.id"
          :server="guild"
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
import { useGetGuilds } from '@/store/guilds';

const { loading, error, result } = useGetGuilds();
</script>
