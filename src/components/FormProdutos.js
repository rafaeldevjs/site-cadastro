import React from 'react';

export default function FormProdutos({ setCatalogo }) {
  const [produto, setProduto] = React.useState({
    nome: '',
    descricao: '',
    quantidade: 0,
    preco: '',
    foto: '',
  });
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    setCatalogo(list);
  }, [list]);
  const handleChange = (e) => {
    let newProduto = { ...produto, [e.target.id]: e.target.value };
    setProduto(newProduto);
  };
  const handleSubmit = () => {
    setList([...list, produto]);
    setCatalogo(list);
  };
  return (
    <div className="form-produto">
      <label htmlFor="nome">Nome: </label>
      <input onChange={handleChange} id="nome" type="text" />
      <label htmlFor="descricao">Descrição: </label>
      <input onChange={handleChange} id="descricao" type="text" />
      <label htmlFor="quantidade">Quantidade: </label>
      <input onChange={handleChange} id="quantidade" type="number" />
      <label htmlFor="preco">Preço: </label>
      <input onChange={handleChange} id="preco" type="text" />
      <label htmlFor="urlFoto">Url Foto: </label>
      <input onChange={handleChange} id="foto" type="text" />
      <button className="btn-mostrar" onClick={handleSubmit}>
        Cadastrar
      </button>
    </div>
  );
}
