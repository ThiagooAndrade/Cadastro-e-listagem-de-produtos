
import { HeaderComponent } from "./styles"

interface HeaderProps {
  text: string
}

export function Header(props: HeaderProps) {
  return (
    <HeaderComponent>
      <h1>{props.text}</h1>
    </HeaderComponent>
  )
}