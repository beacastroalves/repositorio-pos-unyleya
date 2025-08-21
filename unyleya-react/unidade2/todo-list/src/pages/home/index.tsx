import { useState } from 'react';
import './style.css';

const Home = () => {

  const [titulo, setTitulo] = useState("");
  const [categoria, setcategoria] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className='container-home'>
      <div className='container-form'>
        <form>
          <h2>Cadastrar Tarefa</h2>
          <input type="text" placeholder="Titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} />

          <select value={categoria} onChange={(event) => setcategoria(event.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="estudo" >Estudo</option>
          </select>

          <input type="date" placeholder="Data" value={data} onChange={(event) => setData(event.target.value)} />

          <textarea placeholder="Descrição da tarefa" value={descricao} onChange={(event) => setDescricao(event.target.value)}></textarea>
          <button>Salvar</button>
        </form>
      </div>
      <div className='container-tarefas'>
        <h1>Minhas Tarefas</h1>
      </div>
    </div>
  );
};

export default Home;