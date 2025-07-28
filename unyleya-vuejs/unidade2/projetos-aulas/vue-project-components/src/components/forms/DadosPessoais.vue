<script setup>
import { ref } from 'vue';

const nome = ref(null);
const email = ref(null);
const senha = ref(null);
</script>

<template>
  <div>
    <input v-model="nome" placeholder="Nome">
    <input v-model="email" placeholder="Email">
    <input v-model="senha" placeholder="Senha">
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