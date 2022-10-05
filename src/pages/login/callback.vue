<template>
  <div>
    <p>Hello world from login flow</p>
    <p>Token: {{ token }}</p>
    <p>redirect: {{ redirect }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'loading',
});
const { token, redirect } = useRoute().query;
// TODO store token and redirect
// TODO validate redirect
</script>
