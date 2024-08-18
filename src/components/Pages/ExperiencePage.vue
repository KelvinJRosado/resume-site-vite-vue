<script setup lang="ts">
import { AccordionItem } from '../../types';
import AccordionMenu from '../AccordionMenu.vue';

const experienceItems: AccordionItem[] = [
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
      'Worked to develop APIs for internal eventing system',
      'Helped to develop a scalable and resilience event-driven architecture on AWS using services such as Lambda, SQS, SNS, and DynamoDB',
      'Used terraform as an IaC tool to deploy resources to AWS',
      'Developed and refined GitLab CI/CD Pipelines',
      'Implemented automated end-to-end integration testing for APIs to help catch bugs',
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
      'Deployed, maintained, and supported self-hosted CI/CD tools',
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
  <AccordionMenu :data="experienceItems"></AccordionMenu>
</template>

<style scoped></style>
