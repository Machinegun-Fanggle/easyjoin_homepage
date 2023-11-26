// 리액트 메인 컴포넌트
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Announcement = () => {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

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
                        공지사항
                    </SMainText>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default Announcement

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

const SMainText = styled.div`
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
`

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 200px 364px;
    justify-content: center;
    align-items: center;
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

const SBorderBtn = styled.div`
    display: inline-flex;
    width: 330px;
    padding: 20px 32px;
    margin: 0 96px 0 0;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background: var(--mGR-01, linear-gradient(90deg, #2779f4 0%, #4448d4 100%));
    cursor: pointer;
`

const SArrowRight = styled.img`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-left: 8px solid #fff;
`
