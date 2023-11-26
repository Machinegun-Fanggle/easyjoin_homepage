import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import SearchIcon from "../../assets/Rectangle 1073.svg"

// 언론보도
const Press = () => {
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
                        언론보도
                    </SMainText>

                    <SGridContainer>
                        {new Array(6).fill(0).map((_, index) => (
                            <SGridItem key={index}>
                                <STitle>보도자료</STitle>
                                <SSubject>이지조인 신규런칭 리뉴얼 다양한 서비스 제공</SSubject>
                                <SDate>2023.12.23</SDate>
                                <SSearchIcon src={SearchIcon} />
                            </SGridItem>
                        ))}
                    </SGridContainer>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default Press

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

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 200px 364px;
    justify-content: center;
    align-items: center;
`

const SGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3열로 구성
    gap: 30px; // 격자 아이템 사이의 간격 조절
    margin: 100px 0 0 0;
`

const SGridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 387px;
    width: 380px;
    cursor: pointer;
    transition: background-color 0.3s; // hover 효과에 대한 transition 추가

    &:hover {
        background-color: #fafafa;
    }
`

const SSearchIcon = styled.img`
    height: 220px;
    width: 380px;
`

const STitle = styled.div`
    color: var(--primary-200-main, #574af9);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 15px */
`

const SSubject = styled.div`
    color: var(--whbk-333, #333);
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 30.8px */
    width: 220px;
`

const SDate = styled.div`
    color: var(--whbk-999-sub-txt-01, #999);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 14px */
`
