<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';

import { getAppConfig } from '@org/shared/config';
import { onMounted } from 'vue';
import { capitalize, deepClone, isEmptyObject, sleep, truncate } from '@org/shared/utils';

const config = getAppConfig();

onMounted(async () => {
  console.log(capitalize('lazydoomslayer'));
  console.log(truncate('Very long string example', 10));

  await sleep(500);

  console.log(isEmptyObject({}));
  console.log(deepClone({ a: 1 }));

  console.log(config.env);
  console.log(config.apiBaseUrl);
});
</script>

<template>
  <header>
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
