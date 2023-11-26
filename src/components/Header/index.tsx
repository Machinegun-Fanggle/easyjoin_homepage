import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, NavLink, useLocation } from "react-router-dom"

const Header = () => {
    const [isBgWhite, setIsBgWhite] = useState(false)
    const location = useLocation()

    const [showDropdown, setShowDropdown] = useState<string | null>(null)

    const handleMouseEnter = (linkName: string) => setShowDropdown(linkName)

    const handleMouseLeave = () => setShowDropdown(null)

    const dropdownContents = {
        service: (
            <SDropdown>
                <SDropdownLink to="/service/announcement">공지사항</SDropdownLink>
                <SDropdownLink to="/service/qna">자주묻는 질문</SDropdownLink>
                <SDropdownLink to="/service/press">언론보도</SDropdownLink>
            </SDropdown>
        ),
    }

    useEffect(() => {
        if (
            location.pathname === "/apply-service" ||
            location.pathname === "/service/announcement" ||
            location.pathname === "/inquiry" ||
            location.pathname === "/customer-service" ||
            location.pathname === "/terms-of-use" ||
            location.pathname === "/privacy-policy" ||
            location.pathname === "/service/qna" ||
            location.pathname === "/register" ||
            location.pathname === "/service/press"
        )
            setIsBgWhite(true)
        else setIsBgWhite(false)
    }, [location])

    return (
        <SHeader>
            <SInnerHeader>
                <SLogoLink to={"/"}>
                    <img src={require("~/assets/images/logo-2vR.png")} width={150} height={30} />
                </SLogoLink>

                <SNavigation>
                    <SLinkWrapper>
                        <SLink isBgWhite={isBgWhite} to={"service"} activeClassName="active">
                            이지조인 서비스
                        </SLink>
                        <SLink isBgWhite={isBgWhite} to={"contract"} activeClassName="active">
                            전자계약
                        </SLink>
                        <SLink isBgWhite={isBgWhite} to={"homepage"} activeClassName="active">
                            홈페이지 제작
                        </SLink>
                        <SLink isBgWhite={isBgWhite} to={"consulting"} activeClassName="active">
                            부동산 개발 컨설팅
                        </SLink>
                        <SLink isBgWhite={isBgWhite} to={"register"} activeClassName="active">
                            서비스 신청
                        </SLink>
                        <SLinkContainer
                            onMouseEnter={() => handleMouseEnter("service")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <SLink
                                isBgWhite={isBgWhite}
                                to={"/service/announcement"}
                                activeClassName="active"
                            >
                                고객 지원
                            </SLink>
                            {showDropdown === "service" && dropdownContents.service}
                        </SLinkContainer>
                    </SLinkWrapper>
                    <SBtnWrapper>
                        {/* <SBtn1>로그인</SBtn1> */}
                        <SBtn2 to={"/inquiry"}>도입문의</SBtn2>
                    </SBtnWrapper>
                </SNavigation>
            </SInnerHeader>
        </SHeader>
    )
}

export default Header

const SHeader = styled.div`
    // position: fixed; // 위에 고정할 경우 배경색 떄문에 화면에 글자가 안보임. 어떻게 처리할지 유책님과 논의 필요
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
`

const SInnerHeader = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: center;
`

const SLink = styled(NavLink)<{ activeClassName: string; isBgWhite: boolean }>`
    color: ${(props) => (props.isBgWhite ? "var(--gray-900, #0d0d0d)" : "var(--whfff, #fff)")};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    text-decoration: none; // 기본 상태에서 밑줄 제거
    border: 0;
    position: relative; // 밑줄을 위한 위치 설정

    &:hover {
        font-weight: bold; // 마우스 오버시 글씨 두께 변경

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -16px; // 글자와 밑줄 간격
            width: 100%;
            height: 2px; // 밑줄 두께
            background-color: var(--0858F7, #0858f7); // 밑줄 색상
        }
    }

    &.active {
        font-weight: bold; // 마우스 오버시 글씨 두께 변경

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -16px; // 글자와 밑줄 간격
            width: 100%;
            height: 2px; // 밑줄 두께
            background-color: var(--0858F7, #0858f7); // 밑줄 색상
        }
    }
`
const SLogoLink = styled(Link)`
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    text-decoration: none; // 기본 상태에서 밑줄 제거
    border: 0;
    position: relative; // 밑줄을 위한 위치 설정
`

const SNavigation = styled.div`
    display: flex;
    gap: 50px;
`

const SLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const SBtnWrapper = styled.div`
    display: flex;
    gap: 10px;
    height: 33px;
    align-items: center;
    z-index: 100;
`

const SBtn1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    background: var(--0858F7, #0858f7);
    width: 82px;
    height: 34px;
    color: #fff;

    leading-trim: both;

    text-edge: cap;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    textalign: center;
    cursor: pointer;

    &:hover {
        font-weight: bold; // 마우스 오버시 글씨 두께 변경
    }
`

const SBtn2 = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid var(--0858F7, #0858f7);
    width: 82px;
    height: 34px;
    color: var(--0858F7, #0858f7);
    leading-trim: both;

    text-edge: cap;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    textalign: center;

    cursor: pointer;
    &:hover {
        font-weight: bold; // 마우스 오버시 글씨 두께 변경
        border: 2px solid var(--0858F7, #0858f7);
        width: 80px;
    }
    text-decoration: none; // 기본 상태에서 밑줄 제거
`

const SLinkContainer = styled.div`
    position: relative;
    display: inline-block;
`

const SDropdown = styled.div`
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`

const SDropdownLink = styled(Link)`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
        background-color: #f1f1f1;
    }
`
