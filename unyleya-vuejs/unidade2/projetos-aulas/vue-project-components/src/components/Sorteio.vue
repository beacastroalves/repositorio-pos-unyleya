<script setup>
import { ref } from 'vue';
import NumeroAleatorio from './NumeroAleatorio.vue';

const num = ref(1);
const adicionar = () => num.value++;
const remover = () => num.value--;
</script>

<template>
  <div class="control__panel">
    <button @click="adicionar">+</button>
    <span>{{ num }}</span>
    <button @click="remover">-</button>
  </div>
  <!-- <NumeroAleatorio v-for="i in num" :key="`numAlt` + i"/> -->

  <NumeroAleatorio :minValue="0" :maxValue="100"/>
  <NumeroAleatorio />
</template>

<style scoped>
.control__panel {
  display: flex;
}

.control__panel > button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #88d8b0;
  padding: 16px;
  margin: 16px;
  flex-grow: 1;
  transition-duration: 0.3s;
}

.control__panel > span {
  font-size: 2rem;
  padding: 1px;
  margin: 1px;
  flex-grow: 1;
  text-align: center;
  align-self: center;
}
</style>