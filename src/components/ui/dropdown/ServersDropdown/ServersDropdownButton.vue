<template>
  <div class="flex items-center py-2">
    <GuildIcon :guild="props.guild" size="medium" class="mr-4" />
    <div class="flex-1 text-left flex flex-col">
      <p class="text-white">{{ props.guild?.name || 'Unknown server' }}</p>
      <HoverLine
        :active="props.open"
        text="Click to switch server"
        class="text-slate-100"
      >
        {{ guildNumbers.total }} members
      </HoverLine>
    </div>
    <vue-feather
      type="chevron-down"
      class="text-slate-50 transition-transform text-lg"
      :class="{
        'rotate-180': props.open,
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  open: boolean;
  guild?: {
    iconUrl?: string;
    name: string;
    id: string;
    onlineCount: number;
    memberCount: number;
  };
}
const props = defineProps<Props>();
const { guildNumbers } = useGuildNumbers(props.guild);
</script>
