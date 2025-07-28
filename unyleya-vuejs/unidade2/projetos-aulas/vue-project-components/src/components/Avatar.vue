<script setup>
import { inject } from 'vue';

// const { usuario } = defineProps(['usuario'])

const usuario = inject("usuario");

</script>

<template>
  <section>
    <p>Responder como: {{ usuario.nome }}</p>
    <img :src="usuario.img" :alt="usuario.descriptionImg">
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

img {
  width: 32px;
  margin-left: 8px;
}
</style>