import { useRef, useState } from "react";
import { v4 } from "uuid";
import {AddButton, Container, Product, TrashButton} from './styles'

function Home() {
  const [products, setProducts] = useState([]);
  const inputRef = useRef();

  function cliqueNoBotao() {
    console.log(v4());
    setProducts([{ id: v4(), nome: inputRef.current.value }, ...products]);
    inputRef.current.value = ''
  }

  function deletarProduto(id){
    setProducts(products.filter(products => products.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Tarefas:</h1>
      <input placeholder="  Escreva suas tarefas..." ref={inputRef} />
      <AddButton onClick={cliqueNoBotao}>Adicionar</AddButton>

      {products.map((products) => (
        <Product key={products.id}>
          <p>{products.nome}</p>
          <TrashButton onClick={() => deletarProduto(products.id)}>🗑️</TrashButton>
        </Product>
      ))}
    </Container>

  );
}

export default Home;
