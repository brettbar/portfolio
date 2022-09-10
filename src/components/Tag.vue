<script setup lang="ts">
import { imageLookup } from '../image-lookup';

defineProps<{
  tag: string;
}>();
</script>

<template>
  <div>
    <div class="tag">
      <span>{{ tag }}</span>
      <img :src="imageLookup(tag)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.tag {
  display: flex;
  align-items: center;
  background-color: #222222;
  padding: 4px;
  border-radius: 5px;
  margin: 4px;
  width: min-content;

  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-left: 6px;
  }
}
</style>
