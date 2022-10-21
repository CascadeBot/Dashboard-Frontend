<template>
  <div :class="{ 'relative z-50': backdropOpen }">
    <Backdrop name="servers-dropdown">
      <Menu v-slot="{ open }">
        <BackdropController name="servers-dropdown" :open="open" />
        <MenuButton
          class="px-4 group py-2 w-full transition-colors rounded-md hover:bg-slate-300 bg-slate-500"
          :class="{
            'bg-slate-300': open,
          }"
        >
          <ServersDropdownButton :guild="guild" :open="open" />
        </MenuButton>
        <div class="absolute bottom-0 left-0 right-0">
          <div class="absolute right-0 left-0 mt-1">
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform -translate-y-5 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-5 opacity-0"
            >
              <MenuItems class="min-w-[15rem] rounded-md bg-slate-300 p-1">
                <ServersDropdownContent />
              </MenuItems>
            </transition>
          </div>
        </div>
      </Menu>
    </Backdrop>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
import { useBackdropState } from '@/store/backdrop';
import { useGuildStore } from '@/store/guilds';
import {
  ApiGetMutualGuilds,
  getMutualGuilds,
} from '@/queries/auth/getMutualGuilds';
const { openDelayed: backdropOpen } = useBackdropState('servers-dropdown');

interface Props {
  guildId: string;
}
const props = defineProps<Props>();
const store = useGuildStore();

const { data } = useGqlQuery<ApiGetMutualGuilds>('guilds', getMutualGuilds);
watchEffect(() => {
  if (data.value) store.setGuilds(data.value.mutualGuilds.guilds);
});
const guild = computed(() => store.get(props.guildId));
</script>
