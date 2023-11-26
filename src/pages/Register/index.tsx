// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Register = () => {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate")
                }
            },
            {
                threshold: 0.3,
            },
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <SPageWrapper>
            <SPage1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "1200px",
                    }}
                >
                    <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                        서비스 신청
                    </SMainText>
                    <SSubText>상담 문의를 남겨주시면 확인후 빠르게 연락드리겠습니다.</SSubText>
                </div>
                <SPage1Img src={require("../../assets/Group 550.svg").default} height={936} />

                <div
                    style={{
                        display: "flex",
                        marginTop: 130,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "1200px",
                    }}
                >
                    <SMainText style={{ color: "#000", fontSize: "32px", textAlign: "center" }}>
                        이지조인 서비스 도입 절차
                    </SMainText>
                    <SPage2Img src={require("../../assets/Frame 920.svg").default} />
                </div>
            </SPage1>

            <Container>
                <Span>가장 쉽고 빠른</Span>
                <Span style={{ marginTop: 20 }}>
                    부동산 전자계약 솔루션 <Span2>이지조인</Span2>
                </Span>
                <SButtonGroup style={{ justifyContent: "space-between" }}>
                    <SButton1>서비스 이용 관련</SButton1>
                    <SButton2>서비스 신청</SButton2>
                </SButtonGroup>
            </Container>
        </SPageWrapper>
    )
}
export default Register

const SPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // background: blue;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: fadeIn 1s ease-in-out;

    @media (max-width: 700px) {
        animation: none;
    }
`
const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 100px 364px 32px 364px;
    justify-content: center;
    align-items: center;
`

const SPage1Img = styled.img`
    display: flex;
    margin: 44px 0 0 0;
    width: 1200px;
    height: 160px;
    border-radius: 20px;
`

const SMainText = styled.div`
    display: flex;
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
    margin: 16px 0 0 0;
`

const SSubText = styled.div`
    margin: 12px 0 0 0;
    color: var(--whfff, #999999);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
`
const SPage2Img = styled.img`
    display: flex;
    margin: 80px 0 0 0;
    width: 75%;
    height: 100%;
    border-radius: 20px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f2f4f8;
    width: 100%;
    height: 400px;
    margin-top: 192px;
`

const Span = styled.span`
    color: var(--_000, #000000);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
`

const Span2 = styled(Span)`
    color: var(--_2779-f-4, #2779f4);
`

const SButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
`

const SButton1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--_2779-f-4, #2779f4);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-right: 20px;
    border-radius: 8px;
    padding: 20px 70px;
    border: 2px solid #2779f4;
    width: 160px;
`

const SButton2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    color: var(--_000, #ffffff);
    background: #2779f4;
    margin-left: 20px;
    border-radius: 8px;
    padding: 20px 70px;
    border: 2px solid #2779f4;
    width: 160px;
`
