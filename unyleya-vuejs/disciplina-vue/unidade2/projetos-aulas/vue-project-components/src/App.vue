<script setup>
import { ref } from 'vue';
import Temp from './components/Temp.vue';

const min = ref(0);
const max = ref(30);
const atualizarPrev = () => {
  min.value = parseInt(Math.random() * 20)
  max.value = parseInt(Math.random() * 50)
};
</script>

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <button @click="atualizarPrev">Atualizar</button>
    <Temp city="Rio de Janeiro" :min="min" :max="max"/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
