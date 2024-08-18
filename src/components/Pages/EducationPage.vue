<script setup lang="ts">
import AccordionMenu from '../AccordionMenu.vue';

const accordionItems = [
  {
    id: 1,
    title: 'M.S Computer Science - Georgia Institute of Technology (2021)',
    listContent: [
      'Specialization in A.I',
      'Part-time student while working full-time',
    ],
    isOpen: false,
  },
  {
    id: 2,
    title: 'B.S Computer Science - Georgia Southern University (2018)',
    listContent: [
      'Univeristy Honors Program graduate',
      'Software Engineering certificate',
      'Computer Science Student of the Year 2018',
    ],
    isOpen: false,
  },
];
</script>

<template>
  <h1>Hello from Education!</h1>
  <AccordionMenu :data="accordionItems"></AccordionMenu>
</template>

<style scoped></style>
