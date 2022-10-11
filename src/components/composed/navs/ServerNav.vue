<template>
  <Container spaced>
    <SideNavContainer>
      <template #side>
        <SideNav>
          <ServersDropdown />
          <SideNavCategory name="Your actions">
            <SideNavItem :to="serversLink($route, '/actions')" icon="disc">
              Actions
            </SideNavItem>
            <SideNavItem :to="serversLink($route, '/updates')" icon="disc">
              Updates
            </SideNavItem>
            <SideNavItem :to="serversLink($route, '/projects')" icon="disc">
              Projects
            </SideNavItem>
          </SideNavCategory>
          <SideNavCategory name="miscellaneous">
            <SideNavItem :to="serversLink($route, '/manage')" icon="disc">
              Manage server
            </SideNavItem>
            <SideNavItem :to="serversLink($route, '/support')" icon="disc">
              Support
            </SideNavItem>
          </SideNavCategory>
        </SideNav>
      </template>

      <slot />
    </SideNavContainer>
  </Container>
</template>

<script setup lang="ts">
import { serversLink } from '@/utils/links';
</script>
