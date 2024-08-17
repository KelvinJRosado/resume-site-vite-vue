import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import EducationPage from './components/Pages/EducationPage.vue';
import ExperiencePage from './components/Pages/ExperiencePage.vue';
import HomePage from './components/Pages/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/education', component: EducationPage },
  { path: '/experience', component: ExperiencePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.config.errorHandler = (err) => {
  /* handle error */
  console.error((err as Error).message);
};

app.use(router);
app.mount('#app');
