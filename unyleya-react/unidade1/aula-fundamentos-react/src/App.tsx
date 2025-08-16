import Box from "./box";
import Card from "./Card";
import "./styles.css"

const App = () => {
  const name = "Beatriz"

  return (
    <>
      <div className="container">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Card />
        <Card />
        <Card />
        <h1>Hello World</h1>
        <h2 className="subtitle">Hi, { name }</h2>
        <p>Um paragrafo dentro de uma div</p>
      </div>
    </>
  )
}

export default App;