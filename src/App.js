import React from 'react';

import FormProdutos from './components/FormProdutos';
import FormClientes from './components/FormClientes';
import ListaProdutos from './components/ListaProdutos';
import ListaClientes from './components/ListaClientes';

function App() {
  const [catalogoProdutos, setCatalogoProdutos] = React.useState(null);
  const [catalogoCliente, setCatalogoCliente] = React.useState(null);
  const [mostrar, setMostrar] = React.useState({
    produto: false,
    cliente: false,
  });
  React.useEffect(() => {
    const dataProdutos = JSON.parse(localStorage.getItem('catalogo-produtos'));
    if (dataProdutos !== null) {
      setCatalogoProdutos(dataProdutos);
    }
  }, []);
  React.useEffect(() => {
    const dataClientes = JSON.parse(localStorage.getItem('catalogo-clientes'));
    if (dataClientes !== null) {
      setCatalogoCliente(dataClientes);
    }
  }, []);
  React.useEffect(() => {
    console.log('produtos mudou');
    localStorage.setItem('catalogo-produtos', JSON.stringify(catalogoProdutos));
    localStorage.setItem('catalogo-clientes', JSON.stringify(catalogoCliente));
  }, [catalogoProdutos, catalogoCliente]);
  return (
    <div className="App">
      <div className="btn-content">
        <button
          className="btn-mostrar"
          onClick={() => {
            let value = mostrar.produto;
            setMostrar({ produto: !value });
          }}
        >
          Adicionar Produto
        </button>
        <button
          className="btn-mostrar"
          onClick={() => {
            let value = mostrar.cliente;
            setMostrar({ cliente: !value });
          }}
        >
          Adicionar Cliente
        </button>
      </div>
      {mostrar.produto && (
        <>
          {' '}
          <FormProdutos setCatalogo={setCatalogoProdutos} />
        </>
      )}

      {mostrar.cliente && (
        <>
          <FormClientes setCatalogoCliente={setCatalogoCliente} />
        </>
      )}
      <ListaProdutos catalogoProdutos={catalogoProdutos} />
      <ListaClientes catalogoCliente={catalogoCliente} />
    </div>
  );
}

export default App;
