<script setup>
import { computed, ref } from 'vue';
import CardEvento from './CardEvento.vue';
// import CardProduto from './CardProduto.vue';

const { itens } = defineProps([
  'titulo', ' descricao', 'itens'
]);

const numPorPagina = 2;
const pagina = ref(1);
const avancarPagina = () => pagina.value++;
const retrocederPagina = () => pagina.value--;
const quantPagina = computed(() => {
  return Math.ceil(itens.length / numPorPagina)
});

const itensPaginados = computed(() => {
  const pag = pagina.value - 1;
  return itens.filter((_, index) => {
    const limiteMin = numPorPagina * pag;
    const limiteMax = limiteMin + numPorPagina;
    return index >= limiteMin && limiteMax > index;
  })
});
</script>

<template>
  <section>
    <h2>Galeria de {{ titulo }}</h2>
    <p>{{ descricao }}</p>

    <!-- Galeria Generica Entra Aqui -->
     <!-- <CardProduto v-for="item in itensPaginados" :produto="item" /> -->
     <CardEvento v-for="item in itensPaginados" :evento="item" />

    <button @click="retrocederPagina">Retroceder</button>
    {{ pagina }} / {{ quantPagina }}
    <button @click="avancarPagina">Avançar</button>
  </section>
</template>