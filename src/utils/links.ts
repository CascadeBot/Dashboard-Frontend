import { RouteLocationNormalizedLoaded } from 'vue-router';

export function serversLink(
  route: RouteLocationNormalizedLoaded,
  link = '',
): string {
  return serversLinkFromId(route.params.guild as string, link);
}

export function serversLinkFromId(id: string, link = ''): string {
  return `/servers/${id}${link}`;
}
