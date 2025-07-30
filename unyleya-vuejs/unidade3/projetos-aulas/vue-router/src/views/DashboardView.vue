<script setup>
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const produtos = ref([]);
const mensagem = ref(null);

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => produtos.value = dados.produtos)
  .catch(err => mensagem.value = err + `Erro aqui`)

const prodPromocao = computed(() => {
  const prods = produtos.value;
  return prods.filter(prod => prod.desconto > 0);
});

const formatDesconto = (prod) => `R$ ${(prod?.preco * (1 - prod?.desconto)).toFixed(2)}`;

const formtPreco = (prod) => `R$ ${prod?.preco.toFixed(2)}`;
</script>

<template>
  <h1>Dashboard</h1>
  {{ mensagem }}
  <RouterLink
    v-for="(prod, index) in prodPromocao"
    :key="`prod_promo_` + index"
    :to="`/produto/` + prod?.id"
    >
    <div
        class="card"
        >
          <h3>{{ prod.nome }}</h3>
          <p class="desc">R$ {{ formtPreco(prod) }}</p>
          <p>R$ {{ formatDesconto(prod) }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  border: 1px solid lightgray;
  margin: 8px;
  padding: 16px;
  min-width: 170px;
  transition-duration: 0.5s;
}

.card .desc {
  color: darkgray;
  text-decoration: line-through;
}

.card:hover {
  background-color: #204521;
}

h1 {
  margin-left: 1rem;
}
</style>