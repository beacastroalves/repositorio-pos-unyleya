<script setup>
import { ref } from 'vue';
import Contatos from './pages/Contatos.vue';
import Home from './pages/Home.vue';
import Produtos from './pages/Produtos.vue';
import Servicos from './pages/Servicos.vue';

const pagina = ref(0);
const paginas = [
  { label: 'Home', comp: Home },
  { label: 'Produtos', comp: Produtos },
  { label: 'Serviços', comp: Servicos },
  { label: 'Contatos', comp: Contatos },
]
</script>

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <div>
      <a
        v-for="(aba, idx) in paginas"
        :key="`aba` + idx"
        @click="pagina = idx"
        >
          {{ aba.label }}
      </a>
    </div>
    <div>
      <component :is="paginas[pagina].comp" />
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

a {
  margin: 8px;
  padding: 8px;
  cursor: pointer;

  user-select: none;
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
