<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const livroId = route.params.id;
const livroSelecionado = ref(null);
const mensagem = ref(null);

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    const livros = dados.livros;
    for (let livro of livros) {
      if (livro.id === +livroId) {
        livroSelecionado.value = livro;
        break
      }
    }
  })
  .catch(err => mensagem.value = err)
</script>

<template>
  <main>
    <section>
      <h2>#{{ livroSelecionado.id }} {{ livroSelecionado.titulo }}</h2>
      <p class="detalhes_resumo">{{ livroSelecionado.resumo }}</p>
      <p><span>Autor: </span>{{ livroSelecionado.autor }}</p>
      <p><span>Editora: </span>{{ livroSelecionado.editora ? livroSelecionado.editora : "Não informado"  }}</p>
      <p><span>Ilustrador: </span>{{ livroSelecionado.ilustrador ? livroSelecionado.ilustrador : "Não informado" }}</p>
      <p><span>Nº de Páginas: </span>{{ livroSelecionado.numero_paginas }}</p>
      <p><span>Data de publicação: </span>{{ livroSelecionado.data_publicacao }}</p>
    </section>
  </main>
</template>

<style scoped>
section {
  background-color: #303030;
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px rgba(200, 200, 200, 0.46);
  max-width: 700px;
}

section > p {
  font-weight: 300;
}

.detalhes_resumo {
  text-align: justify;
  text-align: 1rem;
  font-weight: 400;
  margin: 4px 0;
}
</style>