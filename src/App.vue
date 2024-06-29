<script setup>
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useMouse } from './utils/hooks';

// 定义初始类型
const type = ref('Computed');
const message = ref('你好');

// 定义问候函数
function greet(event) {
  alert(`Hello ${type.value}!`);
  // `event` 是 DOM 原生事件
  if (event) {
    alert(message.value);
  }
}

// 定义导航按钮数据
const navItems = ref([
  { name: 'Computed', route: '/computed' },
  { name: 'List', route: '/list' },
  { name: 'Hello', route: '/hello' },
  { name: 'Form1', route: '/form1' },
  { name: 'Life', route: '/life' },
  { name: 'MouseTracker', route: '/mousetracker' }
]);

const { x, y } = useMouse();
// watch([x, y], ([newX, newY]) => {
//   console.log(`x is ${newX} and y is ${newY}`);
// }, { immediate: true });
</script>

<template>
  <div>
    <div class="buttons">
      <nav class="navbar"> 
        <button
          v-for="item in navItems"
          :key="item.name"
          :class="{ active: type === item.name }"
          @click="type = item.name"
        >
          <RouterLink :to="item.route">{{ item.name.toLowerCase() }}</RouterLink>
        </button>
      <!-- <button :class="{ active: type === 'Computed' }" @click="type = 'Computed'">
        <RouterLink to="/computed">computed</RouterLink>
      </button>
      <button :class="{ active: type === 'List' }" @click="type = 'List'">
        <RouterLink to="/list">list</RouterLink>
      </button>
      <button :class="{ active: type === 'Hello' }" @click="type = 'Hello'">
        <RouterLink to="/hello">hello</RouterLink>
      </button>
      <button :class="{ active: type === 'Form1' }" @click="type = 'Form1'">
        <RouterLink to="/form1">form1</RouterLink>
      </button>
      <button :class="{ active: type === 'Life' }" @click="type = 'Life'">
        <RouterLink to="/life">life</RouterLink>
      </button>
      <button :class="{ active: type === 'MouseTracker' }" @click="type = 'MouseTracker'">
        <RouterLink to="/life">MouseTracker</RouterLink>
      </button> -->
    </nav>

    

    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #ddd; /* 初始时无颜色的下边框 */
}

button {
  background: none;
  border: none;
  color: black;
  padding: 14px 20px;
  cursor: pointer;
  font-size: 17px;
}

button.active {
  color:#535bf2; /* 激活状态下文本颜色 */
}

button > a {
  color: inherit;
  text-decoration: none;
}
</style>


