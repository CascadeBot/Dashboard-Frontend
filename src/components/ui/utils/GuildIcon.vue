<template>
  <img
    v-if="props.guild?.iconUrl"
    :class="`block ${sizes} rounded-full bg-slate-200`"
    :src="props.guild.iconUrl"
  />
  <div
    v-else
    :class="`${sizes} rounded-full bg-slate-200 flex justify-center items-center text-white text-center text-xl`"
  >
    <p>{{ discordShortName(props.guild?.name) }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  guild?: {
    iconUrl?: string;
    name: string;
  };
  size?: 'big' | 'medium';
}
const props = defineProps<Props>();
const sizes = computed(() => {
  if (props.size === 'big') return 'h-16 w-16';

  // default to medium
  return 'h-12 w-12';
});

function discordShortName(name?: string) {
  if (!name) return '';
  return name
    .split(' ', 3)
    .map((v) => v[0])
    .join('');
}
</script>
