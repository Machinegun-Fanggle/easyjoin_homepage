// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Consulting = () => {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)

    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤 효과
        })
    }

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
        if (ref2.current) observer.observe(ref2.current)
        if (ref3.current) observer.observe(ref3.current)
        if (ref4.current) observer.observe(ref4.current)
        if (ref5.current) observer.observe(ref5.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
            if (ref2.current) observer.unobserve(ref2.current)
            if (ref3.current) observer.unobserve(ref3.current)
            if (ref4.current) observer.unobserve(ref4.current)
            if (ref5.current) observer.unobserve(ref5.current)
        }
    }, [])

    return (
        <SPageWrapper>
            <SPage1Back>
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <SGradient>
                        <SPage1Front>
                            <SSmallText>이지조인</SSmallText>
                            <SMainText>
                                개발 기획부터 준공까지 <br />
                                맞춤형 부동산 개발 컨설팅{" "}
                            </SMainText>
                            <div>
                                <SSubText>
                                    전자계약 솔루션 외에 부동산 개발에 필요한 종합적인 컨설
                                    <br />팅 서비스를 제공합니다.
                                </SSubText>
                            </div>
                        </SPage1Front>
                    </SGradient>

                    <SPage1BackImg src={require("../../assets/Rectangle 23382.svg").default} />
                </div>
            </SPage1Back>
            <SButton
                onClick={() => {
                    scrollToTop()
                    navigate(`/register?service=${"부동산 개발 컨설팅"}`)
                }}
            >
                부동산개발 컨설팅 서비스 신청
            </SButton>
            <SPage2 ref={ref}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    부동산 <div style={{ color: "#2779F4" }}>개발 컨설팅</div>
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    개발 기획부터 준공 후 임대관리까지 통합 컨설팅을 제공하며
                    <br />
                    시행, 시공, 금융, 분양, 홍보까지 효과적이고 세심하게 처리합니다.
                </SSubText>
                <SPage2Img src={require("../../assets/Group 560.svg").default} />
                <SPage2Img src={require("../../assets/Group 561.svg").default} />

                <div
                    style={{
                        display: "flex",
                        margin: "100px 0 0 0",
                        justifyContent: "left",
                        width: "1200px",
                    }}
                >
                    <SLeftBorderText>투자유치</SLeftBorderText>
                </div>
                <SPage2_2Img src={require("../../assets/Group 549.svg").default} />
                <div
                    style={{
                        display: "flex",
                        margin: "100px 0 0 0",
                        justifyContent: "left",
                        width: "1200px",
                    }}
                >
                    <SLeftBorderText>개발사업관리(Project Management) 효과</SLeftBorderText>
                </div>
                <SPage2_3Img src={require("../../assets/Group 562.svg").default} />
            </SPage2>
        </SPageWrapper>
    )
}
export default Consulting

const SPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // background: blue;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
`

const SPage1Back = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: -1;
`
const SGradient = styled.div`
    display: flex;
    position: absolute;
    width: 1200px;
    height: 920px;
    z-index: 1;
    align-items: center;
    justify-content: left;
`

const SPage1BackImg = styled.img`
    position: relative;
    display: flex;
    flexdirection: column;
    overflowx: hidden;
    overflowy: hidden;
    height: 800px;
    width: 1920px;
    top: 0px;
`

const SPage1Img = styled.img`
    display: flex;
    width: 422px;
    height: 340px;
    border-radius: 20px;
`

const SPage1Front = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 780px;
    height: 368px;
    z-index: 2;
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

const SSmallText = styled.div`
    color: var(--grbk-500, #697077);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 20px */
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
    margin: 24px 0 0 0;
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
`

const SPage2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 220px 360px;
    justify-content: center;
    align-items: center;
    // opacity: 0;
    // transition: opacity 1s;

    &.animate {
        opacity: 1;
    }

    @media (max-width: 700px) {
        opacity: 1;
        animation: none;
        transition: none;
    }
`

const SPage2Img = styled.img`
    display: flex;
    margin: 80px 0 0 0;
    width: 100%;
    // height: 614px;
    border-radius: 20px;
`

const SPage2_2Img = styled.img`
    display: flex;
    margin: 32px 0 0 0;
    width: 100%;
    height: 118px;
    border-radius: 20px;
`

const SPage2_3Img = styled.img`
    display: flex;
    margin: 48px 0 0 0;
    width: 100%;
    height: 600px;
    border-radius: 20px;
`
const SLeftBorderText = styled.div`
    display: inline-flex;
    padding-left: 0px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    text-align: left;
    gap: 20px;
    border-left: 3px solid var(--2779F4, #2779f4);
    color: #000;
    padding-left: 20px; // 텍스트와 왼쪽 테두리 사이의 간격

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 28px */
`
const SButton = styled.div`
    position: absolute;
    top: 550px;
    left: 360px;
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 38.4px */
    margin: 52px 0 0 0;
    display: flex;
    width: 306px;
    height: 60px;
    padding: 0px 4px 4px 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--mGR-01, linear-gradient(90deg, #2779f4 0%, #4448d4 100%));
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 3;
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
    text-decoration: none; // 기본 상태에서 밑줄 제거
`
