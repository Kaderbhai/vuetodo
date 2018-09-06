<template>
  <div id="vuetodo">
    <img alt="VueTodo logo" src="./assets/logo.png">
    <TodoInput v-on:add-todo-item="handleAddTodoEvent"/>
    {{ todoData }}
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'vuetodo',
  components: {
    TodoInput
  },
  data: function() {
    return {
      todoData : []
    }
  },
  methods: {
    handleAddTodoEvent: function(todoItem) {
      this.todoData.push(todoItem)
    }
  }
}
</script>

<style>
#vuetodo {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
</style>
