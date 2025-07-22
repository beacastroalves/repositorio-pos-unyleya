<script setup>
const itens = [
  "Ínicio",
  "Mural",
  "Postagens",
  "Perfil",
];
</script>

<template>
  <nav>
    <a
      v-for="(item, index) in itens"
      :key="`itemMenu` + index"
      >
      {{ item }}
    </a>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid lightgray;
  box-shadow: 4px 4px 10px rgba(180, 180, 180, 0.3);
  padding: 16px;
  margin-bottom: 16px;
  user-select: none;
}

a {
  cursor: pointer;
}
</style>