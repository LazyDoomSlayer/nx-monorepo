<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
import { BaseDialog, BaseInput } from '@org/ui';

import * as JsSIP from '@org/jssip-snapshot';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('JsSIP', JsSIP);
});
</script>

<template>
  <header>
    <BaseDialog />
    <BaseInput />

    <nav>
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/about">
        About
      </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
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
