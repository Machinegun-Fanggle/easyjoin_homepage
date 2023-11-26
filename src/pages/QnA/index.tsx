// 리액트 메인 컴포넌트
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

// 메인 컴포넌트 함수
const QnA = () => {
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

    const [inputValue, setInputValue] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const keywords = ["키워드 1", "키워드 2", "키워드 3", "키워드 4"]
    const category = ["전체", "서비스 이용 관련", "법적효력", "보안", "기타"]

    const handleKeywordClick = (keyword: string) => {
        setInputValue(keyword)
    }

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
                        자주하는질문
                    </SMainText>

                    <SerachBox
                        placeholder="궁금한 점이 있다면 검색해보세요!"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <KeywordContainer>
                        {keywords.map((keyword, index) => (
                            <KeywordButton key={index} onClick={() => handleKeywordClick(keyword)}>
                                {keyword}
                            </KeywordButton>
                        ))}
                    </KeywordContainer>
                </div>

                <div
                    style={{
                        display: "flex",
                        marginTop: 100,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "1200px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        {category.map((category) => (
                            <SButton
                                key={category}
                                style={{
                                    flexGrow: 1,
                                    width: 100,
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                }}
                                isSelected={selectedCategory === category}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </SButton>
                        ))}
                    </div>
                    <SPageImg src={require("../../assets/images/Frame627.png")} height={1300} />
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default QnA

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

const SerachBox = styled.input`
    display: flex;
    margin: 35px 0 0 0;
    border-radius: 5px;
    border: 3px solid #2779f4;
    font-size: 20px;
    text-align: left;
    height: 55px;
    padding-left: 15px;
    width: 100%;
    height: 55px;
    background: #fff;
`

const KeywordButton = styled.button`
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`

const KeywordContainer = styled.div`
    margin-top: 15px;
`

const SButton = styled.button<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    color: var(--_000, #ffffff);
    background: #fafafa;
    margin-left: 20px;
    border-radius: 8px;
    padding: 10px 0px;
    border: 1px solid #fafafa;
    width: 160px;

    /* 선택된 버튼에 대한 스타일 */
    background-color: ${(props) => (props.isSelected ? "#2779f4" : "transparent")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
    font-weight: ${(props) => (props.isSelected ? 600 : 0)};
`

const SPageImg = styled.img`
    display: flex;
    margin: 80px 0 0 0;
    width: 1200px;
    border-radius: 20px;
`
