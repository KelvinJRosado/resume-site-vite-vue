<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
import { routes } from './main';
import Toolbar from 'primevue/toolbar';
import { PrimeIcons } from '@primevue/core/api';
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
</script>

<template>
  <PageHeader></PageHeader>
  <Toolbar>
    <template v-for="route in routes" #start>
      <nav>
        <Button
          :as="RouterLink"
          :key="route.name"
          :label="route.name"
          :icon="PrimeIcons.CAR"
          :to="route.path"
          :class="'nav-button'"
          :active-class="'active'"
        ></Button>
      </nav>
    </template>
  </Toolbar>
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
