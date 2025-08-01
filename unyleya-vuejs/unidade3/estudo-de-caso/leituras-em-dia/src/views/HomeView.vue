<script setup>
import { ref } from 'vue';
import LivroCard from '../components/LivroCard.vue';

const livros = ref([])
const mensagem = ref(null)

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => livros.value = dados.livros)
  .catch(err => mensagem.value = err);
</script>

<template>
  <main>
    <LivroCard
      v-for="(livro, index) in livros"
      :livro="livro"
    />
  </main>
</template>
