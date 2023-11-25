import React, { Suspense, useEffect, useState } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Main from "./Main"
import Service from "./Service"
import Contract from "./Contract"
import Homepage from "./Homepage"
import Consulting from "./Consulting"
import ApplyService from "./ApplyService"
import Application from "./Application"
import Announcement from "./Announcement"
import QnA from "./QnA"
import Press from "./Press"
import { styled } from "styled-components"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
// const Main = React.lazy(() => import("./main/index"))

export default function RootRouter() {
    const [windowDefine, setWindowDefine] = useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
    })
    const navigate = useNavigate()
    const current = useLocation().pathname

    useEffect(() => {
        window.addEventListener("resize", () =>
            setWindowDefine({
                ...windowDefine,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            }),
        )

        return () => {
            window.removeEventListener("resize", () => {})
        }
    }, [])

    return (
        <SWrapper>
            <SMainWrapper>
                <Routes>
                    <Route path={"/"} element={<Main />} />
                    <Route path={"/service"} element={<Service />} />
                    <Route path={"/contract"} element={<Contract />} />
                    <Route path={"/homepage"} element={<Homepage />} />
                    <Route path={"/consulting"} element={<Consulting />} />
                    <Route path={"/apply-service"} element={<ApplyService />} />
                    <Route path={"/application"} element={<Application />} />
                    <Route path={"/announcement"} element={<Announcement />} />
                    <Route path={"/qna"} element={<QnA />} />
                    <Route path={"/press"} element={<Press />} />
                </Routes>
                <Footer />
            </SMainWrapper>
            <Header />
        </SWrapper>
    )
}

const SWrapper = styled.div`
    max-width: 1920px;
`

const SMainWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    overflow-x: hidden;
    overflow-y: scroll;
`
