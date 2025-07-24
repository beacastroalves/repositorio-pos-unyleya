<script setup>
import { computed, ref } from 'vue';

const { quant, numPorPagina } = defineProps([
  'titulo', ' descricao', 'pagina', 'quant', 'numPorPagina'
]);

const quantPagina = computed(() => {
  return Math.ceil(quant / numPorPagina)
});

</script>

<template>
  <section>
    <h2>Galeria de {{ titulo }}</h2>
    <p>{{ descricao }}</p>

     <slot></slot>

    <button @click="$emit('retroceder-pagina')">Retroceder</button>
    {{ pagina }} / {{ quantPagina }}
    <button @click="$emit('avancar-pagina')">Avançar</button>
  </section>
</template>