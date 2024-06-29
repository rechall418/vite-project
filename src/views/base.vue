<template>
<h1 :class="'text-'+age" class="font-size-20">
  {{ name }}-{{ age === 16 ?'少年':'成年人' }}-{{ sex(0)}}
</h1>
<h1 v-bind="obj"> {{ name }}-{{ age === 16 ?'少年':'成年人' }}-{{ sex(0)}}</h1>
<h1 v-if="hasmore">墨雨云间加更</h1>
<h1 v-if="hasmore">{{state.name}}-{{state.age}}-{{state.sex}}</h1>
<h1 v-else>墨雨云间不加更。</h1>
<button @click="ismore">疑问</button>
<button @click="change">切换</button>

<h1 :class="{ active: isActive }">ks</h1>
<button @click="isActive = !isActive">选中ks的颜色</button>

<h1 :style="{color:font}"></h1>
<div v-if="type===1">1</div>
<div v-else-if="type===2">2</div>
<div v-else-if="type===3">3</div>
<div v-else="type===4">4</div>
</template>

<script setup>
import { ref } from 'vue';
const name='cc';
const age=16;
function sex(sex){
  return sex==1?'男':'女';
}

const obj ={
class:'text-18',
id:'font-size-24'
};

const hasmore = ref(false);

function ismore(){
  alert('到底更不更')
}

const change=()=>{
  isActive.value = !isActive.value;
  console.log(hasmore)
  state.age=17;
  console.log(state);
}

const state = reactive({
  name:'lrq',
  age:'16',
  sex:'n'
})

console.log(state)
const isActive = ref(false);
</script>

<style scoped>
.text-16{
  color: aqua;
}
.text-18{
  color: rosybrown;
}
.font-size-20{
  font-size: 10px;
}
.isActive{
color: blueviolet;
}
.active{
color:blue;
}
</style>