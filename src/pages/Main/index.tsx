// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Main = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

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

        if (ref1.current) observer.observe(ref1.current)
        if (ref2.current) observer.observe(ref2.current)
        if (ref3.current) observer.observe(ref3.current)

        return () => {
            if (ref1.current) observer.unobserve(ref1.current)
            if (ref2.current) observer.unobserve(ref2.current)
            if (ref3.current) observer.unobserve(ref3.current)
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
                            <SMainText>
                                성공분양을 위한
                                <br />
                                분양계약 전용 전자계약 솔루션
                            </SMainText>
                            <div>
                                <SSubText>
                                    부동산 개발 주체 및 각 단체가 회원을 더 쉽게 모집하고
                                    <br />
                                    다양한 단체의 가입 계약을 전자계약으로 체결하고 관리하는
                                    <br />
                                </SSubText>
                                <SSubText style={{ color: "#2779F4", margin: "0" }}>
                                    부동산 통합 전자계약 솔루션
                                </SSubText>
                                {/* <SButton>도입문의</SButton> */}
                            </div>
                        </SPage1Front>
                    </SGradient>

                    <SPage1BackImg src={require("../../assets/images/rectangle-7-bg-3cR.png")} />
                </div>
            </SPage1Back>
            <SButton to={"/inquiry"} onClick={scrollToTop}>
                도입문의
            </SButton>
            <SPage2 ref={ref1}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    부동산 개발 컨설팅
                    <br />
                    이지조인에서 해결해드립니다!
                </SMainText>
                <SSubText style={{ color: "#000", fontSize: "22px", textAlign: "center" }}>
                    이지조인은 부동산 사업장별 맞춤 서비스로
                    <br />
                    사업의 성공율을 높여주는 통합 서비스입니다.
                </SSubText>

                <SPage2Img src={require("../../assets/Rectangle 8.svg").default} />

                <SPage2Border>
                    <SBorderLeft>
                        <SBorderImg src={require("../../assets/images/contract-3-1-wPB.png")} />
                        <STextWarpper>
                            <SBorderMainText>
                                부동산 개발 컨설팅 어렵게 느껴지시나요?
                            </SBorderMainText>
                            <SBorderSubText>이지조인에서 쉽게 진행하세요!</SBorderSubText>
                        </STextWarpper>
                    </SBorderLeft>

                    <SBorderBtn to={"/inquiry"} onClick={scrollToTop}>
                        이지조인에 의뢰하기
                        <SArrowRight src={require("~/assets/arrow-right.svg").default} />
                    </SBorderBtn>
                </SPage2Border>
            </SPage2>

            <SPage3>
                <SPage3Text ref={ref2}>
                    가장 쉽고 빠른
                    <br />
                    <div style={{ display: "flex" }}>
                        부동산 전자계약 솔루션{" "}
                        <div style={{ color: "#2779F4", margin: "0 0 0 10px" }}>이지조인</div>
                    </div>
                </SPage3Text>
                <SBtnWrapper ref={ref3}>
                    <SPage3Btn onClick={scrollToTop} to={"/register"}>
                        서비스 신청하기
                    </SPage3Btn>
                    <SPage3Btn
                        onClick={scrollToTop}
                        to={"/inquiry"}
                        style={{ background: "#fff", color: "#000" }}
                    >
                        도입문의
                    </SPage3Btn>
                </SBtnWrapper>
            </SPage3>
        </SPageWrapper>
    )
}
export default Main

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

    background: linear-gradient(
        90deg,
        #15191e 14.58%,
        rgba(21, 25, 30, 0) 100%
    ); /* 초기 배경 설정 */
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

const SMainText = styled.div`
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
`

const SSubText = styled.div`
    margin: 36px 0 0 0;
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
`

const SButton = styled(Link)`
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
    width: 280px;
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

const SPage2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 200px 364px;
    justify-content: center;
    align-items: center;

    opacity: 0;
    // transition: opacity 1s;

    &.animate {
        opacity: 1;
    }

    @media (max-width: 700px) {
        animation: none;
        transition: none;
    }
`

const SPage2Img = styled.img`
    display: flex;
    margin: 63px 0 0 0;
    width: 100%;
    height: 443px;
    border-radius: 20px;
`

const SPage2Border = styled.div`
    display: flex;
    margin: 60px 0 0 0;
    width: 100%;
    height: 160px;
    border-radius: 12px;
    background: var(--grbk-50, #f2f4f8);
    justify-content: space-between;
    align-items: center;
    color: var(--FFFFFF, #fff);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const SBorderLeft = styled.div`
    display: flex;
    width: 100%;
    padding: 44px 96px 44px 62px;
    justify-content: left;
    align-items: center;
`

const SBorderImg = styled.img`
    display: flex;
    width: 63px;
    height: 72px;
`

const STextWarpper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 12px;
`

const SBorderMainText = styled.div`
    color: var(--0858F7, #0858f7);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
`

const SBorderSubText = styled.div`
    color: var(--0858F7, #0858f7);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 8px 0 0 0;
`

const SBorderBtn = styled(Link)`
    color: var(--whfff, #fff);
    display: inline-flex;
    width: 500px;
    padding: 20px 32px;
    margin: 0 96px 0 0;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background: var(--mGR-01, linear-gradient(90deg, #2779f4 0%, #4448d4 100%));
    cursor: pointer;
    text-decoration: none; // 기본 상태에서 밑줄 제거
`

const SArrowRight = styled.img`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-left: 8px solid #fff;
`

const SPage3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    justify-content: center;
    align-items: center;
    background: var(--grbk-900, #15191e);
`

const SPage3Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--whfff, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 56px */
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

const SBtnWrapper = styled.div`
    display: flex;
    margin: 60px 0 0 0;
    color: var(--2779F4, #2779f4);
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    gap: 24px;
    opacity: 0;
    // transition: opacity 1s;

    &.animate {
        opacity: 1;
    }

    @media (max-width: 700px) {
        opacity: 0;
        animation: none;
        transition: none;
    }
`

const SPage3Btn = styled(Link)`
    display: flex;
    width: 304px;
    height: 63px;
    padding: 0px 4px 4px 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    border: 1px solid var(--whfff, #fff);
    cursor: pointer;
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 38.4px */
    text-decoration: none; // 기본 상태에서 밑줄 제거
`
