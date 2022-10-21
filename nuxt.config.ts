import eslint from 'vite-plugin-eslint';

/*
* graphql endpoint, must NOT end with slash
NUXT_PUBLIC_GRAPHQL_URL

* base path, does not need rewriting behind a proxy, must end with slash
NUXT_APP_BASE_URL
*/

export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    plugins: [eslint()],
  },
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
      '@vue/apollo-composable',
    ],
  },
  imports: {
    dirs: ['composables/*/index.ts'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      graphqlUrl: 'http://localhost:8081/graphql',
    },
  },
});
