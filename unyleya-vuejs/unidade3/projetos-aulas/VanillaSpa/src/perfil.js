const usuario = {
  id: 1,
  nome: "Alan Turing",
  email: "alan@turing.com"
};

const perfilPageTemplate = `
  <h1>Meu Pefil</h1>
  <section>
      <p># ${usuario.id}</p>
      <p>Nome: ${usuario.nome}</p>
      <p>Email: ${usuario.email}</p>
    </section>
`