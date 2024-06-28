import { Header } from "../components/Header/Header";
import { RegisterProduct } from "../components/RegisterProduct/RegisterProduct";
import { GlobalStyle } from "../styles/global";



export function Register() {
  return (
    <>
      <Header text="Cadastro de produtos" />
      <RegisterProduct />
      <GlobalStyle />
    </>
  )
}