// src/stores/student.js

import { defineStore } from 'pinia';

export const useStudentStore = defineStore('student', {
  state: () => ({
    studentList: [
      {
        id: 220812053,
        userName: '梁睿琦',
        age: 18
      },
      {
        id: 220812022,
        userName: 'lsw',
        age: 18
      },
      {
        id: 220812044,
        userName: '袁吴可闪',
        age: 18
      }
    ]
  }),
  actions: {
    addStudent(student) {
      this.studentList.unshift(student);
    },
    deleteStudent(index) {
      this.studentList.splice(index, 1);
    },
    updateStudent(index, student) {
      this.studentList[index] = student;
    }
  }
});
