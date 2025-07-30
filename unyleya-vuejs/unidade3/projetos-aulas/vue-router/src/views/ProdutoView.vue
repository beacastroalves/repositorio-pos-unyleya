<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const prodId = +route.params.id;


const prod = ref(null);
const quant = ref(0);
const mensagem = ref(null);

fetch('../src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    prod.value = dados.produtos.filter(prod => prod.id === prodId)[0];
  })
  .catch(err => mensagem.value = err)

const desconto = computed(() => prod.value.desconto * 100);
const precoFinal = computed(() => (prod.value.preco * (1 - prod.value.desconto)));
const precoTotal = computed(() => precoFinal.value * quant.value);
</script>

<template>
  {{ mensagem }}
  <h2>#{{ prod.id }} {{ prod.nome }}</h2>
  <p>Preço: R$ {{ prod.preco.toFixed(2) }}</p>
  <p>Desconto: {{ desconto }}</p>
  <p>Preço Final: R$ {{ precoFinal.toFixed(2) }}</p>
  <div>
    <button @click="quant--">-</button>
    {{ quant }}
    <button @click="quant++">+</button>
  </div>
  <p>Preço Total: R$ {{ precoTotal.toFixed(2) }}</p>
</template>