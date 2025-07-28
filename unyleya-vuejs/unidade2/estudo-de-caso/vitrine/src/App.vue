<script setup>
import { provide, ref } from 'vue';
import SacolaPage from './pages/SacolaPage.vue';
import VitrinePage from './pages/VitrinePage.vue';

const pagina = ref(0);
const sacola = ref([]);
provide('sacola', sacola);

const paginas = [
  { label: 'Vitrine', comp: VitrinePage },
  { label: 'Sacola', comp: SacolaPage }
];
</script>

<template>
  <header>
    <div class="main__menu">
      <a
        v-for="(aba, idx) in paginas"
        :key="`aba` + idx"
        @click="pagina = idx"
        > {{ aba.label }}
        <span v-if="idx === 1"> {{ sacola.length }}</span>
      </a>
    </div>
  </header>

  <main>
    <div>
      <KeepAlive>
        <component :is="paginas[pagina].comp" />
      </KeepAlive>
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
  font-size: 1.2rem;
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
