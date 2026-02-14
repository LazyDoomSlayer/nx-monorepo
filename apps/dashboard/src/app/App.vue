<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import * as JsSIP from '@org/jssip-snapshot';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('JsSIP', JsSIP);
});
</script>

<template>
  <header>
    <v-btn :loading="true">Here is the vuetify button</v-btn>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-width: 100vw;
}

nav > a {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
