<script setup lang="ts">
import { AccordionItem } from '../../types';
import AccordionMenu from '../AccordionMenu.vue';

const skillItems: AccordionItem[] = [
  {
    id: 1,
    title: 'Languages',
    listContent: [
      'JavaScript / TypeScript / Node',
      'Python',
      'Java',
      'Terraform',
      'Bash',
    ],
    isOpen: false,
  },
  {
    id: 2,
    title: 'Cloud Platforms',
    listContent: ['AWS', 'Microsoft Entra', 'Azure'],
    isOpen: false,
  },
  {
    id: 3,
    title: 'Technologies',
    listContent: [
      'Docker',
      'Kubernetes',
      'Git (GitHub / GitLab)',
      'REST APIs',
      'Windows',
      'Linux',
    ],
    isOpen: false,
  },
  {
    id: 4,
    title: 'Engineering Practices',
    listContent: ['Agile', 'Scrum', 'Kanban', 'TDD', 'Remote Collaboration'],
    isOpen: false,
  },
];
</script>

<template>
  <AccordionMenu :data="skillItems"></AccordionMenu>
</template>

<style scoped></style>
