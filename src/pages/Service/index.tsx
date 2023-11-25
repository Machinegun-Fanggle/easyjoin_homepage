// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Service = () => {
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)

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

        if (ref2.current) observer.observe(ref2.current)
        if (ref3.current) observer.observe(ref3.current)
        if (ref4.current) observer.observe(ref4.current)
        if (ref5.current) observer.observe(ref5.current)

        return () => {
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
                            <SSmallText>이지조인 서비스</SSmallText>
                            <SMainText>
                                가장 쉽고 빠른
                                <br />
                                부동산 전자계약 솔루션
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
                            </div>
                        </SPage1Front>
                    </SGradient>

                    <SPage1BackImg src={require("../../assets/images/rectangle-7-bg-3cR.png")} />
                </div>
            </SPage1Back>
            <SPage2 ref={ref2}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "1200px",
                    }}
                >
                    <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                        이지조인
                    </SMainText>
                    <SSubText
                        style={{
                            color: "#000",
                            fontSize: "22px",
                            textAlign: "left",
                            width: "747px",
                        }}
                    >
                        이지조인은 부동산 개발 주체 및 각 단체(조합)가 회원을 더 쉽게 모집하고
                        관리하기 위해 다양한 단체의 가입 계약을 전자계약으로 체결하고 관리하는
                        전자계약 솔루션입니다.
                    </SSubText>
                </div>

                <SPage2Img src={require("../../assets/Group 533.svg").default} />
                <SPage2Img src={require("../../assets/Group 534.svg").default} />
            </SPage2>

            <SPage3 ref={ref3}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    부동산 개발 컨설팅 종합 패키지
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    이지조인 서비스는 전자계약 솔루션, 분양 홈페이지 제작, 맞춤 서식 제공으로
                    <br />
                    부동산 개발사업의 분양 성공률을 향상 시킬 수 있습니다.
                </SSubText>
                <SPage3Img src={require("../../assets/Group 535.svg").default} />
            </SPage3>

            <SPage4 ref={ref4}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    다양한 단체가입 적용 가능
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    이지조인은 부동산 관련 계약에 특화되어 있으며 <br />
                    회원의 가입계약이 필요한 곳이라면 모두 사용 가능합니다.{" "}
                </SSubText>
                <SPage4Img src={require("../../assets/Group 536.svg").default} />
            </SPage4>

            <SPage5 ref={ref5}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    도입효과
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    전자계약은 종이문서와 같은 법적효력을 가집니다
                </SSubText>
                <SPage5Img src={require("../../assets/Group 537.svg").default} />
            </SPage5>
        </SPageWrapper>
    )
}
export default Service

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
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
    margin: 16px 0 0 0;
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

const SPage2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 220px 362px 0 362px;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: opacity 1s;

    &.animate {
        opacity: 1;
    }
`

const SPage2Img = styled.img`
    display: flex;
    margin: 63px 0 0 0;
    width: 100%;
    height: 274px;
    border-radius: 20px;
`

const SPage3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 220px 362px 0 362px;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: opacity 1s;

    &.animate {
        opacity: 1;
    }
`

const SPage3Img = styled.img`
    display: flex;
    margin: 63px 0 0 0;
    width: 1200px;
    height: 1450px;
    border-radius: 20px;
`

const SPage4 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 220px 362px 0 362px;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: opacity 1s;

    &.animate {
        opacity: 1;
    }
`

const SPage4Img = styled.img`
    display: flex;
    margin: 63px 0 0 0;
    width: 1200px;
    height: 280px;
    border-radius: 20px;
`

const SPage5 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 220px 362px 0 362px;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: opacity 1s;

    &.animate {
        opacity: 1;
    }
`

const SPage5Img = styled.img`
    display: flex;
    margin: 63px 0 0 0;
    width: 1200px;
    height: 866px;
    border-radius: 20px;
`
