<script setup>
const { respostas } = defineProps(['respostas']);
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
</template>

<style scoped>
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