
<template>
<h1>商品价格计算器</h1>
<p>原始价格: {{ originalPrice }}</p >
<input type="number" v-model="originalPrice" placeholder="输入原始价格" />
<p>折扣率 (%): {{ discountRate }}</p >
<input type="number" v-model="discountRate" placeholder="输入折扣率" />
<p>最终价格: {{ finalPrice }}</p >
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
    
// 定义原始价格和折扣率的响应式引用
const originalPrice = ref(100);
const discountRate = ref(10);
    
// 计算最终价格的计算属性
 const finalPrice = computed(() => {
 const discount = (originalPrice.value * discountRate.value) / 100;
 return originalPrice.value - discount;
   });
</script>
    
<style scoped>
    
</style>
    