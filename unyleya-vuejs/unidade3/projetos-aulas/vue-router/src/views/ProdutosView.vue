<script setup>
import { ref } from 'vue';

const prods = ref(null);
const mensagem = ref(null);

fetch('src/assets/dados.json')
  .then(res => res.json())
  .then(dados => prods.value = dados.produtos)
  .catch(err => mensagem.value = err);
</script>

<template>
  {{ mensagem }}

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Produto</th>
        <th>Preço</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(prod, index) in prods">
        <td>{{ prod?.id }}</td>
        <td>{{ prod?.nome }}</td>
        <td>{{ prod?.preco.toFixed(2) }}</td>
        <td>
          <RouterLink :to="`/produto/` + prod?.id">Detalhes</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin: 16px auto;
  width: 90vw;
  border-collapse: collapse;
}

th {
  font-weight: bolder;
  font-size: 1.2rem;
}

td, th {
  text-align: center;
  border: 1px solid lightgray;
}

tbody > tr {
  cursor: pointer;
}

tbody > tr:nth-child(odd) {
  background-color: #2e2e2e;
}

tbody > tr:hover {
  background-color: #595959;
  color: #fafafa;
}
</style>