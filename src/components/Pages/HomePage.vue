<script setup lang="ts">
import ContactButton from '../ContactButton.vue';
import Button from 'primevue/button';
</script>

<template>
  <h1>Hello World!</h1>
  <ContactButton
    displayText="Sample"
    link="localhost"
    size="small"
  ></ContactButton>
  <Button label="Click me!" outlined size="large"></Button>
</template>

<style scoped></style>
