import eslint from 'vite-plugin-eslint';

const config = {
  // graphql endpoint, must NOT end with slash
  graphqlUrl: process.env.GRAPHQL_PATH || 'http://localhost:8081/graphql',
};

export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss'],
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
  runtimeConfig: {
    public: {
      ...config,
    },
  },
});
