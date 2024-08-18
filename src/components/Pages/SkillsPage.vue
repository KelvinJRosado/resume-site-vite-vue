<script setup lang="ts">
import { AccordionItem } from '../../types';
import AccordionMenu from '../AccordionMenu.vue';

const skillItems: AccordionItem[] = [
  {
    id: 1,
    title: 'Node / TypeScript',
    listContent: [],
    isOpen: false,
  },
];
</script>

<template>
  <h1>Hello from Skills!</h1>
  <AccordionMenu :data="skillItems"></AccordionMenu>
</template>

<style scoped></style>
