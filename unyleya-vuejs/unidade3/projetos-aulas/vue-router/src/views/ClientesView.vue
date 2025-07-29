<script setup>
import { ref } from 'vue';


const clientes = ref([]);
const mensagem = ref(null);

fetch('../src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    const clts = dados.clientes;
    clientes.value = clts
  })
  .catch(err => mensagem.value = err)
</script>

<template>
  <table v-if="clientes.length > 0">
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Pedidos</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(cliente, index) in clientes"
        :key="`tr_table_cliente_` + index"
        >
          <td>{{ cliente.id }}</td>
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.email }}</td>
          <td>
            <RouterLink
              :to="`/clientes/` + cliente.id + `/pedidos`"
              >Ver</RouterLink>
          </td>
      </tr>
    </tbody>
  </table>
  <p v-else>Nenhum cliente cadastrado</p>
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