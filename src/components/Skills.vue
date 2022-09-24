<script lang="ts" setup>
import Tag from '../components/Tag.vue';

defineProps<{
  title: string,
  skills: Array<{ name: string, level: number }>,
}>();

</script>

<template>
  <div class="rankings">
    <h1>{{ title }}</h1>
    <h2>Proficient</h2>
    <div class="tags">
      <Tag v-for="skill in skills.filter(s => s.level === 3)" :tag="skill.name" />
    </div>
    <h2>Familiar</h2>
    <div class="tags">
      <Tag v-for="skill in skills.filter(s => s.level === 2)" :tag="skill.name" />
    </div>
    <h2>Novice</h2>
    <div class="tags">
      <Tag v-for="skill in skills.filter(s => s.level === 1)" :tag="skill.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.rankings {
  border: 2px solid #ffa140;
  border-radius: 5px;
  padding: 1rem;
  padding-top: 0;
  margin: 1rem;
  max-width: 800px;
  min-width: 600px;

  div.tags {
    display: flex;
  }
}
</style>
