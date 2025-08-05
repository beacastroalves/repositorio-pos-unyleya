<script setup>
import { computed, ref } from 'vue';

const { id: prodId } = defineProps(['id']);

const avaliacoes = ref([]);
const mensagem = ref(null);

const pegarAvaliacoes = (dados) => {
  const avals = dados.avaliacoes;
  avaliacoes.value = avals.filter(aval => aval.produtoId === +prodId);
};

fetch('/src/assets/dados.json')
  .then(res => res.json())
  .then(dados => {
    pegarAvaliacoes(dados);
  })
  .catch(err => mensagem.value = err);

const mediaNota = computed(() => {
  const avals = avaliacoes.value;
  if (avals.length > 0) {
    const soma = avals?.reduce((acc, aval) => {
      return acc + aval.nota
    }, 0);
    return soma / avals.length;
  }
  return 0;
});
</script>

<template>
  <h4>Avaliações <span>{{ mediaNota }}/5</span></h4>
  <section>
    <div v-for="aval in avaliacoes">
      <p>{{ aval.observacao }}</p>
      <span>{{ aval.nota }}/5</span>
    </div>
  </section>
</template>

<style scoped>
h4 {
  display: flex;
  justify-content: space-around;
}

section > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  border: 1px solid #7c7c7c;
  border-radius: 4px;
}

section > div > p {
  text-align: justify;
  text-indent: 1rem;
}

section > div > span {
  font-size: small;
  color: #7c7c7c;
  padding: 8px;
  margin: 16px;
  border: 1px solid #eaeaea;
  background-color: #eaeaea;
  border-radius: 50%;
}
</style>