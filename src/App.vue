<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <PageHeader></PageHeader>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/education">Education</RouterLink>
  </nav>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
