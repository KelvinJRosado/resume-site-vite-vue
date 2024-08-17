<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <PageHeader></PageHeader>
  <nav>
    <RouterLink to="/" class="nav-button" active-class="active"
      >Home</RouterLink
    >
    <RouterLink to="/education" class="nav-button" active-class="active"
      >Education</RouterLink
    >
    <RouterLink to="/experience" class="nav-button" active-class="active"
      >Experience</RouterLink
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
  background-color: #ff7400;
  border-color: #ff7400;
  border-radius: 4px;
  color: white;
  pointer-events: none;
}
</style>
