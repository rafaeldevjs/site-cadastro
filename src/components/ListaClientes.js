import React from 'react';

export default function ListaClientes({ catalogoCliente }) {
  return (
    <div className="clientes-container">
      <h1>Clientes Cadastrados</h1>
      <ul>
        {catalogoCliente !== null ? (
          catalogoCliente.map(({ nome }) => {
            return <li key={nome}>{nome}</li>;
          })
        ) : (
          <h1>Sem itens</h1>
        )}
      </ul>
    </div>
  );
}
