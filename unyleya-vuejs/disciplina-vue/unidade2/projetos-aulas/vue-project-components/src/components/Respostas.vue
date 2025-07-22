<script setup>
import { ref, reactive } from 'vue';

const novaResposta = ref(null);
const respostas = reactive([
  {
    conteudo: "Os componentes Vue permitem que você divida sua interface do usuário em partes menores e independentes, cada uma responsável por uma determinada funcionalidade.",
    data: "10/07/1856",
    autor: "Nikola Testa"
  },
  {
    conteudo: "Eles podem ser reutilizados em várias partes do aplicativo, tornando o código mais organizado, legível e fácil de manter.",
    data: "23/06/1912",
    autor: "Allan Turing"
  },
])

const enviarResp = () => {
  const conteudo = novaResposta.value;
  const data = new Date().toLocaleString("pt-BR").substring(0, 10);
  const autor = "Beatriz Castro";
  novaResposta.value = null;
  respostas.push({conteudo, data, autor});
}
</script>

<template>
  <div
    class="resposta"
    v-for="(resposta, index) in respostas"
    :key="`resposta` + index"
    >
    <p>{{ resposta.conteudo }}</p>
    <span>{{ resposta.autor }} {{ resposta.data }}</span>
  </div>
  <div class="resposta__form">
    <textarea v-model="novaResposta"></textarea>
    <button @click="enviarResp">Enviar</button>
  </div>
</template>

<style scoped>
.resposta__form {
  border-top: 1px solid lightgray;
  padding: 10px;
  display: flex;
}

.resposta__form > textarea {
  flex-grow: 1;
}

.resposta {
  border-radius: 4px;
  background-color: #eeeeee;
  padding: 16px;
  margin: 16px;
}

.resposta > p {
  font-size: 1rem;
  text-align: justify;
  text-indent: 1rem;
}

.resposta > span {
  display: block;
  font-size: 0.8rem;
  text-align: right;
}
</style>