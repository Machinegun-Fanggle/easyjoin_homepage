// 리액트 메인 컴포넌트
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import SearchIcon from "../../assets/search-md.svg"
import ChevronDown from "../../assets/chevron-down.svg"
import ChevronUp from "../../assets/chevron-up.svg"
import QLogo from "../../assets/Q.svg"
import apiInstance from "../../api"
import { IQnA } from "../../interface"

// 메인 컴포넌트 함수
const QnA = () => {
    const ref = useRef(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    // 검색어와 검색 결과 상태 관리
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState<IQnA[]>([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) // 드롭다운 상태를 관리

    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const category = ["전체", "서비스 이용 관련", "법적효력", "보안", "기타"]
    const [expandedQnA_Ids, setExpandedQnA_Ids] = useState<number[]>([])
    const [qnAs, setQnAs] = useState<IQnA[]>([])
    const [allData, setAllData] = useState<IQnA[]>([])

    useEffect(() => {
        setSelectedCategory("전체")
        apiInstance
            .get("/qna/")
            .then((response) => {
                setAllData(response.data.data)
                setQnAs(response.data.data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
            })
    }, [])

    // 검색어 입력 핸들러
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value.toLowerCase() // 입력된 검색어를 소문자로 변환

        // 검색어와 일치하는 title 또는 content를 가진 항목만 필터링
        const filteredResults = allData.filter(
            (result) =>
                result.title.toLowerCase().includes(searchText) ||
                result.content.toLowerCase().includes(searchText),
        )

        setSearchText(searchText)
        setSearchResults(filteredResults)
        setIsDropdownOpen(true) // 입력할 때 드롭다운 열기
    }

    const handleCategory = (category: string) => {
        if (category === "전체") {
            // 선택된 카테고리가 없으면 전체 리스트를 표시
            setQnAs(allData)
        } else {
            // 선택된 카테고리와 일치하는 항목만 필터링
            const filteredQnAs = allData.filter((qna) => qna.category === category)
            setQnAs(filteredQnAs)
        }
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

    // 검색어 입력 시 검색 결과 업데이트
    useEffect(() => {
        const searchTextLower = searchText.toLowerCase()
        // 검색어와 일치하는 title 또는 content를 가진 항목만 필터링
        const filteredResults = allData.filter(
            (result) =>
                result.title.toLowerCase().includes(searchTextLower) ||
                result.content.toLowerCase().includes(searchTextLower),
        )
        setSearchResults(filteredResults)
    }, [searchText])

    // 문서 전체에 클릭 이벤트 핸들러 추가
    useEffect(() => {
        const handleDocumentClick = (e: MouseEvent) => {
            if (dropdownRef?.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false) // 드롭다운 외부를 클릭하면 닫기
            }
        }

        document.addEventListener("click", handleDocumentClick)

        // 컴포넌트가 언마운트될 때 클릭 이벤트 핸들러 제거
        return () => {
            document.removeEventListener("click", handleDocumentClick)
        }
    }, [])

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
                        자주하는질문
                    </SMainText>
                </div>

                <div style={{ position: "relative", display: "flex", width: "100%" }}>
                    <SSearchWrapper ref={dropdownRef}>
                        <SSearchIcon src={SearchIcon} />
                        <SSearchInput
                            type="text"
                            placeholder="궁금한 점이 있다면 검색해보세요!"
                            value={searchText}
                            onChange={handleSearchInputChange}
                        />
                    </SSearchWrapper>

                    {isDropdownOpen && searchResults.length > 0 && (
                        <SDropdown>
                            {searchResults.map((result, index) => (
                                <SDropdownItem key={index}>{result.title}</SDropdownItem>
                            ))}
                        </SDropdown>
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        marginTop: 100,
                        minHeight: "100vh",
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
                                    marginBottom: "34px",
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

                    {qnAs.map((QnA, idx) => (
                        <React.Fragment key={idx}>
                            <div
                                onClick={() => toggleQnA(idx)}
                                style={{
                                    display: "flex",
                                    height: "80px",
                                    width: "100%",
                                    borderTop: "1px solid #DDE1E6",
                                    padding: "20px",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        width: "100%",
                                    }}
                                >
                                    <Wrapper style={{ width: "100%", padding: "0" }}>
                                        <SubTitle>
                                            <img src={QLogo} width={18} height={18} />
                                            <p style={{ fontWeight: 600, margin: "0 0 0 10px" }}>
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
                                        {expandedQnA_Ids.includes(idx) ? (
                                            <img src={ChevronUp} width={20} height={20} />
                                        ) : (
                                            <img src={ChevronDown} width={20} height={20} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {expandedQnA_Ids.includes(idx) && (
                                <div
                                    style={{
                                        display: "flex",
                                        width: "100%",
                                        background: "#f2f4f8",
                                        padding: "20px",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SubTitle style={{ fontSize: "15px" }}>
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

                    <div
                        style={{
                            width: "1200px",
                            borderBottom: "1px solid #DDE1E6",
                            margin: "0px 0 0 0",
                        }}
                    />

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
    padding: 200px 364px;
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
    height: 50px;

    /* 선택된 버튼에 대한 스타일 */
    background-color: ${(props) => (props.isSelected ? "#2779f4" : "transparent")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
    font-weight: ${(props) => (props.isSelected ? 600 : 0)};
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

    color: #000;

    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 24px */

    font-size: 16px;
    color: #21242b;

    @media screen and (max-width: 768px) {
        justify-content: left;
        align-items: flex-start;
    }
`

const SSearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    border: 3px solid var(--2779F4, #2779f4);
    border-radius: 6px;
    margin: 48px 0 0 0;
`

const SSearchIcon = styled.img`
    width: 28px; // SVG 아이콘 크기에 맞게 조절
    margin-left: 24px; // 아이콘과 입력란 사이의 간격 조절
`

const SSearchInput = styled.input`
    width: 90%;
    display: flex;
    max-width: 1200px;
    height: 72px;
    flex-shrink: 0;
    border: none;
    outline: none;
    font-size: 18px; // 입력란 텍스트 크기 조절
    padding-left: 12px; // 텍스트와 왼쪽 여백 조절

    color: var(--whbk-999-sub-txt-01, #000);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 17px */
`

const SDropdown = styled.div`
    position: absolute;
    width: 1200px;
    background-color: #fafafa;
    border-radius: 6px;
    z-index: 1;
    top: calc(72px + 59px);
`

const SDropdownItem = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    height: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: var(--2779F4, #2779f4);
        color: #fff;
    }
`
