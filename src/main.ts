import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.errorHandler = (err) => {
  /* handle error */
  console.error((err as Error).message);
};

app.mount('#app');
