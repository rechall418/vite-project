<template>
    <input v-model="message" />
    <textarea v-model="message"></textarea>
  
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  
    <div></div>
  
    <input type="checkbox" id="jack1" value="jack" v-model="checkName" />
    <label for="jack1">jack</label>
  
    <input type="checkbox" id="john" value="john" v-model="checkName" />
    <label for="john">john</label>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const message = ref<string>('');
  const checked = ref<boolean>(false);
  const checkName = ref<string[]>([]);
  </script>
  
  <style scoped>
  </style>
  