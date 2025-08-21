import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const incrementValue = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log(`Count aumentou para ${count}`);
  }

  const decrementValue = () => {
    setCount(count - 1);
    console.log(`Count diminuiu para ${count}`)
  }

  const changeValue = () => {
    setCount(300)
  }


  return (
    <div>
      <h1>{count}</h1>

      <button onClick={incrementValue}>Incrementar</button>
      <button onClick={decrementValue}>Decrementar</button>
      <button onClick={changeValue}>Setar 300</button>
    </div>
  );
};

export default App;