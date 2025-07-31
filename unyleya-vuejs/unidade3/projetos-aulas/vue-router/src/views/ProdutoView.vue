<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <main>
    <RouterLink :to="{ name: `detalhes` }">Detalhes</RouterLink>
    <RouterLink :to="{ name: `avaliacoes` }">Avaliações</RouterLink>
    <RouterLink :to="{ name: `questoes` }">Questões</RouterLink>
  </main>
  <RouterView />
</template>