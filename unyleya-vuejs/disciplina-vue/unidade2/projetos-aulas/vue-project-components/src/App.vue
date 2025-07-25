<script setup>
import { ref } from 'vue';
import DadosEndereco from './components/forms/DadosEndereco.vue';
import DadosExperiencias from './components/forms/DadosExperiencias.vue';
import DadosPessoais from './components/forms/DadosPessoais.vue';

const abaCorrente = ref(0);
const abas = [
  { label: 'Pessoais', comp: DadosPessoais },
  { label: 'Endereço', comp: DadosEndereco },
  { label: 'Experiências', comp: DadosExperiencias },
]
</script>

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <div>
      <button
        v-for="(aba, idx) in abas" :key="`aba` + idx"
        @click="abaCorrente = idx"
        >
         {{ aba.label }}
      </button>
      <br>
      <hr>
      <div>
        <KeepAlive>
          <component :is="abas[abaCorrente].comp" />
        </KeepAlive>
      </div>
    </div>
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

button {
  padding: 8px;
  cursor: pointer;
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
