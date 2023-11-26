import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import SearchIcon from "../../assets/search-md.svg"

// 개인정보 처리방식
const PrivacyPolicy = () => {
    const ref = useRef(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

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
                        개인정보 처리방식
                    </SMainText>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default PrivacyPolicy

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
