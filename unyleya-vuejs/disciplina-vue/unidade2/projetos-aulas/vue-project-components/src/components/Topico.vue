<script setup>
import { computed, reactive } from 'vue';

const topico = reactive({
  titulo: "O que é um componente Vue?",
  descricao: "Um componente Vue é uma instância isolada e reutilizável de uma parte da interface do usuário (UI) que é definida em um único arquivo Vue. Ele encapsula seu próprio estado, comportamento e visualização em uma unidade modular, tornando-o mais fácil de desenvolver, testar e manter.",
  curtidas: parseInt(Math.random() * 3_000),
});

const calcularCurtidas = computed(() => {
  const crtds = topico.curtidas;
  if (crtds > 1_000) {
    return `${(crtds / 1_000).toFixed(0)}K`;
  } else {
    return crtds;
  }
});
</script>

<template>
  <div>
    <h3>{{ topico.titulo }}</h3>
    <p>{{ topico.descricao }}</p>
    <span>Curtidas {{ calcularCurtidas }}</span>
  </div>
  <Respostas />
</template>

<style scoped>
h3 {
  font-size: 2rem;
  text-align: center;
}

p {
  font-size: 1.2rem;
  font-weight: bolder;
  text-align: justify;
  text-indent: 1rem;
  padding: 16px;
}

span {
  font-size: 0.8rem;
  display: block;
  text-align: right;
}
</style>