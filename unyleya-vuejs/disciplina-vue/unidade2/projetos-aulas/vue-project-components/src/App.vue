<script setup>
import { computed, ref } from 'vue';
import Galeria from './components/Galeria.vue';
import CardEvento from './components/CardEvento.vue';

// const itens = [
//   { nome: "Computador", descricao: "Computador Gamer", preco: 9_000.00 },
//   { nome: "Mouse", descricao: "Mouse Gamer", preco: 90.00 },
//   { nome: "Teclado", descricao: "Teclado Gamer", preco: 180.00 },
//   { nome: "Monitor", descricao: "Monitor Gamer", preco: 1_000.00 },
// ]

const itens = [
  { nome: "Musica", descricao: "Musicas de Sucesso", data: "05/01/2026", local: "Casa de Eventos" },
  { nome: "Cinema", descricao: "Cinema de Sucesso", data: "02/01/2026", local: "Cinema Local" },
  { nome: "Teatro", descricao: "Teatro de Sucesso", data: "08/01/2026", local: "Teatro Municipal" },
  { nome: "Orquestra", descricao: "Orquestra de Sucesso", data: "21/01/2026", local: "Praça da Cidade" },
]

const numPorPagina = 2;
const pagina = ref(1);
const avancarPagina = () => {
  if (pagina.value < (itens.length / numPorPagina)) {
    pagina.value++
  }
};
const retrocederPagina = () => {
  if (pagina.value >= (itens.length / numPorPagina)) {
    pagina.value--
  }
};

const itensPaginados = computed(() => {
  const pag = pagina.value - 1;
  return itens.filter((_, index) => {
    const limiteMin = numPorPagina * pag
    const limiteMax = limiteMin + numPorPagina
    return index >= limiteMin && limiteMax > index
  })
});
</script>

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <!-- <Galeria titulo="Produtos" descricao="Produtos Eletronicos" :itens="produtos" /> -->
    <Galeria
      titulo="Eventos"
      descricao="Eventos na Cidade"
      :quant="itens.length"
      :numPorPagina="numPorPagina"
      :pagina="pagina"
      @avancar-pagina="avancarPagina"
      @retroceder-pagina="retrocederPagina"
      >

      <CardEvento
        v-for="item in itensPaginados"
        :evento="item"
        />

    </Galeria>
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
