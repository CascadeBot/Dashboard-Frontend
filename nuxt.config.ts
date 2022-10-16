import eslint from 'vite-plugin-eslint';

const config = {
  // graphql endpoint, must NOT end with slash
  graphqlUrl: process.env.GRAPHQL_PATH || 'http://localhost:8081/graphql',
};
// base path, does not need rewriting behind a proxy, must end with slash
// process.env.NUXT_APP_BASE_URL

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
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      ...config,
    },
  },
});
