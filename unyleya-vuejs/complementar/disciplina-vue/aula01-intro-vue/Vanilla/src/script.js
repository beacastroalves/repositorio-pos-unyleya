const listasTarefas = document.querySelector('#listasTarefas');
const dados = fetch('./data.json')
  .then(data => data.json())
  .then(itens => {
    itens.forEach(item => {
      const liItem = document.createElement('li');
      liItem.innerText = item.tarefa;
      if (item.situacao) {
        liItem.classList.add('done');
      }
      listasTarefas.appendChild(liItem);
    });
  })
  .catch(error => console.log(error));