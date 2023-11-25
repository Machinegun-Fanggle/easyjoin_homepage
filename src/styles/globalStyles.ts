import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {

  }
  ::-webkit-scrollbar {
    display: none;
  }

`
export default GlobalStyle
