<script setup lang="ts">
import TagVue from './Tag.vue';
</script>


<template>
  <footer class="contact">
    <span>
      brettbarinaga@gmail.com
    </span>

    <a href="https://github.com/brettbar">
      <TagVue tag="GitHub" />
    </a>

    <a href="https://www.linkedin.com/in/brett-barinaga/">
      <TagVue tag="Linkedin" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer.contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;

  background-color: black;


  span {
    background-color: #222222;
    padding: 8px;
    border-radius: 5px;
    margin: 8px;
  }

  a {
    color: white;
  }
}
</style>


