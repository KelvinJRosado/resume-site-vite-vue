<script setup lang="ts">
defineProps<{ displayText: string; link: string }>();
</script>

<template>
  <button class="contact-button">
    <a :href="link" target="_blank">{{ displayText }}</a>
  </button>
</template>

<style scoped>
button {
  font-size: 24px;
  margin-bottom: 10px;
  border: 1px solid #333;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px; /* Add this line for rounded corners */
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
