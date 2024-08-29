<script setup lang="ts">
import Button from 'primevue/button';
defineProps<{ displayText: string; link: string; icon: string }>();
</script>

<template>
  <div class="card flex justify-center">
    <Button
      as="a"
      :label="displayText"
      :href="link"
      target="_blank"
      rel="noopener"
      text
      raised
      outlined
      rounded
      severity="contrast"
      :icon="icon"
    >
    </Button>
  </div>
</template>
