<template>
  <div class="flex justify-center items-center">
    <img
      :src="props.user.discord.avatar_url"
      class="rounded-full h-8 w-8 border-slate-700 border-2"
    />
    <p class="text-white flex-1 mx-2">
      {{ props.user.discord.name }}
      <span class="text-slate-100"
        >#{{ props.user.discord.discriminator }}</span
      >
    </p>
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
  user: {
    id: string;
    discord: {
      id: string;
      avatar_url: string;
      discriminator: string;
      name: string;
    };
  };
}
const props = defineProps<Props>();
</script>
