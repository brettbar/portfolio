<script setup lang="ts">
</script>

<template>
  <section>
    <img src="me.png" />
    <div>
      <h1>Hi, I'm Brett -
        Welcome to my portfolio site
      </h1>
      <h2>What you'll find here:</h2>
      <ul>
        <li>
          <span>Home</span>
          - This page: Intro and how to contact me
        </li>
        <li>
          <span>Experience</span>
          - A brief overview of my professional experience and education
        </li>
        <li>
          <span>Projects</span>
          - What I've worked on in the past, and what I'm up to lately
        </li>
        <li>
          <span>Skills</span>
          - What I've learned and can bring to the table
        </li>
        <li>
          <span>About Me</span>
          - Who I am and what I'm passionate about
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: max-content;

  img {
    border-radius: 50%;
    margin: 4rem;
    width: 50%;
  }

  div {
    border: 2px solid #ffa140;
    padding: 1rem;

    h1 {
      border-bottom: 1px solid white;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 8px;

        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
