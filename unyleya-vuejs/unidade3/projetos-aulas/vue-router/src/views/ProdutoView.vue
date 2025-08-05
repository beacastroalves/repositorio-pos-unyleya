<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <main class="tab_menu">
    <RouterLink class="tab_item" :to="{ name: `detalhes` }">Detalhes</RouterLink>
    <RouterLink class="tab_item" :to="{ name: `avaliacoes` }">Avaliações</RouterLink>
    <RouterLink class="tab_item" :to="{ name: `questoes` }">Questões</RouterLink>
  </main>
  <RouterView />
</template>

<style scoped>
.tab_menu {
  margin: 8px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #eaeaea;
}

.tab_item {
  padding: 16px;
  flex: 1;
  text-align: center;
  border-radius: 10px 10px 0 0;
}
</style>