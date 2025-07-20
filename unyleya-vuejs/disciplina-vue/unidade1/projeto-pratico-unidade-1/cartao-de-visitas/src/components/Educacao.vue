<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  educacao: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="sessao-educacao">
    <h2>Educação</h2>
    <div v-for="curso in educacao" :key="curso.instituicao" class="estudacao-item">
      <h3>{{ curso.graduacao }} - {{ curso.instituicao }}</h3>
      <p>{{ curso.periodo }}</p>
      <p v-if="curso.descricao">{{ curso.descricao }}</p>
    </div>
  </section>
</template>

<style scoped>
.sessao-educacao {
  padding: 20px 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 20px;
}

.sessao-educacao h2 {
  font-size: 1.8em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.estudacao-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 12px;
}

.estudacao-item h3 {
  font-size: 1.2em;
  color: #444;
  margin-bottom: 5px;
}

.estudacao-item p {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
}

@media (min-width: 768px) {
  .sessao-educacao {
    padding: 30px 20px;
  }

  .sessao-educacao h2 {
    font-size: 2.2em;
    margin-bottom: 30px;
  }

  .estudacao-item {
    padding: 20px;
    margin-bottom: 15px;
  }

  .estudacao-item h3 {
    font-size: 1.5em;
  }

  .estudacao-item p {
    font-size: 1em;
  }
}
</style>