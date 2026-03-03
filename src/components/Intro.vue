<script setup lang="ts">
</script>

<template>
  <section>
    <img src="/images/me.png" />
    <div>
      <h1>Hi, I'm Brett.
      </h1>
      <h2>
        Welcome to my portfolio site
      </h2>
      <p>
        Software Engineering Manager with nearly 6 years of experience building robust enterprise software. 
        Focused on strong technical fundamentals, systems design, leading teams of skilled engineers, 
        collaborating with business stakeholders and delivering valuable engineering solutions to clients.
      </p>
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

  img {
    border-radius: 50%;
    margin: 4rem;
    width: 50%;
    width: 200px;
  }

  div {
    border: 2px solid #ffa140;
    padding: 1rem;
    width: 500px;
    
  }
}
</style>
