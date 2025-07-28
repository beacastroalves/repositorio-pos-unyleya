<script setup>
import { ref } from 'vue';

const nomeCompleto = ref('Beatriz de Castro Alves');
const cargoDesejado = ref('Desenvolvedor Front-end Júnior');
const descricao = ref('Acredito que minha dedicação ao aprendizado contínuo, me posiciona como uma profissional dinâmica e pronta para contribuir com projetos inovadores e colaborar com pessoas que esteja com o mesmo objetivo de crescimento. Vamos nos conectar e explorar as possibilidades de sucesso que a tecnologia nos traz.');
</script>

<template>
  <section class="sobre-mim">
    <h1>{{ nomeCompleto }}</h1>
    <h2>{{ cargoDesejado }}</h2>
    <p>{{ descricao }}</p>
  </section>
</template>

<style scoped>
.sobre-mim {
  text-align: center;
  padding: 20px 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 8px;
}

h2 {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 15px;
}

p {
  font-size: 0.9em;
  line-height: 1.5;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .sobre-mim {
    padding: 40px 20px;
  }

  h1 {
    font-size: 2.8em;
  }

  h2 {
    font-size: 1.6em;
  }

  p {
    font-size: 1.1em;
  }
}
</style>