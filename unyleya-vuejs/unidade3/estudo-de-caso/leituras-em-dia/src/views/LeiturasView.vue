<script setup>
import LivroCard from '../components/LivroCard.vue';
import { ref } from 'vue';

const leiturasLivros = ref([]);
const mensagem = ref(null);

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    const livros = dados.livros;
    const leituras = dados.leituras;
    for (let leitura of leituras) {
      for (let livro of livros) {
        if (livro.id === leitura.livro) {
          leitura.livro = livro;
          leiturasLivros.value.push(leitura);
          break
        }
      }
    }
  })
  .catch(err => mensagem.value = err)
</script>

<template>
  <main>
    <div class="card" v-for="(leitura, index) in leiturasLivros">
      <LivroCard :livro="leitura.livro" />
      <div class="atual">
        <p>Página Atual: {{ leitura.paginaAtual }}</p>
        <p>Avaliação: {{ leitura.avaliacao }}/5</p>
      </div>
      <div class="info" v-for="(obs, index) in leitura.observacoes">
        <p>Observação: {{ index + 1 }}</p>
        <p>Página: {{ obs.pagina }}</p>
        <p>Texto: {{ obs.texto }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  margin-bottom: 48px;
  max-width: 700px;
}

.atual, .info {
  border: 1px solid #ebebea;
  border-bottom: 1px solid #ebebea14;
  border-top: none;
  margin: 0 10px;
  padding: 8px 24px;
  background-color: #1f1f1f;
}

.atual {
  display: flex;
  justify-content: space-around;
}

.atual > p {
  font-weight: 500;
}
</style>