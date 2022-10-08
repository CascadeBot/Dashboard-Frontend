import eslint from 'vite-plugin-eslint';

const config = {
  // graphql endpoint, must NOT end with slash
  graphqlUrl: process.env.GRAPHQL_PATH || 'http://localhost:8081/graphql',
};

export default defineNuxtConfig({
  ssr: false, // fetching only called on client
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
      '@apollo/client/core',
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
