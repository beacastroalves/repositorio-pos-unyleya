<script setup>
import { reactive, ref } from 'vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';

const router = useRouter();

const usuario = reactive({});
const temUsuario = ref(false);
const mensagem = ref(null);

const acessar = () => {
  fetch('/src/assets/dados.json')
    .then(res => res.json())
    .then(dados => {
      temUsuario.value = dados.usuarios
        .some(usu => {
          const emailVal = usu.email == usuario.email;
          const senhaVal = usu.senha == usuario.senha;
          return emailVal && senhaVal;
        })
        if (temUsuario) {
          sessionStorage
            .setItem('usuario', usuario);
          router.push('/dashboard')
        }
    })
    .catch(err => mensagem.value = err);
}
</script>

<template>
  <main>
    <form>
      <div>
        <label>E-mail:</label>
        <input type="email" v-model="usuario.email" placeholder="Digite seu email">
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" v-model="usuario.senha" placeholder="Digite sua senha">
      </div>
      <button @click.prevent="acessar">Acessar</button>
    </form>
    <p v-show="temUsuario">Usuário autenticado: {{ usuario.email }}</p>
  </main>
</template>

<style scoped>
main > form {
  display: flex;
  flex-direction: column;
  margin: 16px auto;
  padding: 8px;
  max-width: 500px;
}

main > form > div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 4px;
  padding: 8px;
}

main > form > div > label {
  padding: 16px;
}

main > form > div > input {
  padding: 16px;
  flex: 1;
}

main > p {
  background-color: #d9d9d9;
  color: #494949;
  border-radius: 4px;
  text-align: center;
  margin: 4px 16px;
  padding: 16px 4px;
}

main > form > button {
  margin: 4px;
  padding: 16px;
  background-color: rgb(0, 189, 126);
  color: #d9d9d9;
  border: none;
  border-radius: 4px;
  transition: 0.2s;
  user-select: none;
  cursor: pointer;
}

main > form > button:hover {
  background-color: rgba(0, 189, 126, 0.7);
}

main > form > button:active {
  background-color: rgba(0, 189, 126, 0.5);
}
</style>