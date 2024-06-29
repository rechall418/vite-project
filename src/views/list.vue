<template>
    <div class="list-comp">
        <h1 class="text-center text-3xl font-bold mb-6">同学列表</h1>
        <div class="tool-bar flex justify-end mb-6">
            <button @click="showflag=true; isEdit=false" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                新增</button>
        </div>
        <ul class="px-6">
            <li class="flex items-center mb-2 bg-gray-200 py-2">
                <span class="w-1/6 text-center font-bold">序号</span>
                <span class="w-1/6 text-center font-bold">学号</span>
                <span class="w-1/6 text-center font-bold">姓名</span>
                <span class="w-1/6 text-center font-bold">年龄</span>
                <span class="flex-grow text-center font-bold">操作</span>
            </li>
            <li v-for="(item, index) in studentStore.studentList" :key="item.id" class="flex items-center mb-2">
                <span class="w-1/6 text-center">{{ index + 1 }}.</span>
                <span class="w-1/6 text-center">{{ item.id }}</span>
                <span class="w-1/6 text-center">{{ item.userName }}</span>
                <span class="w-1/6 text-center">{{ item.age }}</span>
                <div class="flex-grow flex justify-around">
                    <button @click="deleteUser(index)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                        删除</button>
                    <button @click="editUser(index)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
                        编辑</button>
                    <button @click="getYourName(item.id)" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded">
                        问名</button>
                </div>
            </li>
        </ul>
        <div v-if="showflag" class="popblank bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 class="text-xl font-bold mb-4">{{ isEdit ? '编辑同学' : '新增同学' }}</h3>
            <div class="flex flex-col space-y-4">
                <div class="flex items-center">
                    <span class="w-1/6">学号</span>
                    <input type="text" v-model="studynum" class="flex-grow h-10 px-4 border rounded">
                </div>
                <div class="flex items-center">
                    <span class="w-1/6">姓名</span>
                    <input type="text" v-model="stuname" class="flex-grow h-10 px-4 border rounded">
                </div>
                <div class="flex items-center">
                    <span class="w-1/6">年龄</span>
                    <input type="text" v-model="stunage" class="flex-grow h-10 px-4 border rounded">
                </div>
            </div>
            <div class="flex justify-end mt-4">
                <button @click="showflag=false" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    取消</button>
                <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    确定</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStudentStore } from '../store/student';

const studentStore = useStudentStore();

let showflag = ref(false);
let isEdit = ref(false);
let curIdx = ref(0);

const studynum = ref('');
const stuname = ref('');
const stunage = ref('');

const deleteUser = (index) => {
    studentStore.deleteStudent(index);
}

const editUser = (index) => {
    isEdit.value = true;
    curIdx.value = index;
    const item = studentStore.studentList[index];
    studynum.value = item.id;
    stuname.value = item.userName;
    stunage.value = item.age;
    showflag.value = true;
}

const checklist = (code) => {
    return studentStore.studentList.some(item => Number(code) === item.id);
}

const addNum2name = (stuname) => {
    let newName = stuname;
    let count = 1;

    while (studentStore.studentList.some(item => item.userName === newName)) {
        newName = `${stuname}${count}`;
        count++;
    }

    return newName;
}

const isNum = (val) => {
    let exg = /^\d+$/;
    return exg.test(val);
}

const submit = () => {
    if (!isNum(studynum.value)) {
        alert('学号需要是纯数字');
        return;
    }
    if (checklist(studynum.value)) {
        alert('学号已存在');
        return;
    }

    const newName = addNum2name(stuname.value);

    if (isEdit.value) {
        studentStore.updateStudent(curIdx.value, {
            id: studynum.value,
            userName: newName,
            age: stunage.value
        });
    } else {
        studentStore.addStudent({
            id: studynum.value,
            userName: newName,
            age: stunage.value
        });
    }

    showflag.value = false;
    resetForm();
}

const resetForm = () => {
    studynum.value = '';
    stuname.value = '';
    stunage.value = '';
}
</script>



<style scoped>
.list-comp {
    text-align: left;
}
h1 {
    text-align: center;
}
.tool-bar {
    display: flex;
    justify-content: end;
    .add-btn {
        background-color: rgba(42, 46, 54, 0.48);
        color: #ffffff;
        width: 90px;
        margin-right: 24px;
    }
}
ul {
    padding-left: 0;
    padding: 0 24px;
    text-align: center;
}
.popblank {
    position: absolute;
    background-color: #ffffff;
    border-radius: 8px;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 50vh;
    transform: translate(-50%, -50%);
    padding: 24px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    h3 {
        text-align: center;
        margin-bottom: 24px;
    }
    .blank-body {
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .blank-item {
            height: 72px;
            font-size: 24px;
            display: flex;
            span {
                margin-right: 12px;
                width: 60px;
            }
            input {
                height: 36px;
                flex-grow: 1;
                flex-shrink: 1;
                font-size: 16px;
            }
        }
    }
    .footer {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        button {
            background-color: #1677FF;
            color: #ffffff;
        }
        & > button:nth-child(1) {
            margin-right: 12px;
            background-color: #ffffff;
            border: 1px solid #1677FF;
            color: #1677FF;
        }
    }
}
li {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 24px;
    height: 64px;
    border-bottom: 2px solid #ddd;
    &:nth-child(1) {
        background-color: gray;
        color: #fff;
    }
    .no {
        width: 18%;
    }
    .name {
        width: 18%;
    }
    .study-code {
        width: 18%;
    }
    .age {
        width: 18%;
    }
    .operation {
        flex-grow: 1;
        display: flex;
        justify-content: space-around;
        & > button {
            background-color: #314659;
            color: #ffffff;
            width: 90px;
        }
    }
}
</style>
