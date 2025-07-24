<script setup>
import Menu from './components/Menu.vue';
import Topico from './components/Topico.vue';
import Respostas from './components/Respostas.vue';
import FormResposta from './components/FormResposta.vue';
import { reactive } from 'vue';

const respostas = reactive([]);
const usuario = reactive({
  nome: "Beatriz Alves",
  img: "./src/assets/user.png",
  descriptionImg: "icone de um ususario padrao"
})

const addResposta = (resposta) => {
  respostas.push(resposta);
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
      <FormResposta :usuario="usuario" @eventAddResposta='addResposta' />
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
