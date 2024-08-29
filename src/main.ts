import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import EducationPage from './components/Pages/EducationPage.vue';
import ExperiencePage from './components/Pages/ExperiencePage.vue';
import HomePage from './components/Pages/HomePage.vue';
import SkillsPage from './components/Pages/SkillsPage.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import 'primeicons/primeicons.css';

const basePath = '/resume-site-vite-vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: { name: 'Home' } },
  { path: `${basePath}`, component: HomePage, name: 'Home' },
  {
    path: `${basePath}/education`,
    component: EducationPage,
    name: 'Education',
  },
  {
    path: `${basePath}/experience`,
    component: ExperiencePage,
    name: 'Experience',
  },
  { path: `${basePath}/skills`, component: SkillsPage, name: 'Skills' },
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

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
});

app.mount('#app');
