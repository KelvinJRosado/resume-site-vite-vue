<script setup lang="ts">
import { ref } from 'vue';
import AccordionItem from './AccordionItem.vue';

const accordionItems = ref([
  {
    id: 1,
    title: 'What is HTML?',
    content:
      'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages. It describes the structure of a Web page.',
    isOpen: false,
  },
  {
    id: 2,
    title: 'What is CSS?',
    content:
      'CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.',
    isOpen: false,
  },
  {
    id: 3,
    title: 'What is JavaScript?',
    content:
      'JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications.',
    isOpen: false,
  },
]);

const menuItems = ref(accordionItems);

const toggleItem = (id: number) => {
  const item = menuItems.value.find((it) => it.id === id);

  if (item) {
    const originalItemState = item?.isOpen; // Grab the original state of the item

    console.log('Original state: ', originalItemState);

    // Close all other items
    menuItems.value.forEach((it) => {
      it.isOpen = false;
    });

    // Set the desired item state
    item.isOpen = !originalItemState;

    console.log('New state: ', item.isOpen);
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
  background-color: rgb(240, 248, 255);
  padding: 10px;
  border-radius: 6px;
  .accordion {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
