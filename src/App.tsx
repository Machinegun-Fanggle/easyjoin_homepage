import React, { useEffect, useState } from "react"
import RootRouter from "./pages"
import theme from "./styles/themes"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/globalStyles"
import { RecoilRoot } from "recoil"

export default function App() {
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            const scale = Math.min(window.innerWidth / 1920, 1)
            setScale(scale)
        }

        // 컴포넌트 마운트 시 이벤트 리스너 추가
        window.addEventListener("resize", handleResize)

        // 초기 크기 조정
        handleResize()

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <StyledApp scale={scale}>
                    <RootRouter />
                </StyledApp>
            </ThemeProvider>
        </RecoilRoot>
    )
}

const StyledApp = styled.div<{ scale: number }>`
    transform: scale(${({ scale }) => scale});
    transform-origin: top left;
    width: 1920px; // 기준 너비
`
