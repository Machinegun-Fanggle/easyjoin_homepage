// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Contract = () => {
    const ref = useRef(null)
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
                            <SSmallText>이지조인 서비스</SSmallText>
                            <SMainText>
                                5분만에 끝나는 <br />
                                쉽고 간단한 전자계약
                            </SMainText>
                            <div>
                                <SSubText>
                                    지루하던 계약서 작성이 이지조인으로
                                    <br />
                                    쉽고 간단하게 완료 됩니다.
                                </SSubText>
                            </div>
                        </SPage1Front>
                    </SGradient>

                    <SPage1BackImg src={require("../../assets/images/rectangle-7-bg-3cR.png")} />
                </div>
            </SPage1Back>
            <SPage2 ref={ref}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    계약과정
                </SMainText>
                <SPage2Img src={require("../../assets/Group 538.svg").default} />
            </SPage2>

            <SPage3 ref={ref3}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    <div style={{ color: "#2779F4" }}>법적효력 및 보안</div>까지 확실한 보장
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
                <SPage3Img src={require("../../assets/Group 539.svg").default} />

                <div
                    style={{
                        display: "flex",
                        margin: "100px 0 0 0",
                        justifyContent: "left",
                        width: "1200px",
                    }}
                >
                    <SLeftBorderText>신탁사 업무 연계</SLeftBorderText>
                </div>
                <SPage3_2Img src={require("../../assets/Group 540.svg").default} />
            </SPage3>

            <SPage4 ref={ref4}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    기능안내
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    이지조인은 다양한 기능을 제공합니다.
                </SSubText>
                <SPage4Img src={require("../../assets/Group 541.svg").default} />
            </SPage4>

            <SPage5 ref={ref5}>
                <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                    맞춤서식 제공
                </SMainText>
                <SSubText
                    style={{
                        color: "#000",
                        fontSize: "22px",
                        textAlign: "center",
                        width: "747px",
                    }}
                >
                    분양 현장에서 쓰는 회원가입계약서 및 각종 동의서 등의 관련 문서를 전자 계약
                    <br />
                    체결에 최적화된 디자인으로 현장별 맞춤 서식을 제공합니다
                </SSubText>
                <SPage5Img src={require("../../assets/Group 542.svg").default} />
            </SPage5>
        </SPageWrapper>
    )
}
export default Contract

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

    background: #15191e; /* 초기 배경 설정 */
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
    background: var(--grbk-50, #f2f4f8);
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
    height: 560px;
    border-radius: 20px;
`

const SPage3_2Img = styled.img`
    display: flex;
    margin: 32px 0 0 0;
    width: 1200px;
    height: 238px;
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
    height: 960px;
    border-radius: 20px;
`

const SPage5 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 220px 362px 220px 362px;
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
    height: 429px;
    border-radius: 20px;
`
