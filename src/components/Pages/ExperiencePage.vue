<script setup lang="ts">
import AccordionMenu from '../AccordionMenu.vue';

const accordionItems = [
  {
    id: 1,
    title: 'Lead Software Engineer - State Farm (June 2023 - Present)',
    listContent: [
      "Led team's effort to enable active-active availability for our APIs, leading to near-100% availability",
      "Led team's effort to create a GitLab CI/CD templates library, reducing time to make pipeline changes by over 50%",
    ],
    isOpen: false,
  },
  {
    id: 2,
    title: 'Software Engineer - State Farm (January 2020 - June 2023)',
    listContent: [
      'Worked to support APIs for internal eventing system',
      'Helped to develop a scalable and resilience event-driven architecture on AWS',
      'Developed and refined GitLab CI/CD Pipelines',
    ],
    isOpen: false,
  },
  {
    id: 3,
    title:
      'Junior DevOps Engineer - Dell Technologies (May 2018 - November 2019)',
    listContent: [
      'Used Ansible and Python to automatically deploy and configure servers',
      'Automated the deployment of virtual machines to vSphere through Ansible and Docker',
      'Used Node for backend development of an internal web app',
    ],
    isOpen: false,
  },
  {
    id: 4,
    title:
      'Undergraduate Research Assistant - Georgia Southern University Physics Department (August 2016 - May 2018)',
    listContent: [
      'Developer Fortran 95 programs to improve the speed of mathematical calculations',
      'Replicated Mathematica programs in Fortran to make the calculations more efficient',
    ],
    isOpen: false,
  },
];
</script>

<template>
  <h1>Hello from Experience!</h1>
  <AccordionMenu :data="accordionItems"></AccordionMenu>
</template>

<style scoped></style>
