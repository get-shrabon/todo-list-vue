<script setup>
import todos from "./data";
import { ref } from "vue";

const newTodo = ref("");
const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.unshift({
      id: todos.length + 1,
      task: newTodo.value,
      status: "pending",
    });
    newTodo.value = "";
  }
};
const deleteTask = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
};

</script>

<template>
  <div class="w-[800px] p-10 mx-auto my-5 bg-white border border-slate-400 rounded-lg todo_wrapper">
    <h2 class="text-center text-3xl font-bold font-mono mb-5 first-letter:text-violet-700">
      Todo List with <span class="text-[#42b883]">Vue.js</span>
    </h2>

    <div class="flex border justify-between">
      <input v-model="newTodo" class="w-full p-3 outline-none border-none" type="text" placeholder="Add new todo" />
      <button @click="addTodo()" class="py-3 px-4 font-bold bg-violet-600 hover:bg-violet-700 duration-500 text-white"
        title="Add">
        Add
      </button>
    </div>
    <div v-for="data in todos" :key="data.id"
      class="flex items-center justify-between px-5 py-3 bg-violet-50 rounded-full my-3 todo">
      <div class="flex items-center">
        <input class="scale-125 cursor-pointer" type="checkbox" :id="data.id" v-model="data.done" />
        <label :class="{ 'line-through': data.done }" class="pl-3 cursor-pointer select-none" :for="data.id">{{
          data.task
          }}</label>
      </div>
      <button @click="deleteTask(data.id)" class="w-[25px]" title="Delete">
        <img class="w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.todo_wrapper .todo:nth-child(even) {
  background: #ece8fe;
}
</style>
