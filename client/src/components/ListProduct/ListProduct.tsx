import { Container } from "./styles"
import { loadProductsFromLocalStorage } from "../../ProductData/ProductData"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface ListProductDtoProps {
  name: string;
  price: string;
  available: boolean;
}

export function ListProduct() {
  const [ListProducts, setListProducts] = useState<ListProductDtoProps[]>([]);


  useEffect(() => {
    // Carrega os produtos do localStorage quando o componente é montado
    const storedProducts = loadProductsFromLocalStorage();
    setListProducts(storedProducts);
  }, []);

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Disponível</th>
            </tr>
          </thead>
          <tbody>
            {ListProducts.map((product) =>
            (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.available ? "Sim" : "Não"}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
        <div>
          <Link to={"/register"}>Cadastrar produto</Link>
        </div>
      </Container>
    </>
  )
}