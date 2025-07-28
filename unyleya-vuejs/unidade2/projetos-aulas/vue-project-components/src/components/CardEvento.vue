<script setup>
defineProps({
  evento: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <p class="evento__nome">{{ evento.nome }}</p>
    <p class="evento__descricao">{{ evento.descricao }}</p>
    <p class="evento__data">{{ evento.data }}</p>
    <p class="evento__local">{{ evento.local }}</p>
  </div>
</template>

<style scoped>.card {
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 2px darkgray;
}

.evento__nome {
  font-size: 1.5rem;
}

.evento__descricao {
  font-size: 1.2rem;
  text-align: justify;
  text-indent: 2rem;
}

.evento__data, .evento__local {
  font-size: 1rem;
  text-align: right;
}
</style>