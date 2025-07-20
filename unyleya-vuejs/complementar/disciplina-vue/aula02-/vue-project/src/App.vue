<script setup>
import { reactive } from 'vue';
const evento = reactive({});
const eventos = reactive([]);
const salvarEvento = () => eventos.push({...evento});
</script>

<template>
  <main>
    <input v-model="evento.nome" />
    <br>
    <textarea v-model="evento.descricao"></textarea>
    <br>
    <input type="checkbox" v-model="evento.publicado" />
    Publicado <br>

    <input type="radio" value="ce" v-model="evento.local" /> CE
    <input type="radio" value="rn" v-model="evento.local" /> RN
    <input type="radio" value="pe" v-model="evento.local" /> PE
    <input type="radio" value="ba" v-model="evento.local" /> BA
    <br>

    Organizadores:
    <select v-model="evento.organizador">
      <option>Marie Curie</option>
      <option>Nikola Teura</option>
      <option>Allan Turing</option>
    </select>
    <br>

    Capacidade:
    <input v-model.number="evento.capacidade" />
    <br>

    <button @click="salvarEvento">Salvar</button>

    <pre>{{ eventos }}</pre>
  </main>
</template>

<!-- Templates dinamicos v-for para renderizar cada item de listas de forma dinamica
<script setup>
const pessoas = [
  'Marie Curie',
  'Nikola Teura',
  'Allan Turing',
  'Joao Jose'
];
</script>

<template>
  <main>
    <ul>
      <li v-for="pessoa in pessoas">{{ pessoa }}</li>
    </ul>
  </main>
</template>
-->

<!-- Templates dinamicos v-show parecido com um v-if, pois depende da condição para "exibir" 
<script setup>
import { ref } from 'vue';
const nome = ref('');
</script>

<template>
  <main>
    <input v-model="nome" />
    <div v-show="nome.length < 3">
      Informe um nome com mais de 3 letras
    </div>
    <div v-show="nome.length >= 3 && nome.length < 10">
      Ola, {{ nome }}!
    </div>
    <div v-show="nome.length >= 10">
      Ola, {{ nome }}!
      <br>
      Você não quer abreviar o seu nome?
    </div>
  </main>
</template>
-->

<!-- Templates dinamicos v-if: so vai acontecer se a condição for verdadeira, é reativo / v-else vai renderizar conforme o if falso / v-else-if com condição indicada (uso do if / else if / else como estrutura condicional)
<script setup>
import { ref } from 'vue';
const nome = ref('');
</script>

<template>
  <main>
    <input v-model="nome" />
    <div v-if="nome.length < 3">Informe um nome com mais de 3 letras</div>
    <div v-else-if="nome.length < 10">Ola, {{ nome }}!</div>
    <div v-else>
      Ola, {{ nome }}!
      <br>
      Você não quer abreviar o seu nome?
    </div>
  </main>
</template>
-->

<!-- Templates dinamicos v-bind: unilateral / v-model: bilateral
<script setup>
import { computed, ref } from 'vue';
const contador = ref(0);
const maxContador = 50;
const minContador = 1;
const inputNumber = {
  max: 100,
  min: 1
}
</script>

<template>
  <main>

    <input type="number" v-model="contador"/>
    <input type="number" :value="contador"/>

    <input type="number" :max="maxContador" :min="minContador"/>
    <input type="number" v-bind="inputNumber"/>
    <button v-on:click="console.log(`Click`)">Aperte</button>
    <button @click="console.log(`Click`)">Aperte</button>
  </main>
</template>
-->

<!-- Propriedade Computed
<script setup>
import { computed, ref } from 'vue';
const produtos = ref([]);
const novoProduto = {};
const salvar = () => {
  produtos.value.push({...novoProduto});
};

const valorTotal = computed(() => {
  const prods = produtos.value;
  let valorTotal = 0;
  if (prods.length) {
    const calcularTotalValor = (total, prod) => {
      return total + (prod.preco * prod.quantidade);
    };
    valorTotal = prods.reduce(calcularTotalValor, 0);
  }
  return valorTotal.toFixed(2);
});

const quantItens = computed(() => {
  const prods = produtos.value;
  let quant = 0;
  if (prods.length) {
    const calcularTotalItens = (total, prod) => {
      return total + prod.quantidade;
    };
    quant = prods.reduce(calcularTotalItens, 0);
  }
  return quant;
});

const listaProdutos = computed(() => {
  const prods = produtos.value;
  if (prods.length) {
    const gerarLiProd = (prod, index) => {
      const { nome, preco, quantidade } = prod;
      return `<li>${index}: ${nome} R$ ${preco} (${quantidade})</li>`;
    };
    const liProd = prods.map(gerarLiProd);
    const ulProd = liProd?.reduce((ul, li) => ul + li);
    return ulProd;
  } else {
    return `<li>Nenhum item cadastrado.</li>`
  }
});
</script>

<template>
  <main>
    <input type="text" v-model="novoProduto.nome" />
    <input type="number" v-model="novoProduto.preco" />
    <input type="number" v-model="novoProduto.quantidade" />
    <button @click="salvar">Salvar</button>
    <p>Quantidade de Itens: {{ quantItens }}</p>
    <p>Valor Total (R$): {{ valorTotal }}</p>
    <ul v-html="listaProdutos"></ul>
  </main>
</template> -->

<!-- Funções do tipo Methods de um objeto Vue
<script setup>
import { ref, computed } from 'vue';
const produtos =ref([]);
const produto = ref({});
const total = ref(0.0);

const salvar = () => {
  const prod = produto.value;
  produtos.value.push(`${prod.nome} (${prod.quantidade})`);
  const subtotal = prod.preco * prod.quantidade;
  total.value += subtotal;
};

// computed
const mensagem = computed(() => {
  const quant = produtos.value.length;
  if (quant <= 0) {
    return `Insira um novo produto!`;
  } else if (quant == 1) {
    return `Ha 1 produto cadastrado.`;
  } else {
    return `Ha ${quant} produtos cadastrados`;
  }
});

</script>

<template>
  <main>
    <p>{{ mensagem }}</p>
    <input type="text" v-model='produto.nome' />
    <input type="number" v-model='produto.preco' />
    <input type="number" v-model='produto.quantidade' />
    <button @click='salvar'>Salvar</button>
    <p>Produtos: {{ produtos.toString() }}</p>
    <p>Total: R$ {{ total.toFixed(2) }}</p>
  </main>
</template> -->

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
