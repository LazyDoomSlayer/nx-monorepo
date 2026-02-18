import App from './app/App.vue';

import './styles.scss';

import router from './router';
import { createApp } from 'vue';
import { vuetify } from '@org/ui';

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#root');
