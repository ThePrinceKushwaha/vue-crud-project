<script setup>

import { ref, onMounted } from 'vue';

const name = ref('Prince Singh');
const status = ref('active');
const tasks = ref(['task one', 'task 2', 'task3', 'task4']);
const newTask = ref('');


const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

const toggleStatus = () => {

  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};


onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title)
  } catch (error) {
    console.log(error);
  }
})
</script>




<template>
  <h2>{{ name }}</h2>
  <p v-if="status === 'active'">use is active</p>
  <p v-else-if="status === 'pending'">user is pending</p>
  <p v-else>User is inactive</p>
  <!-- <a :href="link">Google Link</a> -->



  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask" />
    <button type="submit">Submit</button>

  </form>
  <h2>Tasks</h2>

  <p v-for="(task, index) in tasks" :key="task">
    <span>{{ task }}</span>
    <button @click="deleteTask(index)">delete</button>
  </p>

  <!-- <button v-on:click="toggleStatus">change status</button> -->
  <button v-on:click="toggleStatus">Change status</button>
</template>
