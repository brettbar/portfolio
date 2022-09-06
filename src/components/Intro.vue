<script setup></script>

<template>

  <section>
    <img src="me.png" />
    <div>
      <h1>hi, i'm brett -
        welcome to my portfolio site
      </h1>

      <ul>
        <li>
          <h2>what you'll find here:</h2>
        </li>
        <li>
          <span>projects</span>
          - what i've worked on in the past, and what i'm up to lately
        </li>
        <li>
          <span>experience</span>
          - a brief overview of my professional experience and education
        </li>
        <li>
          <span>about me</span>
          - who i am and what i'm passionate about
        </li>
        <li>
          <span>projects</span>
          - how to get ahold of me
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
  color: white;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 5px;
  width: max-content;

  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  img {
    border-radius: 50%;
    margin: 4rem;
    width: 50%;
  }

  div {
    border: 2px solid #ffa150;
    padding: 1rem;

    * {
      padding: 0.25rem;
    }

    h1 {
      border-bottom: 1px solid white;
    }

    ul {
      list-style: none;

      li {
        span {
          font-weight: bold;
        }
      }
    }
  }


}
</style>
