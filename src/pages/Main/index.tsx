// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Main = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤 효과
        })
    }

    // 서비스에 따른 등록 페이지로 이동하는 함수
    const handleRegister = (serviceType: string) => {
        scrollToTop()
        navigate(`/register?service=${serviceType}`)
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
                            <SMainText>이지조인 서비스</SMainText>
                            <div>
                                <SSubText>
                                    이지조인은 성공적인 부동산 개발 사업을 위해
                                    <br />
                                    전자계약솔루션 / 부동산개발컨설팅 / 홈페이지 제작 등
                                    <br />
                                    종합 서비스를 제공하고 있습니다.
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
            </SPage2>

            <SPage3 ref={ref2}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    이지조인 서비스
                </SMainText>

                <div style={{ display: "flex", margin: "80px 0 0 0" }}>
                    <div style={{ display: "flex" }}>
                        <img
                            src={require("../../assets/Rectangle 5.svg").default}
                            width={560}
                            height={300}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "39px 0px 38px 68px",
                            }}
                        >
                            <SPage3Title>이지조인 전자계약 솔루션</SPage3Title>
                            <SPage3Text>
                                분양현장에서 복잡하고 번거로운 분양계약을
                                <br />
                                스마트폰 본인인증으로 간편하게 전자계약으로 체결하고
                                <br />
                                관리하는 전자계약 솔루션
                            </SPage3Text>
                            <div style={{ display: "flex", gap: "10px", margin: "32px 0 0 0" }}>
                                <SBlueBtn
                                    onClick={() => {
                                        scrollToTop()
                                        navigate("/contract")
                                    }}
                                >
                                    전자계약 솔루션 서비스 안내
                                </SBlueBtn>
                                <SWhiteBtn onClick={() => handleRegister("전자계약 솔루션")}>
                                    전자계약 솔루션 서비스 신청
                                </SWhiteBtn>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", margin: "80px 0 0 0" }}>
                    <div style={{ display: "flex" }}>
                        <img
                            src={require("../../assets/Rectangle 7.svg").default}
                            width={560}
                            height={300}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "39px 0px 38px 68px",
                            }}
                        >
                            <SPage3Title>부동산 개발 컨설팅</SPage3Title>
                            <SBoldText>성공적인 사업을 위한 부동산개발 종합컨설팅</SBoldText>
                            <SPage3Text>
                                이지조인은 사업기획, 투자유치, 금융컨설팅, 준공 후 관리업무까지
                                <br />
                                종합컨설팅서비스를 제공합니다.
                            </SPage3Text>
                            <div style={{ display: "flex", gap: "10px", margin: "32px 0 0 0" }}>
                                <SBlueBtn
                                    onClick={() => {
                                        scrollToTop()
                                        navigate("/consulting")
                                    }}
                                >
                                    부동산개발 컨설팅 서비스 안내
                                </SBlueBtn>
                                <SWhiteBtn onClick={() => handleRegister("부동산 개발 컨설팅")}>
                                    부동산개발 컨설팅 서비스 신청
                                </SWhiteBtn>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", margin: "80px 0 0 0" }}>
                    <div style={{ display: "flex" }}>
                        <img
                            src={require("../../assets/Rectangle 6.svg").default}
                            width={560}
                            height={300}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "39px 0px 38px 68px",
                            }}
                        >
                            <SPage3Title>홈페이지 제작</SPage3Title>
                            <SPage3Text>
                                분양 현장에 특화된 홈페이지를 반응형 웹 환경으로 제작
                            </SPage3Text>
                            <SPage3Text style={{ margin: 0 }}>
                                분양 현장에 필요한 기능들을 탑재한 홈페이지 제작
                            </SPage3Text>
                            <SPage3Text style={{ margin: 0 }}>
                                서비스 기간동안 홈페이지 디자인 수정 및 도메인 무상 제공
                            </SPage3Text>
                            <div style={{ display: "flex", gap: "10px", margin: "32px 0 0 0" }}>
                                <SBlueBtn
                                    onClick={() => {
                                        scrollToTop()
                                        navigate("/homepage")
                                    }}
                                >
                                    홈페이지 제작 서비스 안내
                                </SBlueBtn>
                                <SWhiteBtn onClick={() => handleRegister("홈페이지 제작")}>
                                    홈페이지 제작 서비스 신청
                                </SWhiteBtn>
                            </div>
                        </div>
                    </div>
                </div>
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
    margin: 0 0 200px 0;
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

const SPage3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    // justify-content: center;
    // align-items: center;

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

const SPage3Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 44.8px */
`

const SPage3Text = styled.li`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */

    margin: 16px 0 0 0;
`
const SBlueBtn = styled.div`
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 4px;
    background: var(--0858F7, #0858f7);

    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */

    cursor: pointer;
`

const SWhiteBtn = styled.div`
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 4px;
    border: 1px solid var(--0858F7, #0858f7);

    color: var(--0858F7, #0858f7);
    leading-trim: both;
    text-edge: cap;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */

    cursor: pointer;
`

const SBoldText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 28.8px */
`
