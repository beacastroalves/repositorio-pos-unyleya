<script setup>
import { ref } from 'vue';

const { id: prodId } = defineProps(['id']);

const questoes = ref([]);
const mensagem = ref(null);

const pegarQuestoes = (dados) => {
  const quests = dados.questoes;
  questoes.value = quests.filter(quest => quest.produtoId === +prodId);
};

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    pegarQuestoes(dados);
  })
  .catch(err => mensagem.value = err);
</script>

<template>
  <h4>Questões</h4>
  <section>
    <div v-for="quest in questoes">
      <h5>{{ quest.pergunta }}</h5>
      <p>{{ quest.resposta }}</p>
    </div>
  </section>
</template>

<style scoped>
section > div {
  margin: 16px 8px;
  padding: 8px;
  border-top: 1px solid #e0e0e0;
}

section > div > h5 {
  font-size: large;
  text-align: right;
  color: #ababab;
}

section > div > p {
  font-size: small;
  text-align: justify;
  text-indent: 1.2rem;
  color: #d7d7d7;
}
</style>