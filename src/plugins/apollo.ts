import { defineNuxtPlugin } from '#app';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import {
  DefaultApolloClient,
  provideApolloClient,
} from '@vue/apollo-composable';

// TODO authenticated queries support
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const uri = config.public.graphqlUrl;

  const httpLink = createHttpLink({
    uri,
  });

  const cache = new InMemoryCache();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let apolloClient: ApolloClient<any>;

  if (process.server) {
    apolloClient = new ApolloClient({
      ssrMode: true,
      link: httpLink,
      cache,
    });
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload.data.apollo = apolloClient.extract();
    });
  } else {
    apolloClient = new ApolloClient({
      link: httpLink,
      cache,
    });
  }

  provideApolloClient(apolloClient);
  nuxtApp.provide('apollo', { DefaultApolloClient, apolloClient });
});
