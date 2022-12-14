---
layout: '../../layouts/project-layout.astro'
title: '2D Strategy Game'
tags: ['C/C++', 'raylib', 'entt', 'OpenGL/GLSL', 'python']
---

&emsp;In my free time, I've been working on what I would consider my passion
project, a 2D historical strategy game. My whole life I've loved history,
specifically Ancient and Medieval, and one of my favorite mediums to explore
this interest has been video games. It's still quite early in production, but I have settled on the
larger-game design and technologies involved. 

 &emsp;After years of searching for the 'perfect' engine that could meet all
 the constraints I wanted in my game, (Unity, Godot, Unreal, Bevy etc) I
 discovered that by far the best solution would be to ditch using a premade
 engine all together. Instead, I've opted for using a custom engine composed of
 several lower-level libraries. Among these are entt, a fantastic c++ ECS
 (entity component system) library used by Mojang (Minecraft), raylib, a
 straightforward graphics/utility library that is the perfect tradeoff between
 simplicity and control. 

&emsp;I chose to pick a systems-level language (C),
because I believe performance is one of the most important things in video
games, and software in general. I could have picked a garbage-collected
language or engine, but for the constraints of my project that sacrifice in
control and performance would be deterimental to what I wish to achieve.


