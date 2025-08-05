<script setup>
import { computed, ref, watch } from 'vue';

const { id } = defineProps(['id']);

const prod = ref(null);
const quant = ref(0);
const mensagem = ref(null);

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    prod.value = dados.produtos
      .filter(prod => prod.id == id)[0];
  })
  .catch(err => mensagem.value = err);

watch(prod, (newProd, oldProd) => {
  if(!newProd) {
    mensagem.value = 'ID não encontrado.'
    setTimeout(() => {
      router.push({
        path: '/produto'
      })
    }, 3000)
  }
});

const desconto = computed(() => prod.value?.desconto * 100);
const precoFinal = computed(() => (prod.value?.preco * (1 - prod.value?.desconto)));
const precoTotal = computed(() => precoFinal.value * quant.value);
</script>

<template>
  <section>
    {{ mensagem }}
    <h2><span>#{{ prod?.id }}</span> {{ prod?.nome }}</h2>
    <p><span>Preço:</span> R$ {{ prod?.preco.toFixed(2) }}</p>
    <p><span>Desconto:</span> {{ desconto }}%</p>
    <p><span>Preço Final:</span> R$ {{ precoFinal.toFixed(2) }}</p>
    <!-- <div>
      <button @click="quant--">-</button>
      {{ quant }}
      <button @click="quant++">+</button>
    </div>
    <p>Preço Total: R$ {{ precoTotal.toFixed(2) }}</p> -->
  </section>
</template>

<style scoped>
section > h2 {
  margin-top: 16px;
  border-top: 1px solid #eaeaea;
  padding: 16px;
  display: flex;
  align-items: baseline;
}

section > h2 > span {
  flex: 1;
  font-size: small;
}

section > p {
  display: flex;
  padding: 16px;
  border: 1px solid #eaeaea;
  color: #e1e1e1;
  font-size: large;
}

section > p > span {
  flex: 1;
  color: #aeaeae;
  font-size: small;
}
</style>