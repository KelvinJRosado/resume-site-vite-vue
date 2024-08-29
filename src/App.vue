<script setup lang="ts">
import { ref } from 'vue';
import { MenuItem } from 'primevue/menuitem';
import PageHeader from './components/PageHeader.vue';
import { routes } from './main';
import Menubar from 'primevue/menubar';
import { PrimeIcons } from '@primevue/core/api';

// Construct MenuItem array from routes
const menuItemsPre: MenuItem[] = [];
routes.forEach((item) => {
  menuItemsPre.push({
    label: item.name?.toString(),
    icon: PrimeIcons.ANDROID,
    route: item.path,
  });
});

const menuItems = ref(menuItemsPre);
</script>

<template>
  <PageHeader></PageHeader>
  <Menubar :model="menuItems">
    <template #item="{ item, props }">
      <RouterLink v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </RouterLink>
    </template>
  </Menubar>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
