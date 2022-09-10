<script setup lang="ts">
import TagVue from './Tag.vue';
import type { Job } from '../interfaces/Job';

defineProps<{
  job: Job,
}>();

</script>
<template>
  <section class="job">
    <div class="banner">
      <div class="header">
        <h1>
          {{ job.place }}
          <span>({{ job.time }})</span>
        </h1>

        <img :src="job.logo" alt="">
      </div>
    </div>

    <div v-for="role in job.roles">
      <div class="subheader">
        <h3>{{ role.title }}</h3>
        <h4>| {{ role.time }}</h4>
        <h4>| {{ role.location }}</h4>
      </div>

      <h4>{{ role.description }}</h4>

      <ul>
        <li v-for="duty in role.duties">
          <div class="duty">
            <p class="duty-desc">{{ duty.description }}</p>

            <div class="tags">
              <TagVue v-for="lang in duty.languages" :tag="lang" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.job {
  border: 2px solid #ffa140;
  border-radius: 5px;
  padding: 1rem;
  padding-top: 0.5rem;
  margin: 1rem;
  width: 40%;

  div.banner {
    div.header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        span {
          font-size: 16px;
        }
      }

      img {
        width: 80px;
        height: 80px;
        border-radius: 5px;
      }
    }

  }

  div.subheader {
    * {
      margin: 0;
    }
  }

  ul {
    border-left: 1px solid white;

    li {

      div.duty {
        display: flex;
        justify-content: space-between;
        align-items: center;



        div.tags {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>


