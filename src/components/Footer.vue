<script setup lang="ts">
import TagVue from './Tag.vue';
</script>


<template>
  <footer class="contact">
    <p>Contact Me:</p>
    <span>
      brettbarinaga@gmail.com
    </span>

    <a href="https://github.com/brettbar">
      <TagVue tag="GitHub" />
    </a>

    <a href="https://www.linkedin.com/in/brett-barinaga/">
      <TagVue tag="LinkedIn" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer.contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 650px;

  background-color: black;
  border: 2px solid #ffa140;
  border-radius: 5px;
  padding: 8px;

  p {
    width: max-content;
  }

  span {
    background-color: #222222;
    padding: 10px;
    border-radius: 5px;
    margin: 8px;
  }

  a {
    color: white;
  }
}
</style>


