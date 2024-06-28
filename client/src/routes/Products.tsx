import { Header } from "../components/Header/Header";
import { ListProduct } from "../components/ListProduct/ListProduct";
import { GlobalStyle } from "../styles/global";

export function Products() {
  return (
    <>
      <Header text="Listagem de produtos" />
      <ListProduct />
      <GlobalStyle />
    </>
  )
}