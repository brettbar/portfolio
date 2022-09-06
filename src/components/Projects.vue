<script setup lang="ts">

const projects = [
  {
    title: "Portfolio Site",
    desc: `
      This site itself! When designing a portfolio website, I wanted an approach that would demonstrate my relevant skillset but also show off how much I value
      functional, minimal, and quality software. I chose to combine my existing knowledge of the popular framework Vue but also explore the 
      potential performance gains that come with minimizing JavaScript sent to the client, using the new Astro framework.
    `,
    tags: [
      { label: 'Vue', img: "vue.png" },
      { label: 'Astro', img: "astro-logo.jpg" },
      { label: 'JavaScript', img: "js.png" },
    ]
  },
  {
    title: "2D Strategy Game",
    desc: `In my free time, I've been working on what I would consider my passion project, a 2D historical strategy game. My whole life I've 
      loved history, specifically Ancient and Medieval, and one of my favorite mediums to explore this interest has been video games. 
      My childhood was filled with games like the Total War games, Sid Meier's Civilization series, Paradox games, and many more.
      With this in mind coupled with my love of programming and CS, its no wonder I've found myself methodically creating a game of my own. 
      It's still quite early in production, but I have settled on the larger-game design and technologies involved. After years of searching
      for the 'perfect' engine that could meet all the constraints I wanted in my game, (Unity, Godot, Unreal, Bevy etc) I discovered that
      by far the best solution would be to ditch using a premade engine all together. Instead, I've opted for using a custom engine composed
      of several lower-level libraries. Among these are entt, a fantastic c++ ECS (entity component system) library used by Mojang (Minecraft),
      raylib, a eye-wateringly straightforward graphics/utility library that is the perfect tradeoff between simplicity and control. There are 
      several other smaller libraries I am exploring for things like serialization, but I'm not entirely set on those at the moment.
      I chose to pick a systems-level language (C), because I believe performance is one of the most important things in video games, and software 
      in general. I could have picked a garbage-collected language or engine, but for the constraints of my project that sacrifice in control
      and performance would be deterimental to what I wish to achieve.`,
    tags: [
      { label: 'C/C++', img: "c.png" },
      { label: 'raylib', img: "raylib.png" },
      { label: 'entt', img: "c++.png" },
      { label: 'OpenGL/GLSL', img: "opengl.png" },
      { label: 'python', img: "python.png" },
    ]
  },
];

</script>

<template>
  <section>
    <div class="card" v-for="project in projects">
      <h1>{{ project.title }}</h1>
      <br>

      <div class="content">
        <!-- <img src="game.png" /> -->
        <p>
          {{ project.desc }}
        </p>
      </div>
      <br>

      <div class="tags">
        tags:
        <div class="tag" v-for="tag in project.tags">
          <span>{{ tag.label }}</span>
          <img :src="tag.img" />
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  div.card {
    max-width: 50%;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid #ffa150;
    border-radius: 5px;

    h1 {
      border-bottom: 1px solid white;
    }


    div.tags {
      display: flex;
      align-items: center;

      div.tag {
        display: flex;
        align-items: center;
        background-color: #222222;
        padding: 8px;
        height: 30px;
        border-radius: 5px;
        margin: 0.25rem;

        img {
          width: 30px;
          height: 30px;
          border-radius: 5px;
          margin-left: 6px;
        }
      }
    }

  }
}
</style>
