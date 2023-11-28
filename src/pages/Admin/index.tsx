import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import SearchIcon from "../../assets/search-md.svg"
import { SEditButton } from "../../styles/common"
import { Link } from "react-router-dom"

// 고객센터
const Admin = () => {
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
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", width: "1200px", background: "red" }}>dd</div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "calc(100vw - 1200px)",
                            height: "100vh",
                        }}
                    >
                        <SLogo>ddd</SLogo>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "100%",
                                justifyContent: "center",
                            }}
                        >
                            <STitle>이지조인 관리자</STitle>
                            <SBorder>
                                <SInput></SInput>
                                <SInput></SInput>
                                <div></div>
                                <SButton to={"/"}>로그인</SButton>
                            </SBorder>
                            <div>웹사이트 바로가기</div>
                        </div>
                    </div>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default Admin

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

const STitle = styled.div`
    display: flex;

    color: var(--grbk-900, #15191e);
    text-align: center;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
`

const SPage1 = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    // justify-content: center;
    // align-items: center;
`

const SBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 540px;
    height: 416px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid #eee;
`

const SInput = styled.input`
    display: flex;
    width: 440px;
    padding: 21px 0px;
    align-items: center;
    gap: 4px;
    border: none;
    border-bottom: 1px solid var(--grbk-100, #dde1e6);
    outline: none; // 포커스시 아웃라인 제거
    box-shadow: none; // 기본 박스 그림자 제거
    -webkit-appearance: none; // 크롬, 사파리 등 웹킷 기반 브라우저의 기본 스타일 제거
    -moz-appearance: none; // 파이어폭스의 기본 스타일 제거
`

const SButton = styled(Link)`
    display: flex;
    width: 440px;
    padding: 27px 0px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid var(--grbk-200, #c1c7cd);
    background: var(--grbk-100, #dde1e6);
`

const SLogo = styled.div`
    display: flex;
    height: 75px;
    width: 100%;
    background: blue;
`
