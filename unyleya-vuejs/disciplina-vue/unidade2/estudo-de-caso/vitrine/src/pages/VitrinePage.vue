<script setup>
import CardProduto from '@/components/CardProduto.vue';
import { ref, watch } from 'vue';

let produtos = ref([]);
const msg = ref(null);

fetch("/dados.json")
  .then(res => res.json())
  .then(data => produtos.value = data)
  .catch(err => msg.value = err)

const sendMsg = () => {
  msg.value = "Produto já adicionado";
}

watch(msg, (newMsg, oldMsg) => {
  if (newMsg) {
    setTimeout(() => msg.value = null, 200);
  }
});
</script>

<template>
  <h1>Vitrine ({{ produtos.length }})</h1>
  <p class="msg_vitrine" v-if="msg">{{ msg }}</p>
  <CardProduto
    @send-msg="sendMsg"
    v-for="(prod, idx) in produtos"
    :produto="prod"
    :key="`prod_vitrine_` + idx"
    />
</template>

<style scoped>
.msg_vitrine {
  color: #ae2012;
}
</style>