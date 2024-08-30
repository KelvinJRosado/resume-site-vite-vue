<script setup lang="ts">
import ContactButton from './ContactButton.vue';
import Button from 'primevue/button';

import { PrimeIcons } from '@primevue/core/api';

const contactButtons = [
  {
    displayText: 'Email',
    link: 'mailto:kelvin.rosado.ayala@gmail.com',
    icon: PrimeIcons.ENVELOPE,
  },
  {
    displayText: 'LinkedIn',
    link: 'https://linkedin.com/in/kelvin-rosado',
    icon: PrimeIcons.LINKEDIN,
  },
  {
    displayText: 'GitHub',
    link: 'https://github.com/KelvinJRosado',
    icon: PrimeIcons.GITHUB,
  },
  {
    displayText: 'GitLab',
    link: 'https://gitlab.com/KelvinRosado',
    icon: PrimeIcons.CODE,
  },
];

const toggleDarkMode = () => {
  const element = document.querySelector('html');
  element?.classList.toggle('my-app-dark');

  // Change dark mode button icon from moon to sun, or vice versa
  const moon = document.querySelector('.pi-moon');

  if (moon) {
    moon.classList.remove('pi-moon');
    moon.classList.add('pi-sun');
    return;
  }

  const sun = document.querySelector('.pi-sun');

  if (sun) {
    sun.classList.remove('pi-sun');
    sun.classList.add('pi-moon');
  }
};
</script>

<template>
  <div class="page-header">
    <h1 class="centered-row">Kelvin Rosado - Lead Software Engineer</h1>
    <div class="centered-row">
      <Button
        :icon="PrimeIcons.MOON"
        label="Dark Mode"
        @click="toggleDarkMode()"
      ></Button>
      <ContactButton
        v-for="button in contactButtons"
        :key="button.displayText"
        :displayText="button.displayText"
        :link="button.link"
        :icon="button.icon"
      ></ContactButton>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.centered-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
</style>
