// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>Meu primeiro componente</p>
//     </div>
//   );
// }

import "./styles.css"

const App = () => {
  const name = "Beatriz"

  return (
    <>
      <div className="container">
        <h1>Hello World</h1>
        <h2 className="subtitle">Hi, { name }</h2>
        <p>Um paragrafo dentro de uma div</p>
      </div>
    </>
  )
}

export default App;