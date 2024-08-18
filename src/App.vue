<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
import { routes } from './main';
</script>

<template>
  <PageHeader></PageHeader>
  <nav>
    <RouterLink
      v-for="route in routes"
      :key="route.label"
      :to="route.path"
      :class="'nav-button'"
      :active-class="'active'"
      >{{ route.label }}</RouterLink
    >
  </nav>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
<style scoped>
.nav-button {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  text-decoration: none;
  color: #333;
}

.active {
  background-color: #0f78a2;
  border-color: #0f78a2;
  border-radius: 4px;
  color: white;
  pointer-events: none;
}
</style>
