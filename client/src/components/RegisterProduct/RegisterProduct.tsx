import { ChangeEventHandler, FormEvent, useState } from "react";
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import { products, saveProductsToLocalStorage } from "../../ProductData/ProductData";
import { Link } from "react-router-dom";



export function RegisterProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    available: true || false,
  });


  const handleChange: ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    const newValue = name === "available" ? value === "Sim" : value;

    setProduct({
      ...product,
      [name]: newValue,
    });
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Dados do formulário:', product);
    products.push(product);
    saveProductsToLocalStorage(products);
    navigate("/products");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do Produto:</label>
        <input type="text" id="name" name="name" value={product.name} required
          onChange={handleChange}
        />
        <label htmlFor="description">Descrição do Produto:</label>
        <input type="text" id="productDescription" name="description" value={product.description}
          onChange={handleChange} />
        <label htmlFor="price">Preço do Produto:</label>
        <input type="text" onInput={(e) => {
          (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/, '$1');
        }
        } id="productPrice" name="price" value={product.price} required
          onChange={handleChange} />
        <label>
          Disponível para venda:
          <select
            name="available"
            value={product.available.toString()}
            onChange={handleChange}
          >
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <div>
          <button type="submit">Cadastrar</button>
          <Link to={"/products"}>Voltar</Link>
        </div>
      </form>
    </Container>
  )
}