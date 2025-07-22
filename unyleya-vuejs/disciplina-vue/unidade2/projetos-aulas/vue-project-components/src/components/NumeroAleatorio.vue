<script setup>
import { ref } from 'vue';
// const props = defineProps(['min', 'max'])
const props = defineProps({
  minValue: {
    type: Number,
    default: 0,
  },
  maxValue:  {
    type: Number,
    default: 9,
  },
})

// const min = 0;
// const max = 9;

const { minValue, maxValue } = props;

const numAleatorio = ref(0);
const gerarNumAleatorio = () => {
  const numBase = Math.random();
  const numFloat = numBase * (maxValue - minValue +  1) + minValue;
  const numInt = Math.floor(numFloat);
  numAleatorio.value = numInt;
}
</script>

<template>
  <section>
    <p>{{ numAleatorio }}</p>
    <span>[{{ minValue }}, {{ maxValue }}]</span>
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
  min-width: 100px;
}

section > p {
  font-size: 2rem;
}

section > button {
  border: none;
  background-color: #0e9aa7;
  color: white;
  padding: 8px;
  border-radius: 4px;
  transition-duration: 300ms;
  margin-top: 8px;
  width: 100%;
}

section > button:hover {
  background-color: #4a4e4d;
  color: white;
  box-shadow: 0 0 4px lightgray;
}
</style>