<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  habilidadeTecnica: {
    type: Array,
    required: true
  },
  habilidadePessoal: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="sessao-habilidades">
    <div class="categoria-habilidades">
      <h3>Habilidades Técnicas</h3>
      <ul>
        <li v-for="habilidade in habilidadeTecnica" :key="habilidade">{{ habilidade }}</li>
      </ul>
    </div>
    <div class="categoria-habilidades">
      <h3>Habilidades Pessoais</h3>
      <ul>
        <li v-for="habilidade in habilidadePessoal" :key="habilidade">{{ habilidade }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sessao-habilidades {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.categoria-habilidades {
  width: 100%;
}

.categoria-habilidades h3 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
  text-align: center;
}

.categoria-habilidades ul {
  list-style: none;
  padding: 0;
}

.categoria-habilidades li {
  background-color: #e9e9e9;
  margin-bottom: 8px;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9em;
  color: #555;
}

@media (min-width: 768px) {
  .sessao-habilidades {
    flex-direction: row;
    justify-content: space-around;
    padding: 30px 20px;
  }

  .categoria-habilidades {
    width: 45%;
  }

  .categoria-habilidades h3 {
    font-size: 1.8em;
    text-align: left;
  }

  .categoria-habilidades li {
    padding: 10px 15px;
    font-size: 1em;
  }
}
</style>