<script setup>
import { computed, ref } from 'vue';

const produtos = ref([]);
const mensagem = ref(null);

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(prods => produtos.value = prods)
  .catch(err => mensagem.value = err + `Erro aqui`)

const prodPromocao = computed(() => {
  const prods = produtos.value;
  return prods.filter(prod => prod.desconto > 0);
});
</script>

<template>
  <h1>Dashboard</h1>
  {{ mensagem }}
  <div
      class="card"
      v-for="(prod, index) in prodPromocao"
      :key="`prod_promo_` + index"
      >
        <h3>{{ prod.nome }}</h3>
        <p class="desc">R$ {{ prod.preco.toFixed(2) }}</p>
        <p>R$ {{ (prod.preco * (1 - prod.desconto)).toFixed(2) }}</p>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  margin: 16px;
  padding: 16px;
  border: 1px solid lightgray;
}

.card .desc {
  color: darkgray;
  text-decoration: line-through;
}

.card:hover {
  background-color: #5c562c;
}
</style>