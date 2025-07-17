<!-- Funções do tipo Methods de um objeto Vue -->
<script setup>
import {ref} from 'vue';
const produtos =ref([]);
const produto = ref({});
const total = ref(0.0);

const salvar = () => {
  const prod = produto.value;
  produtos.value.push(` ${prod.nome} (${prod.quantidade})\n`);
  const subtotal = prod.preco * prod.quantidade;
  total.value += subtotal;
};
</script>

<template>
  <main>
    <input type="text" v-model='produto.nome' />
    <input type="number" v-model='produto.preco' />
    <input type="number" v-model='produto.quantidade' />
    <button @click='salvar'>Salvar</button>
    <p>Produtos: {{ produtos.toString() }}</p>
    <p>Total: R$ {{ total.toFixed(2) }}</p>
  </main>
</template>

<!-- Methods com o Options API
 <script>
export default {
  data() {
    return {
      contador: 0,
    }
  },
  methods: {
    incContador() { this.contador++ },
    decContador() { this.contador-- },
  }
}
</script>

<template>
  <main>
    <div>
      <button @click="decContador">-</button>
      {{ contador }}
      <button @click="incContador">+</button>
    </div>
  </main>
</template> -->

<!-- Methods com o composition API
<script setup>
import {ref} from 'vue';
const contador = ref(0);
const inc = () => contador.value++;
const dec = () => contador.value--;
const prod = ref({
  nome: 'Computador',
  descricao: 'Computador Mega',
  preco: 2263.99,
  quantidade: 1
})
</script>

<template>
  <main>
    <div>
      <button @click="dec">-</button>
      <span>{{ contador }}</span>
      <button @click="inc">+</button>
    </div>
  </main>
</template> -->

<!-- Objeto Vue com a forma mais atual usada Composition API
<script setup>
import {ref} from 'vue';
const contador = ref(0);
const prod = ref({
  nome: 'Computador',
  descricao: 'Computador Mega',
  preco: 2263.99,
  quantidade: 1
})
</script>

<template>
  <main>
    <div>
      <h3>{{ prod.nome }}</h3>
      <p>{{ prod.descricao }}</p>
      <p>R$ {{ (prod.preco * prod.quantidade).toFixed(2) }}</p>
      <button @click="() => {
        if (prod.quantidade > 1)
          prod.quantidade--
      } ">-</button>
      <span>{{ prod.quantidade }}</span>
      <button @click="() => {
        if (prod.quantidade < 10)
          prod.quantidade++
        }">+</button>
    </div>
  </main>
</template> -->

<!-- Pequeno exemplo com o composition API
<script setup>
  const titulo = 'Vue';
  const subtitulo = 'Aplicações Web com Vue';
  const autor = 'Prof. Thiago Aguiar';
</script>

<template>
  <main>
    <h2>{{ titulo }}</h2>
    <h3>{{ subtitulo }}</h3>
    <h4>{{ autor }}</h4>
  </main>
</template> -->

<!-- Objeto Vue com Options API
<script>
export default {
  data() {
    return {
      contador: 0,
      prod: {
        nome: 'Computador',
        descricao: 'Computador Ultra Mega',
        preco: 4263.99,
        quantidade: 1
      }
    }
  }
}
</script>

<template>
  <main>
    <div>
      <h3>{{ prod.nome }}</h3>
      <p>{{ prod.descricao }}</p>
      <p>R${{ (prod.preco * prod.quantidade).toFixed(2) }}</p>

      <button @click='() => {
        if (prod.quantidade > 0)
          prod.quantidade--
      }'>-</button>
      <span> {{ prod.quantidade }} </span>
      <button @click='() => {
        if (prod.quantidade < 10)
          prod.quantidade++
      }'>+</button>
    </div>
  </main>
</template>-->

<!-- Pequena alteração no objeto inicial
<script>
export default {
  data() {
    return {
      titulo: 'Vue',
      subtitulo: 'Aplicações Web com Vue',
      autor: 'Prof. Thiago Aguiar',
    }
  }
}
</script>

<template>
  <main>
    <h2>{{ titulo }}</h2>
    <h3>{{ subtitulo }}</h3>
    <h4>{{ autor }}</h4>
  </main>
</template> -->

<!-- Objeto inicial do VUE
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue';
const titulo = ref('Meu Primeiro App');
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    {{ titulo }}
    <div class="wrapper">
      <HelloWorld msg="Aprendendo Vue. Aluna Beatriz Castro" />
    </div>
  </header>

  <main>
    <TheWelcome />
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
</style> -->
