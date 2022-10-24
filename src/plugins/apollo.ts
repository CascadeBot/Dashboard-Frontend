import { defineNuxtPlugin } from '#app';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  DefaultApolloClient,
  provideApolloClient,
} from '@vue/apollo-composable';
import { useSessionStore } from '@/store/session';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const uri = config.public.graphqlUrl;

  const httpLink = createHttpLink({
    uri,
  });

  const authLink = setContext((_, { headers }) => {
    const tokenStore = useSessionStore();
    const token = tokenStore.token;
    const authenticated = tokenStore.authenticated;

    if (authenticated) {
      headers = {
        ...headers,
        authorization: `Bearer ${token}`,
      };
    }

    return {
      headers,
    };
  });

  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      const tokenError = graphQLErrors.find(({ extensions }) => {
        if (extensions && extensions.code === 'invalid-token') return true;
        return false;
      });
      if (tokenError) {
        if (!process.client) return;
        // if there is an invalid token error, clear login session as its no longer valid
        const store = useSessionStore();
        store.clear();

        // check if auth heavy page, if it is then we should redirect to login
        const route = useRoute();
        if (route.meta.needsAuth) {
          const { login } = useLogin();
          login();
        }
      }
    }
  });

  const link = from([errorLink, authLink, httpLink]);

  const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  provideApolloClient(apolloClient);
  nuxtApp.provide('apollo', { DefaultApolloClient, apolloClient });
});
