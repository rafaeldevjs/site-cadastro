import React from 'react';

export default function ListaProdutos({ catalogoProdutos }) {
  return (
    <div className="produtos-container">
      <h1>Produtos Cadastrados</h1>
      <ul>
        {catalogoProdutos !== null ? (
          catalogoProdutos.map(
            ({ nome, descricao, foto, preco, quantidade }) => {
              return (
                <li key={nome}>
                  <h1>{nome}</h1>
                  <img src={foto} alt="" />
                  <h2>Descrição:</h2>
                  <p>{descricao}</p>
                  <h1>Preço: R${preco}</h1>
                  <p>Quantidade disponivel: {quantidade}</p>
                </li>
              );
            }
          )
        ) : (
          <h1>Sem itens</h1>
        )}
      </ul>
    </div>
  );
}
