<script setup>
import LayoutPage from './components/LayoutPage.vue';


</script>

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <LayoutPage>
      <template v-slot:header>
        <h1>Cabeçalho</h1>
      </template>

      <!-- Colocar Default ou apenas colocar qualquer conteudo fora do template vai para o espaço do slot que nao possui nome -->
      <!-- <template #default>
        <h2>Conteudo Principal</h2>
      </template> -->

      <!-- Pode existir valor/conteudo dentro dos templates la nos slots, vai ser um valor padrao, e aqui se for colocado vai ser sobreescrever -->
      <!-- <template v-slot:footer>
        <p>Rodape</p>
      </template> -->
    </LayoutPage>
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
