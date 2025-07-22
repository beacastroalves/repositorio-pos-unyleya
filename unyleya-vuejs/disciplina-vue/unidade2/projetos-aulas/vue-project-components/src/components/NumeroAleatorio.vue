<script setup>
import { ref } from 'vue';

const numAleatorio = ref(0);
const gerarNumAleatorio = () => {
  const numBase = Math.random();
  const numFloat = numBase * 10;
  const numInt = Math.floor(numFloat);
  numAleatorio.value = numInt;
}
</script>

<template>
  <section>
    <p>{{ numAleatorio }}</p>
    <button @click="gerarNumAleatorio">Lançar</button>
  </section>
</template>

<style scoped>
section {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-top: 4px solid #fed766;
  border-bottom: 4px solid #fed766;
  border-radius: 4px;
  box-shadow: 0 0 4px lightgray;
}

section > p {
  font-size: 2rem;
}

section > button {
  border: none;
  background-color: #0e9aa7;
  color: white;
  padding: 4px;
  border-radius: 4px;
  transition-duration: 300ms;
}

section > button:hover {
  background-color: #4a4e4d;
  color: white;
  box-shadow: 0 0 4px lightgray;
}
</style>