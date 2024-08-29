<script setup lang="ts">
import { ref } from 'vue';
import AccordionItem from './AccordionItem.vue';

const props = defineProps<{
  data: {
    id: number;
    title: string;
    content?: string;
    listContent?: string[];
    isOpen: boolean;
  }[];
}>();

const menuItems = ref(props.data);

const toggleItem = (id: number) => {
  const item = menuItems.value.find((it) => it.id === id);

  if (item) {
    const originalItemState = item?.isOpen; // Grab the original state of the item

    // Close all other items
    menuItems.value.forEach((it) => {
      it.isOpen = false;
    });

    // Set the desired item state
    item.isOpen = !originalItemState;
  }
};
</script>

<template>
  <main>
    <div class="accordion">
      <AccordionItem
        v-for="item in menuItems"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :content="item.content"
        :listContent="item.listContent"
        :isOpen="item.isOpen"
        @toggleItem="toggleItem"
      ></AccordionItem>
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 500px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
  padding: 10px;
  border-radius: 6px;
  .accordion {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
