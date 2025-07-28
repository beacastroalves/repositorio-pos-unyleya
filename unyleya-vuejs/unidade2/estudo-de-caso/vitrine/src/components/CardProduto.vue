<script setup>
import { inject } from 'vue';

const emit = defineEmits(['send-msg']);
defineProps(['produto']);

const sacola = inject('sacola', []);

const addSacola = (item) => {
  if (!sacola.value.includes(item)) {
    sacola.value.push(item);
  } else {
    emit('send-msg');
  }
}
</script>

<template>
  <section>
    <h2>{{ produto.name }}</h2>
    <p class="card__desc">{{ produto.description }}</p>
    <p class="card__footer">R$ {{ produto.price.toFixed(2) }}</p>
    <button @click="() => addSacola(produto)">Add</button>
  </section>
</template>

<style scoped>
section {
  margin: 16px;
  padding: 16px;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 1px 1px 1px lightgray;
}

section > .card__desc {
  font-size: 1.2rem;
  text-indent: 2rem;
  text-align: justify;
}

section > .card__footer {
  text-align: end;
}

section > button {
  padding: 16px 56px;
  background-color: #a7c957;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
}

</style>