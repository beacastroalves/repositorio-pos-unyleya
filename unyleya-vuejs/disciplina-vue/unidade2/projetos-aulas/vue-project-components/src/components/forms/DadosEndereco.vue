<script setup>
import { ref } from 'vue';

const rua = ref(null);
const bairro = ref(null);
const cidade = ref(null);
</script>

<template>
  <div>
    <input v-model="rua" placeholder="Rua">
    <input v-model="bairro" placeholder="Bairro">
    <input v-model="cidade" placeholder="Cidade">
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