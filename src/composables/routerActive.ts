import { Ref } from 'vue';

function isActive(path: string, toCheck: string): boolean {
  return path.startsWith(toCheck);
}

export function useIsActive(toCheck: Ref<string> | string) {
  const route = useRoute();
  const isActiveComputed = computed(() => isActive(route.path, unref(toCheck)));
  return {
    isActive: isActiveComputed,
  };
}
