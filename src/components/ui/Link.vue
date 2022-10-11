<template>
  <a v-if="props.type === 'external'" :target="target" :href="props.to">
    <slot />
  </a>
  <NuxtLink v-else-if="!dropdown" :to="props.to">
    <slot />
  </NuxtLink>
  <a v-else :target="target" @click="to && router.push({ path: to })">
    <slot />
  </a>
</template>

<script setup lang="ts">
const router = useRouter();

interface Props {
  type?: 'external' | 'internal';
  dropdown?: boolean;
  to: string;
  target?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'external',
  dropdown: false,
  target: undefined,
});
</script>
