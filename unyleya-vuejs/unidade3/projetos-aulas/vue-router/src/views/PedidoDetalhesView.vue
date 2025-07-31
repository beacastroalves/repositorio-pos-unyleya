<script setup>
import { ref } from 'vue';

const props = defineProps(['clId', 'pdId']);
const { clId: clienteId, pdId: pedidoId } = props;

const cliente = ref(null);
const mensagem = ref(null);

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    const clts = dados.clientes
    cliente.value = clts.filter(c => c.id === +clienteId)[0]
  })
  .catch(err => mensagem.value = err);
</script>

<template>
  {{ mensagem }}
  <h3>Cliente #{{ cliente?.nome }}</h3>
  <h4>Pedido #{{ pedidoId }}</h4>
</template>