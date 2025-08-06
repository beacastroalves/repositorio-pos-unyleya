<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const { id: clienteId } = defineProps(['id']);

const cliente = ref(null)
const pedidos = ref([]);
const mensagem = ref(null);

onBeforeRouteUpdate(async (to, from) => {
 if (to.params.id !== from.params.id) {
    fetch('/src/assets/dados.json')
      .then(res => res.json())
      .then(dados => updateCliente(dados, to.params.id))
      .catch(err => mensagem.value = err)
 }
});

const updateCliente = (dados, clienteId) => {
  const pds = dados.pedidos;
  const clts = dados.clientes;
  cliente.value = clts.filter(cliente => {
    return cliente.id == clienteId
  })[0]
  pedidos.value = pds.filter(pedido => pedido.clienteId == clienteId)
}

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    const pds = dados.pedidos;
    const clts = dados.clientes;
    cliente.value = clts.filter(cliente => {
      return cliente.id === +clienteId
    })[0]
    pedidos.value = pds
      .filter(pedido => pedido.clienteId === +clienteId);
  })
  .catch(err => mensagem.value = err);

const gerarLink = (pedido) => {
  const clId = cliente.value.id;
  const pdId = pedido.id;
  return `/clientes/${clId}/pedidos/${pdId}`
};
</script>

<template>
  <nav>
    <RouterLink :to="`/clientes/${(+id) - 1}/pedidos`">Anterior</RouterLink>
    <h3>#{{ id }} {{ cliente?.nome }}</h3>
    <RouterLink :to="`/clientes/${(+id) + 1}/pedidos`">Anterior</RouterLink>
  </nav>
  <table v-if="pedidos.length > 0">
    <thead>
      <tr>
        <th>#</th>
        <th>Produtos</th>
        <th>Situação</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(pedido, index) in pedidos"
        :key="`tr_table_pedido_` + index"
        >
          <td>{{ pedido.id }}</td>
          <td>{{ pedido.produtosId }}</td>
          <td>{{ pedido.situacao }}</td>
          <td>
            <RouterLink
              :to="gerarLink(pedido)"
              >Ver</RouterLink>
          </td>
      </tr>
    </tbody>
  </table>
  <p v-else>Nenhum pedido cadastrado</p>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  margin: 16px;
}

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