const carrinho = [
  { id: 1, nome: "Bola", preco: 38.98, quant: 10 },
  { id: 2, nome: "Fato de Treino", preco: 67.56, quant: 15 },
  { id: 4, nome: "Chuteira", preco: 81.87, quant: 2 },
];

const gerarListaCarrinho = () => {
  return carrinho.map(prod => {
    return `
    <li>
      ${prod.id} -
      ${prod.nome} -
      Quantidade: ${prod.quant} -
      R$ ${(prod.preco * prod.quant).toFixed(2)}
    </li>`;
  });
};

const carrinhoPageTemplate = `
 <h1>Minha Loja</h1>
  <section>
    <ul>
      ${gerarListaCarrinho().join('')}
    </ul>
  </section>
`