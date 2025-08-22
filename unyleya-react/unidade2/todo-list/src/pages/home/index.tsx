import React, { useState } from 'react';
import './style.css';

const tasks = [
  {
    title: "Tarefa 1",
    category: "Trabalho",
    description: "Descrição teste 1",
    date: "22-08-2025"
  },
  {
    title: "Tarefa 2",
    category: "Trabalho",
    description: "Descrição teste 2",
    date: "22-08-2025"
  },
  {
    title: "Tarefa 3",
    category: "Estudo",
    description: "Descrição teste 3",
    date: "22-08-2025"
  },
]

const Home = () => {

  const [titulo, setTitulo] = useState("");
  const [categoria, setcategoria] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  const [tarefas, setTarefas] = useState(tasks);
  console.log(setTarefas);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ titulo, categoria, data, descricao});
  };

  return (
    <div className='container-home'>
      <div className='container-form'>
        <form onSubmit={submitForm}>
          <h2>Cadastrar Tarefa</h2>
          <input type="text" placeholder="Titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} />

          <select value={categoria} onChange={(event) => setcategoria(event.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="estudo" >Estudo</option>
          </select>

          <input type="date" placeholder="Data" value={data} onChange={(event) => setData(event.target.value)} />

          <textarea placeholder="Descrição da tarefa" value={descricao} onChange={(event) => setDescricao(event.target.value)}></textarea>
          <button type='submit'>Salvar</button>
        </form>
      </div>
      <div className='container-tarefas'>
        <h2>Minhas Tarefas</h2>
        <ul>
          {
            tarefas.map((tarefa) => (
                <li>
                  <div className='itens-left'>
                    <h4>{tarefa.title}</h4>
                    <p>{tarefa.category}</p>
                    <p>{tarefa.description}</p>
                  </div>
                  <div className='itens-right'>
                    <p>{tarefa.date}</p>
                    <div className='tarefas-buttons'>
                      <button>Editar</button>
                      <button>Apagar</button>
                    </div>
                  </div>
                </li>
              )
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default Home;