import React, { useState } from 'react';
import './style.css';
import { IoTrashOutline, IoCreate } from 'react-icons/io5';

interface Task {
  id: string,
  title: string;
  category: string;
  description: string;
  date: string;
}

const tasks = [
  {
    id: "098704654",
    title: "Tarefa 1",
    category: "Trabalho",
    description: "Descrição teste 1",
    date: "2025-08-23"
  },
  {
    id: "654132897",
    title: "Tarefa 2",
    category: "Trabalho",
    description: "Descrição teste 2",
    date: "2025-08-26"
  },
  {
    id: "321546895",
    title: "Tarefa 3",
    category: "Estudo",
    description: "Descrição teste 3",
    date: "2025-08-10"
  },
]

const Home = () => {

  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  const [tarefas, setTarefas] = useState(tasks);

  const [editando, setEditando] = useState(false);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (id) {
      editTask();
    } else {
      setTarefas([...tarefas,
        {
          id: String(Date.now()),
          title: titulo,
          category: categoria,
          date: data,
          description: descricao
        }
      ]);

      limpaFormulario();
    }
  };

  const preencheEstados = (tarefa: Task) => {
    setEditando(true);
    setId(tarefa.id);
    setTitulo(tarefa.title);
    setCategoria(tarefa.category);
    setDescricao(tarefa.description);
    setData(tarefa.date);
  };

  const editTask = () => {
    const posicaoArray = tarefas.findIndex((tarefa) => tarefa.id === id);

    const copiaTarefas = [...tarefas];

    copiaTarefas[posicaoArray] = {
      id: id,
      title: titulo,
      category: categoria,
      date: data,
      description: descricao
    }

    setTarefas(copiaTarefas);

    limpaFormulario();
  };

  const limpaFormulario = () => {
    setEditando(false);
    setId("");
    setTitulo("");
    setCategoria("");
    setDescricao("");
    setData("");
  }

  return (
    <div className='container-home'>
      <div className='container-form'>
        <form onSubmit={submitForm}>
          <h2>{editando ? "Editar" : "Cadastrar" } Tarefa</h2>
          <input type="text" placeholder="Titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} />

          <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudo" >Estudo</option>
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
                <li key={tarefa.id}>
                  <div className='itens-left'>
                    <h4>{tarefa.title} - {tarefa.id}</h4>
                    <p>{tarefa.category}</p>
                    <p>{tarefa.description}</p>
                  </div>
                  <div className='itens-right'>
                    <p>{tarefa.date}</p>
                    <div className='tarefas-buttons'>
                      <IoCreate color="green" size={20} className='io-button' onClick={() => preencheEstados(tarefa)} title='Editar' />
                      <IoTrashOutline color="red" size={20} className='io-button' onClick={() => alert("Apagando")} title='Apagar' />
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