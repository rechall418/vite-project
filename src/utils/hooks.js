// src/utils/hooks.js

import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
  // 创建响应式数据用于存储鼠标位置
  const x = ref(0);
  const y = ref(0);

  // 更新鼠标位置的函数
  const updateMouse = (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
  };

  // 添加事件监听器
  onMounted(() => {
    window.addEventListener('mousemove', updateMouse);
  });

  // 移除事件监听器
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMouse);
  });

  // 返回鼠标位置
  return { x, y };
}
