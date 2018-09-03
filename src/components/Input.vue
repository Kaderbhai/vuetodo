<template>
  <div>
    <input v-model="todo" placeholder="Touch me" >
    <p>To Do list:{{todo}}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: function() {
    let todo = ''
    return {
      todo : todo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
