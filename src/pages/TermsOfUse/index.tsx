import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import SearchIcon from "../../assets/search-md.svg"
import { useNavigate } from "react-router-dom"

// 이용약관
const TermsOfUse = () => {
    const ref = useRef(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const movePage = useNavigate()

    // 검색어와 검색 결과 상태 관리
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState<string[]>([]) // 검색 결과를 담는 배열
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) // 드롭다운 상태를 관리

    // 임의의 검색 데이터 배열
    const searchData = ["전자결제 서비스 이용 계약 시 '개인정보 처리 위탁 계약' 추가"]

    // 검색어 입력 핸들러
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        setIsDropdownOpen(true) // 입력할 때 드롭다운 열기
    }

    // 검색어 입력 시 검색 결과 업데이트
    useEffect(() => {
        const filteredResults = searchData.filter((result) => result.includes(searchText))
        setSearchResults(filteredResults)
    }, [searchText])

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

        // 컴포넌트가 언마운트될 때 IntersectionObserver 해제
        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

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

    const [activeTab, setActiveTab] = useState("tab1")

    const handleTabClick = (tab: string) => {
        if (tab === "tab2") {
            movePage("/privacy-policy")
        }

        setActiveTab(tab)
    }

    return (
        <SPageWrapper ref={ref}>
            <SPage1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "1200px",
                    }}
                >
                    {/* <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                        이용약관
                    </SMainText> */}
                    <TabsContainer>
                        <Tab
                            className={activeTab === "tab1" ? "active" : ""}
                            onClick={() => handleTabClick("tab1")}
                        >
                            이용약관
                        </Tab>
                        <Tab
                            className={activeTab === "tab2" ? "active" : ""}
                            onClick={() => handleTabClick("tab2")}
                        >
                            개인정보처리방침
                        </Tab>
                    </TabsContainer>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default TermsOfUse

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
const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    border-bottom: 1px solid #dde1e6;
`

const Tab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #dde1e6;
    border-bottom: none;
    background-color: white;

    &:hover,
    &.active {
        background-color: #f2f2f2;
        font-weight: bold;
    }
`

const H1 = styled.div`
    margin: 100px 0 0 0;
    line-height: 24px;
    color: #333333;
    font-size: 16;
    font-family: Pretendard;
    font-weight: 700;
    word-wrap: break-word;
`

const H2 = styled.p`
    color: "#555555";
    font-size: 15px;
    font-family: "Pretendard", sans-serif; // Font family
    font-weight: "400";
    line-height: 24px;
    white-space: pre-wrap; // 줄바꿈은 유지하되, 필요한 경우 자동으로 줄바꿈을 추가합니다.
    word-wrap: break-word; // 긴 단어가 있을 경우 자동으로 단어를 줄바꿈합니다.
    overflow-wrap: break-word; // 내용이 너무 길 경우 컨테이너 밖으로 넘어가지 않도록 줄바꿈합니다.
`
