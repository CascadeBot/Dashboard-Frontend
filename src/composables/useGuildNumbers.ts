import shortNumbers from 'short-numbers';

interface GuildNumbers {
  guild?: {
    onlineCount: number;
    memberCount: number;
  };
}
export function useGuildNumbers(guild: GuildNumbers) {
  const guildNumbers = ref({
    online: '0',
    total: '0',
  });
  watch(
    guild,
    () => {
      guildNumbers.value.online = shortNumbers(guild.guild?.onlineCount ?? 0);
      guildNumbers.value.total = shortNumbers(guild.guild?.memberCount ?? 0);
    },
    { immediate: true },
  );
  return {
    guildNumbers,
  };
}
