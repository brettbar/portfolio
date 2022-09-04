<script setup lang="ts">

const projects = [
  { title: "Portfolio Site", desc: "This site itself!" },
  { title: "2D Strategy Game", desc: "" },
];

</script>

<template>
  <section>
    <div v-for="project in projects">
      {{ project.title }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  color: white;

  div {}
}
</style>
