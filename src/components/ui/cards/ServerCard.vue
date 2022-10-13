<template>
  <Link
    type="internal"
    :to="serversLinkFromId(props.server.id, '/actions')"
    class="flex relative items-center transition-colors select-none duration-100 ease-out cursor-pointer bg-slate-500 p-9 rounded-xl hover:bg-slate-400 group"
  >
    <GuildIcon :guild="props.server" size="big" class="mr-9" />
    <div class="space-y-4 flex-1">
      <p class="text-2xl text-white">{{ props.server.name }}</p>
      <p class="text-slate-100">
        {{ guildNumbers.online }} online <Dot />
        {{ guildNumbers.total }} members
      </p>
    </div>
    <div
      class="absolute right-8 transition-[opacity,transform] translate-x-3 group-hover:translate-x-0 ease-out duration-100 opacity-0 group-hover:opacity-100"
    >
      <VueFeather type="chevron-right" class="text-2xl text-white" />
    </div>
  </Link>
</template>

<script setup lang="ts">
import { serversLinkFromId } from '@/utils/links';

interface Props {
  server: {
    iconUrl?: string;
    name: string;
    id: string;
    onlineCount: number;
    memberCount: number;
  };
}
const props = defineProps<Props>();
const { guildNumbers } = useGuildNumbers(props.server);
</script>
