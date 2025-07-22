<!-- Composition API (Modo mais usado hoje em dia) -->
 <script setup>
import NumeroAleatorio from './components/NumeroAleatorio.vue';
</script>

<!-- Options API (Modo usado antigamente)
<script>
import NumeroAleatorio from './components/NumeroAleatorio.vue';
export default {
  components: {
    NumeroAleatorio
  }
}
</script>
-->

<template>
  <header>
    <h1>App</h1>
  </header>

  <main>
    <NumeroAleatorio />
    <NumeroAleatorio />
    <NumeroAleatorio />
    <NumeroAleatorio />
    <NumeroAleatorio />
    <NumeroAleatorio />
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
