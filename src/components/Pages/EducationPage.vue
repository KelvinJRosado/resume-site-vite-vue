<script setup lang="ts">
import AccordionMenu from '../AccordionMenu.vue';

const accordionItems = [
  {
    id: 1,
    title: 'M.S Computer Science - Georgia Institute of Technology (2021)',
    content: 'Enter grad info here',
    isOpen: false,
  },
  {
    id: 2,
    title: 'B.S Computer Science - Georgia Southern University (2018)',
    content: 'Enter undergrad info here',
    isOpen: false,
  },
];
</script>

<template>
  <h1>Hello from Education!</h1>
  <AccordionMenu :data="accordionItems"></AccordionMenu>
</template>

<style scoped></style>
