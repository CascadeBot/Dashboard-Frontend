<template>
  <div :class="{ 'relative z-50': backdropOpen }">
    <Backdrop name="user-dropdown">
      <Menu v-slot="{ open }">
        <BackdropController name="user-dropdown" :open="open" />
        <MenuButton
          class="px-4 py-2 transition-colors bg-opacity-0 rounded-md hover:bg-opacity-100 bg-slate-300"
          :class="{
            'bg-opacity-100': open,
          }"
        >
          <UserDropdownButton :open="open" />
        </MenuButton>
        <div class="absolute bottom-0 left-0 right-0">
          <div class="absolute right-0 top-1">
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform -translate-y-5 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-5 opacity-0"
            >
              <MenuItems class="min-w-[15rem] rounded-md bg-slate-300 p-1">
                <UserDropdownLink to="/account" type="internal">
                  Account settings
                </UserDropdownLink>
                <UserDropdownDivider />
                <UserDropdownItem @click="logout()">
                  <p
                    class="flex items-center text-red-200 group-hover:text-red-100"
                  >
                    <vue-feather type="arrow-left" class="mr-2 text-xl" />
                    <span> Logout </span>
                  </p>
                </UserDropdownItem>
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
const { openDelayed: backdropOpen } = useBackdropState('user-dropdown');
const { logout } = useLogout();

interface Props {
  user: {
    id: string;
    discordId: string;
  };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>();
</script>
