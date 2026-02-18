<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
import { BaseDialog, BaseInput } from '@org/ui';

import { ApiResult, Id, LoadingState, Paginated } from '@org/shared/types';
import {
  APP_NAME,
  APP_VERSION,
  STORAGE_KEYS,
  UI_TIMEOUTS,
} from '@org/shared/constants';
import {
  capitalize,
  deepClone,
  isEmptyObject,
  sleep,
  truncate,
} from '@org/shared/utils';
import { getAppConfig } from '@org/shared/config';

import * as JsSIP from '@org/jssip-snapshot';
import { onMounted } from 'vue';

type User = {
  id: Id;
  name: string;
  email: string;
};

const mockUser: User = {
  id: 'user-1' as Id,
  name: 'Lazy Doom Slayer',
  email: 'lazy@example.com',
};

type AnotherUser = {
  id: Id;
  name: string;
};

const mockPaginatedUsers: Paginated<AnotherUser> = {
  items: [
    { id: '1' as Id, name: 'Alice' },
    { id: '2' as Id, name: 'Bob' },
  ],
  total: 2,
  page: 1,
  pageSize: 10,
};

const mockSuccess: ApiResult<string> = {
  ok: true,
  data: 'Operation completed',
};

let state: LoadingState = LoadingState.Idle;

state = LoadingState.Loading;

state = LoadingState.Success;

state = LoadingState.Error;

const config = getAppConfig();

onMounted(async () => {
  console.log('JsSIP', JsSIP);
  console.log('mockUser', mockUser);
  console.log('mockPaginatedUsers', mockPaginatedUsers);
  console.log('mockSuccess', mockSuccess);
  console.log('state', state);

  console.log(APP_NAME);
  console.log(APP_VERSION);
  console.log(STORAGE_KEYS.accessToken);
  console.log(UI_TIMEOUTS.snackbar);

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
    <BaseDialog />
    <BaseInput />

    <nav>
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/about"> About </RouterLink>
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
