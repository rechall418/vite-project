<template>
<h1>{{context }}</h1>
<button @click="">change</button>
<h1>{{state.username}}-{{state.age}}-{{state.sex}}</h1>
<button @click="state.username='fjc'">Change Username</button>
</template>

<script setup>
import {ref, onBeforeMount, onMounted,
    onBeforeUpdate, onUpdated ,
    onBeforeUnmount, onUnmounted,  
    watch,reactive,watchEffect} from 'vue';

const x = ref(0)
const y = ref(0)

const context=ref('null')

const state = reactive({
  username:'lrq',
  age:'16',
  sex:'n'
})

watch([x,y],([newX,newY],[oldX,oldY])=>{
    console.log('watch:',newX,newY,oldX,oldY)
})

watch(() => state.username, (newValue, oldValue) => {
  console.log('watch:', newValue, oldValue);
});

watchEffect( () => {
console.log('watchEffect:',state.username)
})

onBeforeMount(() => {
  console.log('1');
});

onMounted(() => {
  console.log('2');
});

watch(context,(newValue,oldValue)=>{
    console.log('watch:',newValue,oldValue)
})

onBeforeUpdate(() => {
    console.log('3组件即将更新，此时组件的状态已经更新，但是 DOM 还未重新渲染。');
  });

  onUpdated(() => {
    console.log('4组件已经更新，此时 DOM 已经更新，可以执行依赖于更新后 DOM 的操作。');
  });

  onBeforeUnmount(() => {
    console.log('5组件即将卸载，此时组件实例仍然存在。');
  });

  onUnmounted(() => {
    console.log('6组件已经卸载，此时组件实例已经被销毁。');
  });
</script>