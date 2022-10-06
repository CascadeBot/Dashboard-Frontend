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

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

  provideApolloClient(apolloClient);
  nuxtApp.provide('apollo', { DefaultApolloClient, apolloClient });
});
