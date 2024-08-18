import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import EducationPage from './components/Pages/EducationPage.vue';
import ExperiencePage from './components/Pages/ExperiencePage.vue';
import HomePage from './components/Pages/HomePage.vue';
import SkillsPage from './components/Pages/SkillsPage.vue';

export const routes = [
  { path: '/', component: HomePage, label: 'Home' },
  { path: '/education', component: EducationPage, label: 'Education' },
  { path: '/experience', component: ExperiencePage, label: 'Experience' },
  { path: '/skills', component: SkillsPage, label: 'Skills' },
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
