import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import EducationPage from './components/Pages/EducationPage.vue';
import ExperiencePage from './components/Pages/ExperiencePage.vue';
import HomePage from './components/Pages/HomePage.vue';
import SkillsPage from './components/Pages/SkillsPage.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import { PrimeIcons } from '@primevue/core/api';

const basePath = '/resume-site-vite-vue';

export const routes = [
  { path: '/', component: HomePage, name: 'Home', icon: PrimeIcons.HOME },
  {
    path: '/education',
    component: EducationPage,
    name: 'Education',
    icon: PrimeIcons.STAR,
  },
  {
    path: '/experience',
    component: ExperiencePage,
    name: 'Experience',
    icon: PrimeIcons.BRIEFCASE,
  },
  {
    path: '/skills',
    component: SkillsPage,
    name: 'Skills',
    icon: PrimeIcons.USERS,
  },
];

const router = createRouter({
  history: createWebHistory(basePath),
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
    ripple: true,
  },
});

app.mount('#app');
