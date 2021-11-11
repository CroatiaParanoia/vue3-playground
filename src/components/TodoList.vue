<script setup lang="ts">
import { ref } from 'vue'
import useTodoList from './../hooks/useTodoList'


const { handleAddItem, inputValue, todoList, deleteTodoItem } = useTodoList()

</script>


<template>
  <div class="container">
    <div>
      <input type="text" v-model="inputValue" />

      <button @click="handleAddItem">添加</button>
    </div>

    <div v-for="item in todoList" :key="item.id">
      <span>{{ item.value }}</span>
      <button @click="deleteTodoItem(item.id)">删除</button>
    </div>
  </div>
</template>

