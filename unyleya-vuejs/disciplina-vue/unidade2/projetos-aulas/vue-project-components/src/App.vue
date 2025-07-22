<script setup>
import { ref, reactive } from 'vue';
import Menu from './components/Menu.vue';
import Topico from './components/Topico.vue';
import Respostas from './components/Respostas.vue';

const novaResposta = ref(null);
const respostas = reactive([])

const enviarResp = () => {
  const conteudo = novaResposta.value;
  const data = new Date().toLocaleString("pt-BR").substring(0, 10);
  const autor = "Beatriz Castro";
  novaResposta.value = null;
  respostas.push({conteudo, data, autor});
}
</script>

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <Topico />
    <section>
      <Respostas :respostas="respostas"/>
      <div class="resposta__form">
        <textarea v-model="novaResposta"></textarea>
        <button @click="enviarResp">Enviar</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.resposta__form {
  border-top: 1px solid lightgray;
  padding: 10px;
  display: flex;
}

.resposta__form > textarea {
  flex-grow: 1;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
