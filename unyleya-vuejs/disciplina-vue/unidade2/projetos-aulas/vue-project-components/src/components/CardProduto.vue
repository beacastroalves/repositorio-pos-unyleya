<script setup>
defineProps({
  produto: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <p class="prod__nome">{{ produto.nome }}</p>
    <p class="prod__descricao">{{ produto.descricao }}</p>
    <p class="prod__preco">R$ {{ produto.preco }}</p>
  </div>
</template>

<style scoped>
.card {
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 2px darkgray;
}

.prod__nome {
  font-size: 1.5rem;
}

.prod__descricao {
  font-size: 1.2rem;
  text-align: justify;
  text-indent: 2rem;
}

.prod__preco {
  font-size: 1rem;
  text-align: right;
}
</style>