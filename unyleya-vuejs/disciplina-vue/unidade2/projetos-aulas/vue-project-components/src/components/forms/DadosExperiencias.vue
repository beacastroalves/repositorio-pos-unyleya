<script setup>
import { ref } from 'vue';

const competencias = ref(null);
const formacao = ref(null);
const experiencias = ref(null);
</script>

<template>
  <div>
    <input v-model="competencias" placeholder="Competencias">
    <input v-model="formacao" placeholder="Formação">
    <input v-model="experiencias" placeholder="Experiências">
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

div > input {
  margin: 16px;
  padding: 16px;
}
</style>