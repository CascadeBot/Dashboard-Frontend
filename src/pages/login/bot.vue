<template>
  <div>
    <p>Hello world from the bot</p>
    <p>Token: {{ token }}</p>
    <p>redirect: {{ redirect }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'loading',
});
const { token, redirect } = useRoute().query;
// TODO exchange token from session token
// TODO redirect to /login/callback with redirect and session token
</script>
