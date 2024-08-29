<script setup lang="ts">
import ContactButton from './ContactButton.vue';
import Button from 'primevue/button';

import { PrimeIcons } from '@primevue/core/api';

const contactButtons = [
  {
    displayText: 'Email',
    link: 'mailto:kelvin.rosado.ayala@gmail.com',
  },
  {
    displayText: 'LinkedIn',
    link: 'https://linkedin.com/in/kelvin-rosado',
  },
  {
    displayText: 'GitHub',
    link: 'https://github.com/KelvinJRosado',
  },
  {
    displayText: 'GitLab',
    link: 'https://gitlab.com/KelvinRosado',
  },
];

const toggleDarkMode = () => {
  const element = document.querySelector('html');
  element?.classList.toggle('my-app-dark');
};
</script>

<template>
  <div class="page-header">
    <h1 class="centered-row">Kelvin Rosado - Lead Software Engineer</h1>
    <div class="centered-row">
      <ContactButton
        v-for="button in contactButtons"
        :key="button.displayText"
        :displayText="button.displayText"
        :link="button.link"
      ></ContactButton>
      <Button
        :icon="PrimeIcons.MOON"
        label="Toggle Dark Mode"
        @click="toggleDarkMode()"
      ></Button>
      <i class="pi pi-amazon"></i>
      <i class="pi pi-times"></i>
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
