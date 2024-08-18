<script setup lang="ts">
import AccordionMenu from '../AccordionMenu.vue';

const accordionItems = [
  {
    id: 1,
    title: 'M.S Computer Science - Georgia Institute of Technology (2021)',
    listContent: [
      'Specialization in Interactive Intelligence',
      'Part-time student while working full-time',
      '3.8 GPA',
    ],
    isOpen: false,
  },
  {
    id: 2,
    title: 'B.S Computer Science - Georgia Southern University (2018)',
    listContent: [
      'Univeristy Honors Program graduate',
      'Software Engineering and Game Programming certificates',
      'Computer Science Student of the Year 2018',
      '3.89 GPA',
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
