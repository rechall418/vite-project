<template>
<div class="welcome-page">
    <h1>{{ greeting }}</h1>
    <button @click="goToListPage" class="btn">查看学生列表</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const greeting = '欢迎来到学生列表页面';

const goToListPage = () => {
  router.push('/list');
};
</script>

<style scoped>
.welcome-page {
  text-align: center;
  margin: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  color: #333;
}
.btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>