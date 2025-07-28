<script setup>
import { computed, inject } from 'vue';

const sacola = inject('sacola');

const totalSacola = computed(() => {
  return sacola.value.reduce(
    (acc, item) => acc + (item.available * item.price), 0
  )
});
</script>

<template>
  <h1>Sacola</h1>
  <table>
    <thead>
      <tr>
        <th>Produto</th>
        <th>Preço</th>
        <th>Quant.</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(prod, idx) in sacola"
        :key="`sacola_prod_` + idx"
        >
          <td>{{ prod.name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.available }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          Total: R$ {{ totalSacola.toFixed(2) }}
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid darkgray;
}

table > thead > tr > th,
table > tbody > tr > td {
  margin: 16px;
  padding: 16px;
  border: 1px solid darkgray;
}

table > tfoot > tr > td {
  margin: 16px;
  padding: 16px;
  text-align: end;
  font-weight: bolder;
  color: #f9f9f9;
}
</style>