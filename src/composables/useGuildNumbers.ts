import { MaybeComputedRef } from '@vueuse/core';
import shortNumbers from 'short-numbers';
import { unrefComputed } from '../utils/unref';

interface GuildNumbers {
  onlineCount: number;
  memberCount: number;
}
export function useGuildNumbers(
  guild?: MaybeComputedRef<GuildNumbers | undefined>,
) {
  const guildNumbers = computed(() => ({
    online: shortNumbers(unrefComputed(guild)?.onlineCount ?? 0),
    total: shortNumbers(unrefComputed(guild)?.memberCount ?? 0),
  }));
  return {
    guildNumbers,
  };
}
