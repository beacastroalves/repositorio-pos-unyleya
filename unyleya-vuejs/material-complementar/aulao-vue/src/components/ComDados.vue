<template>
  <div>
    <h1>Componente com dados</h1>
    <p>Nome: {{ nomeProduto }} - {{ codigoProduto }}</p>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  border: 2px solid #822929;
  background-color: #271616;
  border-radius: 16px;
  margin: 32px;
  padding: 8px;
}

p {
  font-size: 1.2em;
}
</style>

<script setup>
  const nomeProduto = "Apontador"
  const codigoProduto = "#987"
</script>

<!-- <script>
// options API
// export default {
//   data: function() {
//     return {
//       nomeProduto: "Caderno",
//       codigoProduto:"#321"
//     }
//   }
// }

// composition API
// export default {
//   setup: function() {
//     const nomeProduto = "Lapis"
//     const codigoProduto = "#789"
//     return {nomeProduto, codigoProduto}
//   }
// }
</script> -->

