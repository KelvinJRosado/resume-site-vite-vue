<script setup lang="ts">
import ContactButton from './ContactButton.vue';

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
