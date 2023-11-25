import React from "react"
import RootRouter from "./pages"
import { RecoilRoot } from "recoil"

export default function App() {
    return (
        <RecoilRoot>
            <RootRouter />
        </RecoilRoot>
    )
}