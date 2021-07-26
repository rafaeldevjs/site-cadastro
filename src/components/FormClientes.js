import React from 'react';

export default function FormClientes({ setCatalogoCliente }) {
  const [cliente, setCliente] = React.useState({
    nome: '',
    endereco: '',
    telefone: 0,
    email: '',
  });
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    setCatalogoCliente(list);
  }, [list]);
  const handleChange = (e) => {
    let newProduto = { ...cliente, [e.target.id]: e.target.value };
    setCliente(newProduto);
  };
  const handleSubmit = () => {
    setList([...list, cliente]);
    setCatalogoCliente(list);
  };
  return (
    <div className="form-cliente">
      <label htmlFor="nome">Nome: </label>
      <input onChange={handleChange} id="nome" type="text" />
      <label htmlFor="endereco">Endereço: </label>
      <input onChange={handleChange} id="endereco" type="text" />
      <label htmlFor="telefone">Telefone: </label>
      <input onChange={handleChange} id="telefone" type="text" />
      <label htmlFor="email">Email: </label>
      <input onChange={handleChange} id="email" type="email" />
      <button className="btn-mostrar" onClick={handleSubmit}>
        Cadastrar
      </button>
    </div>
  );
}
