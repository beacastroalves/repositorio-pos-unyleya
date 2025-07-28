const produtos = [
  { id: 1, nome: "Bola", preco: 38.98 },
  { id: 2, nome: "Fato de Treino", preco: 67.56 },
  { id: 3, nome: "Luvas", preco: 42.30 },
  { id: 4, nome: "Chuteira", preco: 81.87 },
];

const gerarListaProd = () => {
  return produtos.map(prod => {
    return `<li>
      ${prod.id} ${prod.nome} R$ ${prod.preco}
    </li>`;
  });
};

const produtosPageTemplate = `
 <h1>Produtos da Minha Loja</h1>

  <section>
    <ul>${gerarListaProd().join('')}</ul>
  </section>
`