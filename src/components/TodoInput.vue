<template>
  <div id="todoInput">
    <md-field md-inline>
      <label>What do you need to do?</label>
      <md-input v-model="todoText" @keyup.enter="addTodoItem"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" @click="addTodoItem">Add</md-button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data: function() {
    let todoText = ''
    return {
      todoText : todoText
    }
  },
  methods: {
    addTodoItem: function () {
      if(this.todoText)
      this.$emit('add-todo-item',
      {
        todoText: this.todoText,
        done: false
      });
      this.todoText = ''
    }
  }
}
</script>

<style scoped>
  #todoInput {
    display: flex;
  }

  #todoInput .md-field {
    flex-grow: 1;
    margin-right: 30px;
  }

  #todoInput button {
    line-height: 24px;
  }
</style>
