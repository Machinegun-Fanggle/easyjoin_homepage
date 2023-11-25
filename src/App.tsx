import React from "react"
import RootRouter from "./pages"
import Header from "./Header"
import { RecoilRoot } from "recoil"

export default function App() {
    return (
        <RecoilRoot>
            <Header/>
            <RootRouter />
        </RecoilRoot>
    )
}
