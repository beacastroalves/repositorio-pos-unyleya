const { createApp } = Vue;
createApp({
  data() {
    return {
      itens: [],
    }
  },
  mounted() {
    fetch('./data.json')
      .then(data => data.json())
      .then(itens => this.itens = itens)
      .catch(error => console.log(error))
  }
}).mount('#app');