import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Notifications from '@kyvg/vue3-notification';
import './assets/css/global.css';

const app = createApp(App).use(router).use(Notifications).use(store).mount('#app');

