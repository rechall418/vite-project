<script setup>
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useMouse } from './utils/hooks';

// 定义初始类型
const type = ref('');

// 定义导航按钮数据
const navItems = ref([
  { name: 'List', route: '/list' },
  { name: 'Hello', route: '/hello' },
]);
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


