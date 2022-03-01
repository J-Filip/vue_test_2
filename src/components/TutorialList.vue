<template>
  <h1>{{ msg || 'No prop given' }}</h1>
  <input v-model="newTodo" @keyup.enter="addTodo" />
  <button @click="addTodo">Add Todo</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.name }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<script setup> 
import { ref } from 'vue';

const props = defineProps({
  msg: String
});

// give each todo a unique id
let id = 0;

const newTodo = ref('');
const todos = ref([
  {
    id: id++,
    name: 'Filip',
  },
  {
    id: id++,
    name: 'Djoni',
    new: true,
  },
  {
    id: id++,
    name: 'Marica',
  },
]);

function addTodo() {
  todos.value.push({ id: id++, name: newTodo.value });
  newTodo.value = '';
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>
