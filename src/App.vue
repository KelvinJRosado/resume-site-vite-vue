<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
import { routes } from './main';
import Toolbar from 'primevue/toolbar';
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
</script>

<template>
  <PageHeader></PageHeader>
  <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
      <div class="flex items-center gap-2">
        <Button
          v-for="route in routes"
          :key="route.name"
          :as="RouterLink"
          :label="route.name"
          :to="route.path"
          :class="'nav-button'"
          :active-class="'active'"
          :icon="route.icon"
          text
          raised
          outlined
        ></Button>
      </div>
    </template>
  </Toolbar>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.active {
  background-color: #0f78a2;
  border-color: #0f78a2;
  border-radius: 4px;
  color: white;
  pointer-events: none;
}
</style>
