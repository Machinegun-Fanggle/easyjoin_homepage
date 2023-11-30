// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Homepage = () => {
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
                            <SMainText>홈페이지 제작 서비스</SMainText>
                            <div>
                                <SSubText>
                                    접속 통계자료의 자동수집, 분석을 통한 체계적인 마케팅 관리가
                                    <br /> 가능한 분양 현장에 특화된 맞춤형 홈페이지를
                                    제작해드립니다.
                                </SSubText>
                            </div>
                        </SPage1Front>
                    </SGradient>

                    <SPage1BackImg src={require("../../assets/images/rectangle-22-bg.png")} />
                </div>
            </SPage1Back>
            <SButton
                onClick={() => {
                    scrollToTop()
                    navigate(`/register?service=${"홈페이지 제작"}`)
                }}
            >
                홈페이지 제작 신청
            </SButton>
            <SPage2 ref={ref}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    부동산 분양 현장에 <div style={{ color: "#2779F4" }}>특화된 홈페이지 </div>제작
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    스마트폰이나 pc, 태블릿 등 다양한 환경에 맞춰 최적화된 화면을 나타내는 반응형 웹
                </SSubText>
                <SPage2Img src={require("../../assets/Group 543.svg").default} />
                <SPage2_2Img src={require("../../assets/Group 544.svg").default} />
            </SPage2>

            <SPage3 ref={ref3}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    주요 서비스
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    서비스 기간 내 무상서비스를 지원합니다.{" "}
                </SSubText>
                <SPage3Img src={require("../../assets/Group 545.svg").default} height={936} />
            </SPage3>
        </SPageWrapper>
    )
}
export default Homepage

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
    height: 920px;
    align-items: center;
    justify-content: center;
    z-index: -1;
`
const SGradient = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 920px;
    z-index: 1;
    align-items: center;
    justify-content: center;

    background: linear-gradient(90deg, #15191e 58%, rgba(21, 25, 30, 0) 100%); /* 초기 배경 설정 */
`

const SPage1BackImg = styled.img`
    position: relative;
    display: flex;
    flexdirection: column;
    overflowx: hidden;
    overflowy: hidden;
    height: 920px;
    width: 1920px;
`

const SPage1Front = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1200px;
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
    opacity: 0;
    transition: opacity 1s;

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
    height: 696px;
    border-radius: 20px;
`

const SPage2_2Img = styled.img`
    display: flex;
    margin: 240px 0 0 0;
    width: 100%;
    height: 589px;
    border-radius: 20px;
`

const SPage3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 0px 362px 200px 362px;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: opacity 1s;

    &.animate {
        opacity: 1;
    }

    @media (max-width: 700px) {
        opacity: 1;
        animation: none;
        transition: none;
    }
`

const SPage3Img = styled.img`
    display: flex;
    margin: 80px 0 0 0;
    width: 1200px;
    height: 936px;
    border-radius: 20px;
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
