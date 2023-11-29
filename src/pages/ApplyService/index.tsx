// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// 메인 컴포넌트 함수
const ApplyService = () => {
    const ref = useRef(null)
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

        if (ref.current) observer.observe(ref.current)
        if (ref2.current) observer.observe(ref2.current)
        if (ref3.current) observer.observe(ref3.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
            if (ref2.current) observer.unobserve(ref2.current)
            if (ref3.current) observer.unobserve(ref3.current)
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

                <SPage1Border>
                    <SBorderLeft>
                        <SBorderImg src={require("../../assets/images/contract-3-1-wPB.png")} />
                        <STextWarpper>
                            <SBorderMainText>
                                부동산 개발 컨설팅 어렵게 느껴지시나요?
                            </SBorderMainText>
                            <SBorderSubText>이지조인에서 쉽게 진행하세요!</SBorderSubText>
                        </STextWarpper>
                    </SBorderLeft>

                    <SBorderBtn to="/register">
                        이지조인 서비스 신청하기
                        <SArrowRight src={require("~/assets/images/arrow-right-cwP.png")} />
                    </SBorderBtn>
                </SPage1Border>
            </SPage1>

            <SPage2>
                <SPage2Text>이지조인 서비스 도입 절차</SPage2Text>
                <SPage1Img src={require("../../assets/Frame 920.svg").default} />
            </SPage2>

            <SPage3>
                <SPage3Text>
                    가장 쉽고 빠른
                    <br />
                    <div style={{ display: "flex" }}>
                        부동산 전자계약 솔루션{" "}
                        <div style={{ color: "#2779F4", margin: "0 0 0 10px" }}>이지조인</div>
                    </div>
                </SPage3Text>
                <SBtnWrapper>
                    <SPage3Btn to="/register" onClick={scrollToTop}>
                        서비스 신청
                    </SPage3Btn>
                    <SPage3Btn
                        to="/inquiry"
                        onClick={scrollToTop}
                        style={{ background: "#2779F4", color: "#fff" }}
                    >
                        도입 문의
                    </SPage3Btn>
                </SBtnWrapper>
            </SPage3>
        </SPageWrapper>
    )
}
export default ApplyService

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
    margin: 23px 0 0 0;
    color: var(--whbk-999-sub-txt-01, #999);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 17px */
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
`

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 200px 364px;
    justify-content: center;
    align-items: center;
`

const SPage1Img = styled.img`
    display: flex;
    margin: 63px 0 0 0;
    width: 935px;
    height: 1568px;
    border-radius: 20px;
`

const SPage1Border = styled.div`
    display: flex;
    margin: 48px 0 0 0;
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

    text-decoration: none; /* 밑줄 제거 */
    color: inherit; /* 기본 글자색 상속 */
`

const SArrowRight = styled.img`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-left: 8px solid #fff;
`

const SPage2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    justify-content: center;
    align-items: flex-start;
    margin: 0px 0 0 0;
`

const SPage2Text = styled.div`
    color: #000;

    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 32px */
    width: 1200px;
    text-align: left;
`

const SPage3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    justify-content: center;
    align-items: center;
    background: var(--grbk-900, #f2f4f8);
    margin: 198px 0 0 0;
`

const SPage3Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--whfff, #000);
    text-align: center;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 56px */
    align-items: center;
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
    border: 1px solid var(--whfff, #2779f4);
    cursor: pointer;
    color: var(--whfff, #2779f4);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 38.4px */
    text-decoration: none; /* 밑줄 제거 */
    color: inherit; /* 기본 글자색 상속 */
`
