<script setup>
import { ref, reactive } from 'vue';
import Avatar from './Avatar.vue';

const { usuario } = defineProps(['usuario']);
const emit = defineEmits(['eventAddResposta']);
const novaResposta = ref(null);

const enviarResp = () => {
  const conteudo = novaResposta.value;
  const data = new Date().toLocaleString("pt-BR").substring(0, 10);
  const autor = "Beatriz Castro";

  novaResposta.value = null;
  emit('eventAddResposta', { conteudo, data, autor });
}
</script>

<template>
  <main>
      <Avatar :usuario="usuario"/>
      <div class="resposta__form">
        <textarea v-model="novaResposta"></textarea>
        <button @click='enviarResp'>Enviar</button>
      </div>
  </main>
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
</style>