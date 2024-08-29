<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
import { routes } from './main';
</script>

<template>
  <PageHeader></PageHeader>
  <nav>
    <template v-for="route in routes">
      <RouterLink
        v-if="!route.redirect"
        :key="route.name"
        :to="route.path"
        :class="'nav-button'"
        :active-class="'active'"
        >{{ route.name }}</RouterLink
      >
    </template>
  </nav>
  <main>
    <RouterView></RouterView>
  </main>
</template>

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
