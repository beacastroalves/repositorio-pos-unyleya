<script setup>
import { reactive } from 'vue';
import FormField from './components/FormField.vue';

const usuario = reactive({})
</script>

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <FormField v-model="usuario.nome" label="Nome" type="text" ph="Nome" />
    <FormField v-model="usuario.email" label="Email" type="text" ph="Email" />
    <FormField v-model="usuario.senha" label="Senha" type="password" ph="Senha" />
    <FormField v-model="usuario.idade" label="Idade" type="number" ph="Idade" />
    <pre>{{ usuario }}</pre>
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
