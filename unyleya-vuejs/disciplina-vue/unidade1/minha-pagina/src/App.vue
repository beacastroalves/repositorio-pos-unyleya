<script setup>
import { ref, reactive, watch, computed } from 'vue';

let me = ref({});
let messages = reactive([]);
let newMessage = ref(null);
let hasNewMessage = ref(false);
let actualMenu = ref(0);
let menu = [
  `Sobre Mim`,
  `Academico`,
  `Profissional`,
  `Contatos`
];

let changeMenu = (menuIndex) => actualMenu.value = menuIndex;
let sendMsg = () => {
  if (!newMessage.value?.trim()) {
    return;
  }

  const date = new Date().toLocaleString('pt-BR');
  const text = newMessage.value;
  messages.push({text, date});
  newMessage.value = null;
}
let closeAlert = () => hasNewMessage.value = false;

const titlePage = computed(() => menu[actualMenu.value]);

fetch('src/assets/aboutme.json')
  .then(res => res.json())
  .then(data => me.value = data);

watch(() => messages.length, (newMsg, oldMsg) => {
  if (newMsg > oldMsg) {
    hasNewMessage.value = true;
  }
});
</script>

<template>
  <div class="layout">
    <header>
      <a v-for="(item, index) in menu"
        :key="'menuItem' + index"
        @click="changeMenu(index)" v-bind:class="{ 'active': index === actualMenu }">
          {{ item }}
      </a>

      <div class="alert" v-if="hasNewMessage">
        <p>Nova mensagem no bate-papo</p>
        <a @click="closeAlert">X</a>
      </div>

    </header>
    <main>
      <!-- Sessão Sobre Mim -->
      <section v-show="actualMenu === 0" class="about-me-section">
        <img src="./assets/me.jpeg" alt="Fotografia da Beatriz Castro" />
        <div class="wrapper">
          <div class="greetings">
            <p class="title">{{ me.name }}</p>
            <p class="description">{{ me.description }}</p>
          </div>
        </div>
      </section>

      <!-- Sessão Formação Academia -->
      <section v-show="actualMenu === 1" class="academic-section">
        <h2>Formação Acadêmica</h2>
        <div v-for="item in me.academic || []"
            :key="item.instituition + item.year"
            class="academic-item">
              <h3>{{ item.course }}</h3>
              <p class="institution">{{ item.instituition }}</p>
              <p class="year">{{ item.year }}</p>
        </div>
      </section>

      <!-- Sessão Experiência Profissional -->
      <section v-show="actualMenu === 2" class="professional-section">
        <h2>Experiência Profissional</h2>
        <div v-for="job in me.professional || []"
            :key="job.company + job.period"
            class="professional-item">
              <h3>{{ job.occupation }}</h3>
              <hr>
              <h4>{{ job.company }}</h4>
              <p class="period">{{ job.period }}</p>
              <div class="job-description">
                <p>{{ job.jobs }}</p>
              </div>
        </div>
      </section>

      <!-- Sessão Contatos -->
      <section v-show="actualMenu === 3" class="contact-section">
        <h2>Contatos</h2>
        <div class="contact-list">
          <div v-for="contact in me.contacts || []"
              :key="contact.type"
              class="contact-item">
                <span class="contact-type">{{ contact.text }}: </span>
                <a v-if="contact.type === 'link'" :href="contact.contact" target="_blank" rel="noopener noreferrer">
                  {{ contact.contact }}
                </a>
                <span v-else>{{ contact.contact }}</span>
          </div>
        </div>
      </section>

    </main>
    <footer>
      <h2>Chat</h2>
      <span v-for="(msg, index) in messages"
            class="msg__chat">
              <p>{{ msg.text }}</p>
              <span>{{ msg.date }}</span>
      </span>
      <div class="form__chat">
        <textarea v-model="newMessage"></textarea>
        <button @click="sendMsg">Enviar</button>
      </div>
    </footer>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.layout {
  font-family: Arial, sans-serif;
  max-width: 960px;
  margin: 24px auto;
  padding: 24px;
  background-color: #f9f9f9;
  border: 1px solid #dddddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dddddd;
  position: relative;
}

header a {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #e9e9e9;
  color: #333333;
  text-decoration: none;
  font-weight: normal;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  border: 1px solid #bbbbbb;
  flex: 1;
  text-align: center;
}

header a:hover {
  background-color: #d9d9d9;
  color: #222222;
  user-select: none;
}

header a.active {
  color: #e9e9e9;
  background-color: #333333;
}

header h1 {
  font-size: 1.6em;
  color: #333333;
  margin-top: 8px;
}

.alert {
  position: absolute;
  top: -32px;
  right: -16px;
  background-color: #c3e2ca;
  color: #0b481a;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75em;
  border: 1px solid #9bcba6;
}

section {
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #f1f1f1;
  border: 1px solid #eeeeee;
}

h2 {
  font-size: 1.6em;
  color: #333;
  text-align: center;
  margin-bottom: 16px;
}

h3 {
  font-size: 1.2em;
  color: #444444;
}

.about-me-section {
  text-align: center;
}

img {
  display: block;
  margin: 0 auto 16px;
  border-radius: 50%;
  border: 2px solid #eeeeee;
  width: 125px;
  height: 125px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
}

.greetings .title {
  font-size: 1.8em;
  color: #333333;
  margin-bottom: 8px;
  font-weight: bold;
}

.greetings .description {
  font-size: 0.9em;
  line-height: 1.5;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
}

.academic-item {
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.academic-item .institution,
.academic-item .year {
  font-size: 0.85em;
  color: #666666;
}

.professional-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.professional-item {
  margin: 0 auto;
  max-width: 600px;
}

.professional-item hr {
  border: 0;
  height: 1px;
  background-color: #dddddd;
  margin: 8px 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}

.professional-item h4 {
  color: #666666;
  margin-bottom: 4px;
}

.professional-item .period {
  font-size: 0.85em;
  color: #777777;
  margin-bottom: 8px;
}

.professional-item .job-description p {
  font-size: 0.9em;
  color: #555555;
  line-height: 1.5;
  text-align: justify;
  white-space: pre-wrap;
}

.contact-section {
  text-align: center;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-type {
  font-weight: bold;
  color: #555555;
  font-size: 0.95em;
  margin-bottom: 4px;
}

.contact-item a,
.contact-item span {
  color: #666666;
  text-decoration: none;
  font-size: 0.9em;
  word-break: break-all;
}

.contact-item a:hover {
  text-decoration: underline;
}

footer {
  padding: 16px;
  background-color: #f0f0f0;
  border-top: 1px solid #dddddd;
  border-radius: 0 0 8px 8px;
}

footer h2 {
  font-size: 1.6em;
  color: #333333;
  text-align: center;
  margin-bottom: 16px;
}

.msg__chat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #d6ffdb;
  padding: 8px 10px;
  border-radius: 12px 12px 0 12px;
  max-width: 75%;
  align-self: flex-start;
  margin-bottom: 4px;
}

.msg__chat .msg-text {
  font-size: 0.85em;
  color: #33ccc3;
  word-wrap: break-word;
}

.msg__chat .msg-date {
  font-size: 0.65em;
  color: #888888;
  margin-top: 4px;
}

.form__chat {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.form__chat textarea {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  min-height: 35px;
  font-size: 0.95em;
}
.form__chat textarea:focus {
  outline: 1px solid #bbb;
}
.form__chat button {
  padding: 8px 15px;
  background-color: #1eaa2e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95em;
  transition: background-color 0.2s ease;
}

.form__chat button:hover {
  background-color: #188e25;
}


@media (min-width: 768px) {
  .layout {
    margin: 32px auto;
    padding: 24px;
  }

  header {
    justify-content: space-between;
  }

  .alert {
    top: -48px;
    right: -20px;
  }

  section {
    padding: 30px 20px;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 1.3em;
  }

  h4 {
    font-size: 1.1em;
  }
  .greetings .title {
    font-size: 2.5em;
  }

  .greetings .description {
    font-size: 1em;
  }

  .academic-item {
    padding: 4px 16px;
  }

  .academic-item .institution,
  .academic-item .year {
    font-size: 0.95em;
  }

  .professional-item h3 {
    font-size: 1.4em;
  }

  .professional-item .period {
    font-size: 0.95em;
  }

  .professional-item .job-description p {
    font-size: 0.95em;
  }
}
</style>