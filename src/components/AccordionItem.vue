<script setup lang="ts">
const props = defineProps<{
  id: number;
  title: string;
  content?: string;
  listContent?: string[];
  isOpen: boolean;
}>();

const emit = defineEmits(['toggleItem']);

const handleClick = (id: number | unknown) => {
  emit('toggleItem', id);
};
</script>

<template>
  <div class="accordion-item">
    <div class="header" @click="handleClick(props.id)">
      <div class="title">
        {{ props.title }}
      </div>
      <div :class="['icon', { open: props.isOpen }]">
        <img src="../assets/chevron.svg" alt="chevron" />
      </div>
    </div>
    <div :class="['content', { open: isOpen }]">
      <p v-if="props.content">{{ props.content }}</p>
      <ul v-if="props.listContent">
        <li v-for="item in props.listContent" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.accordion-item {
  flex-grow: 1;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid antiquewhite;
    padding: 10px;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    .title {
      font-weight: 700;
    }
    .icon {
      width: 30px;
      height: 30px;
      transition: transform 0.5s;
      img {
        width: 100%;
        height: auto;
      }
      &.open {
        transform: rotate(180deg);
      }
    }
  }
  .content {
    height: 0;
    overflow-y: scroll;
    line-height: 1.5;
    background-color: antiquewhite;
    transition: height 0.5s;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      appearance: none;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: rgb(232, 210, 182);
      border-radius: 50px;
    }
    p {
      padding: 10px;
    }
    &.open {
      height: 200px;
    }
  }
}
</style>
