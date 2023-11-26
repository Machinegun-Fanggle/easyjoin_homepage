import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import SearchIcon from "../../assets/search-md.svg"

// 공지사항
const Announcement = () => {
    const ref = useRef(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    // 검색어와 검색 결과 상태 관리
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState<string[]>([]) // 검색 결과를 담는 배열
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) // 드롭다운 상태를 관리

    // 임의의 검색 데이터 배열
    const searchData = ["전자결제 서비스 이용 계약 시 '개인정보 처리 위탁 계약' 추가"]

    // 검색어 입력 시 검색 결과 업데이트
    useEffect(() => {
        const filteredResults = searchData.filter((result) => result.includes(searchText))
        setSearchResults(filteredResults)
    }, [searchText])

    // 검색어 입력 핸들러
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        setIsDropdownOpen(true) // 입력할 때 드롭다운 열기
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
                    <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                        공지사항
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
                                <SDropdownItem key={index}>{result}</SDropdownItem>
                            ))}
                        </SDropdown>
                    )}
                </div>

                <div
                    style={{
                        width: "1200px",
                        borderBottom: "1px solid #DDE1E6",
                        margin: "149px 0 0 0",
                    }}
                />

                <SList>
                    {new Array(10).fill(0).map((_, index) => (
                        <SListItem key={index}>
                            <STitle>공지</STitle>
                            <SSubject>
                                [공지] 전자결제 서비스 이용 계약 시 &apos;개인정보 처리 위탁
                                계약&apos; 추가
                            </SSubject>
                            <SDate>2023.09.07</SDate>
                        </SListItem>
                    ))}
                </SList>
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

const SPage2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    justify-content: center;
    align-items: flex-start;
    margin: 0px 0 0 0;
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
const SList = styled.div`
    width: 1200px;
`

const SListItem = styled.div`
    display: flex;
    padding: 0 20px;
    height: 58px;
    align-items: center;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
`

const STitle = styled.div`
    display: flex;
    width: 100px;
`

const SSubject = styled.div`
    display: flex;
    width: 100%;
    color: var(--grbk-500, #697077);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 18px */
`

const SDate = styled.div`
    display: flex;
    width: 100px;
`
