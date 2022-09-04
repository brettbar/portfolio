<script setup lang="ts">

const props = defineProps<{ selectedPage: number }>();

const pages = [
  { route: '/', title: 'Home', },
  { route: '/projects', title: 'Projects', },
  { route: '/', title: 'Experience', },
  { route: '/', title: 'About Me', },
  { route: '/', title: 'Contact', },
]


const isSelected = (index: number): string => index === props.selectedPage ? 'selected-link' : '';
</script>

<template>
  <nav class="navbar">
    <a v-for="(page, index) in pages" :class="isSelected(index)" :href="page.route">
      <div>{{ page.title }}</div>
    </a>
  </nav>
</template>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: flex-end;
  transform: skew(-.312rad);

  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  a {
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    border: 2px solid #ffa150;

    text-decoration: none;
    color: white;

    div {
      transform: skew(.312rad);
    }
  }

  .selected-link {
    background-color: #ffa150;
  }
}
</style>
