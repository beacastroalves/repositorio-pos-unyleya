<script setup>
defineProps(['livro']);
</script>

<template>
  <section>
    <h2># {{ livro.id }} {{ livro.titulo }}</h2>
    <p>Autor: {{ livro.autor }}</p>
    <RouterLink :to="`/detalhes/` + livro.id">Detalhes</RouterLink>
  </section>
</template>

<style scoped>
  section {
    background-color: #303030;
    margin: 8px auto;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 1px 1px 1px 1px rgba(200, 200, 200, 0.46);
    width: 100%;
    max-width: 700px;
  }

  section > p {
    text-align: right;
    font-weight: 300;
  }
</style>