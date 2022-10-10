<template>
  <Container spaced>
    <SideNavContainer>
      <template #side>
        <SideNav>
          <ServersDropdown />
          <SideNavCategory name="Your actions">
            <SideNavItem to="actions" icon="disc">Actions</SideNavItem>
            <SideNavItem to="updates" icon="disc">Updates</SideNavItem>
            <SideNavItem to="projects" icon="disc">Projects</SideNavItem>
          </SideNavCategory>
          <SideNavCategory name="miscellaneous">
            <SideNavItem to="manage" icon="disc">Manage server</SideNavItem>
            <SideNavItem to="support" icon="disc">Support</SideNavItem>
          </SideNavCategory>
        </SideNav>
      </template>

      <slot />
    </SideNavContainer>
  </Container>
</template>
