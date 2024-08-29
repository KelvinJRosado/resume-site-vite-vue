<script setup lang="ts">
import Button from 'primevue/button';
defineProps<{ displayText: string; link: string }>();
</script>

<template>
  <div rounded outlined class="card flex justify-center">
    <Button
      as="a"
      :label="displayText"
      :href="link"
      target="_blank"
      rel="noopener"
    >
    </Button>
  </div>
</template>
