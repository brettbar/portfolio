<script setup lang="ts"></script>

<template>
  <div class="stars"></div>
  <div class="twinkling"></div>
</template>

<style>
* {
  margin: 0;
  padding: 0;

  font-family: 'JetBrains Mono', monospace;
  overflow-x: hidden;
}


@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

.stars,
.twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000 url(stars.png) repeat top center;
  z-index: -2;
}

.twinkling {
  background: transparent url(twinkling.png) repeat top center;
  z-index: -1;
  animation: move-twink-back 500s linear infinite;
}
</style>
