<template>
  <div class="main">
    <h1 class="tags-header">Todo List</h1>
    <div class="tags">
      <div v-for="(todo, index) in todos" :key="index" class="tag article">
        <span>{{ todo }}</span>
        <span class="fas-icon" @click="removeTodo(index)">
          <!-- Font Awesome icon for remove -->
          <!-- Assuming you have the font-awesome library -->
          X
        </span>
      </div>
    </div>
    <div class="save">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        class="tag article"
        placeholder="Add new todo..."
      />
      <button
      @click="addTodo"
      >保存</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";

const storageKey = "todos";
const todos = reactive(JSON.parse(window.localStorage.getItem(storageKey)) || []);
let newTodo = "";

const addTodo = () => {
  if (newTodo.trim() !== "") {
    todos.push(newTodo.trim());
    newTodo = "";
    saveTodos();
  }
};

const removeTodo = (index) => {
  todos.splice(index, 1);
  saveTodos();
};

const saveTodos = () => {
  window.localStorage.setItem(storageKey, JSON.stringify(todos));
};

// Save todos to localStorage whenever todos change
onMounted(saveTodos);
</script>

<style scoped>
.main {
  margin: 0 auto;
  padding: 0.5rem 1.5rem 4rem;
  max-width: 48rem;
}
.tags-header {
  font-weight: bold;
  padding-bottom: 14px;
  font-size: 2.25em;
  margin-top: 24px;
}
.tags {
  margin-top: 14px;
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left; */

  border-bottom: 1px dashed #c7c7c7;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
.tag {
  display: inline-block;
  margin: 6px 8px;
  font-size: 0.85em;
  line-height: 25px;
  transition: 0.4s;
  color: #a1a1a1;
  cursor: pointer;
}
.tag:hover {
  color: var(--vp-c-hover);
}
.activetag {
  color: var(--vp-c-hover);
}
.tag-length {
  color: var(--vp-c-brand);
  font-size: 12px !important;
  position: relative;
  top: -8px;
}
.header {
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: left;
}
.fas-icon {
  width: 2rem;
  height: 2rem;
}
.header-text {
  padding-left: 10px;
}
.article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
  color: var(--vp-c-text-2);
  transition: border 0.3s ease, color 0.3s ease;
}
.article:hover {
  text-decoration: none;
  color: var(--vp-c-brand);
}
.date {
  font-family: Georgia, sans-serif;
}

.save {
  display: flex;
  align-items: center;
}
</style>
