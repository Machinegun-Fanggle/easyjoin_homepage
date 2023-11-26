// 리액트 메인 컴포넌트
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

export interface IQnA {
    title: string
    content: string
    category: string
    createAt: string
    writer: string
}

// 메인 컴포넌트 함수
const QnA = () => {
    const ref = useRef(null)

    useEffect(() => {
        setQnAs(exampleQnAs)
        setSelectedCategory("전체")

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

    const handleCategory = (category: string) => {
        if (category === "전체") {
            // 선택된 카테고리가 없으면 전체 리스트를 표시
            setQnAs(exampleQnAs)
        } else {
            // 선택된 카테고리와 일치하는 항목만 필터링
            const filteredQnAs = exampleQnAs.filter((qna) => qna.category === category)
            setQnAs(filteredQnAs)
        }
    }

    const [inputValue, setInputValue] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const keywords = ["키워드 1", "키워드 2", "키워드 3", "키워드 4"]
    const category = ["전체", "서비스 이용 관련", "법적효력", "보안", "기타"]
    const [expandedQnA_Ids, setExpandedQnA_Ids] = useState<number[]>([])
    const [qnAs, setQnAs] = useState<IQnA[]>([])

    const exampleQnAs = [
        {
            title: "서비스 가입 절차가 궁금합니다",
            content: "새로운 서비스에 가입하고 싶은데, 어떻게 해야 하나요?",
            category: "서비스 이용 관련",
            createAt: "2023-11-27",
            writer: "NewUser",
        },
        {
            title: "개인정보 보호 정책에 대한 질문",
            content: "개인정보 보호 정책이 어떻게 적용되는지 자세히 알고 싶습니다.",
            category: "법적효력",
            createAt: "2023-11-26",
            writer: "PrivacySeeker",
        },
        {
            title: "계정 보안 강화 방법",
            content: "제 계정의 보안을 강화하고 싶습니다. 어떤 조치를 취할 수 있나요?",
            category: "보안",
            createAt: "2023-11-25",
            writer: "SecureUser",
        },
        {
            title: "모바일 앱 오류 보고",
            content: "모바일 앱에서 오류를 발견했어요. 어디에 보고해야 하나요?",
            category: "기타",
            createAt: "2023-11-24",
            writer: "AppTester",
        },
    ]

    const handleKeywordClick = (keyword: string) => {
        setInputValue(keyword)
    }

    const toggleQnA = (id: number) => {
        setExpandedQnA_Ids((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId) => prevId !== id)
            } else {
                return [...prevIds, id]
            }
        })
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
                                    marginBottom: "30px",
                                }}
                                isSelected={selectedCategory === category}
                                onClick={() => {
                                    setSelectedCategory(category)
                                    handleCategory(category)
                                }}
                            >
                                {category}
                            </SButton>
                        ))}
                    </div>

                    <>
                        {qnAs.map((QnA, idx) => (
                            <React.Fragment key={idx}>
                                <div
                                    style={{
                                        display: "flex",
                                        height: "70px",
                                        width: "100%",
                                        borderTop: "1px solid #A2A9B0",
                                        borderBottom: "1px solid #A2A9B0",
                                        padding: "20px",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        onClick={() => toggleQnA(idx)}
                                        style={{
                                            display: "flex",
                                            width: "100%",
                                        }}
                                    >
                                        <Wrapper style={{ width: "100%", padding: "0" }}>
                                            <SubTitle>
                                                <p style={{ fontWeight: 600, marginRight: "10px" }}>
                                                    [{QnA.category}]
                                                </p>
                                                {QnA.title}
                                            </SubTitle>
                                        </Wrapper>
                                        <div
                                            style={{
                                                width: "5%",
                                                color: "#A2A9B0",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            {expandedQnA_Ids.includes(idx) ? "▲" : "▼"}
                                        </div>
                                    </div>
                                </div>
                                {expandedQnA_Ids.includes(idx) && (
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "100%",
                                            background: "#f2f4f8",
                                            borderBottom: "1px solid #A2A9B0",
                                            padding: "20px",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <SubTitle style={{ fontSize: "13px" }}>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: QnA.content.replace(/\n/g, "<br />"),
                                                }}
                                            />
                                        </SubTitle>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </>

                    {/* <SPageImg src={require("../../assets/images/Frame627.png")} height={1300} /> */}
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100%;

    justify-content: center;

    padding: 20px;

    font-size: 14px;
    color: #5157e0;
    font-family: Poppins;
`
const SubTitle = styled.p`
    display: flex;

    font-size: clamp(0.1rem, 4vw, 1.3rem);
    color: #21242b;

    @media screen and (max-width: 768px) {
        justify-content: left;
        align-items: flex-start;
    }
`
