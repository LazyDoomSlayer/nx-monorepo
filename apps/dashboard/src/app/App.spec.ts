import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import router from '../router';
import App from './App.vue';

vi.mock('@org/ui', async () => {
  const { defineComponent, h } = await import('vue');

  const Stub = (name: string) =>
    defineComponent({
      name,
      setup: () => () => h('div', { 'data-stub': name }),
    });

  return {
    BaseDialog: Stub('BaseDialog'),
    BaseInput: Stub('BaseInput'),
  };
});

describe('App', () => {
  it('renders shell navigation', async () => {
    await router.push('/');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          RouterView: true,
        },
      },
    });

    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About');
  });
});
