<!-- src/views/MouseTracker.vue -->
<template>
    <div>
      <p>Mouse X: {{ x }}</p>
      <p>Mouse Y: {{ y }}</p>
    </div>
  </template>
  
  <script setup>
  import { useMouse } from '../utils/hooks';
  
  const { x, y } = useMouse();
  </script>
  
  <style scoped>

  </style>
  