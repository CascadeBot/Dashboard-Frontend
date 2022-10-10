<template>
  <Link
    type="internal"
    :to="`/servers/${props.server.discordId}`"
    class="flex relative items-center transition-colors select-none duration-100 ease-out cursor-pointer bg-slate-500 p-9 rounded-xl hover:bg-slate-400 group"
  >
    <img class="block h-16 rounded-full mr-9" :src="props.server.avatarUrl" />
    <div class="space-y-4 flex-1">
      <p class="text-2xl text-white">{{ props.server.name }}</p>
      <p class="text-slate-100">
        {{ counts.online }} online <Dot /> {{ counts.total }} members
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
import shortNumbers from 'short-numbers';

interface Props {
  server: {
    avatarUrl: string;
    name: string;
    discordId: string;
    onlineCount: number;
    totalCount: number;
  };
}
const props = defineProps<Props>();
const counts = computed(() => ({
  online: shortNumbers(props.server.onlineCount),
  total: shortNumbers(props.server.totalCount),
}));
</script>
