import React from "react"
import RootRouter from "./pages"
import theme from "./styles/themes"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/globalStyles"
import { RecoilRoot } from "recoil"

export default function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RootRouter />
            </ThemeProvider>
        </RecoilRoot>
    )
}
