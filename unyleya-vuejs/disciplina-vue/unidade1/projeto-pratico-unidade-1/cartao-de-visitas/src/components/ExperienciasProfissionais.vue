<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  experiencias: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="experiencias-profissionais">
    <h2>Experiência Profissional</h2>
    <div v-for="trabalho in experiencias" :key="trabalho.nomeEmpresa" class="experiencias-item">
      <h3>{{ trabalho.cargo }} na {{ trabalho.nomeEmpresa }}</h3>
      <p class="periodo">{{ trabalho.periodo }}</p>
      <ul>
        <li v-for="(atividades, index) in trabalho.atividades" :key="index">
          {{ atividades }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.experiencias-profissionais {
  padding: 20px 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 20px;
}

.experiencias-profissionais h2 {
  font-size: 1.8em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.experiencias-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 15px;
}

.experiencias-item h3 {
  font-size: 1.3em;
  color: #444;
  margin-bottom: 5px;
}

.experiencias-item .periodo {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 10px;
}

.experiencias-item ul {
  list-style: disc;
  padding-left: 20px;
  margin-top: 10px;
}

.experiencias-item li {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .experiencias-profissionais {
    padding: 30px 20px;
  }

  .experiencias-profissionais h2 {
    font-size: 2.2em;
    margin-bottom: 30px;
  }

  .experiencias-item {
    padding: 20px;
    margin-bottom: 20px;
  }

  .experiencias-item h3 {
    font-size: 1.6em;
  }

  .experiencias-item .periodo {
    font-size: 1em;
  }

  .experiencias-item li {
    font-size: 1em;
  }
}
</style>