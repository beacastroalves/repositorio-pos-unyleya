import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Topico from './components/Topico.vue';
import Respostas from './components/Respostas.vue';
import Menu from './components/Menu.vue';

const app = createApp(App);

app.component('Topico', Topico);
app.component('Respostas', Respostas);
app.component('Menu', Menu);

app.mount('#app');
