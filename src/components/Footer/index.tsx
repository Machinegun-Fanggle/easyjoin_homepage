import React from "react"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤 효과
        })
    }
    return (
        <SFooter>
            <SInnerFooter>
                <SWrapper>
                    <SLinkWrapper>
                        <SLink to={"/"} activeClassName="active" onClick={scrollToTop}>
                            회사소개
                        </SLink>
                        <SBar />
                        <SLink to={"service"} activeClassName="active" onClick={scrollToTop}>
                            서비스 소개
                        </SLink>
                        <SBar />
                        <SLink
                            to={"customer-service"}
                            activeClassName="active"
                            onClick={scrollToTop}
                        >
                            고객센터
                        </SLink>
                        <SBar />
                        <SLink to={"terms-of-use"} activeClassName="active" onClick={scrollToTop}>
                            이용약관
                        </SLink>
                        <SBar />
                        <SLink to={"privacy-policy"} activeClassName="active" onClick={scrollToTop}>
                            개인정보처리방침
                        </SLink>
                    </SLinkWrapper>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            marginTop: "60px 0 0 0",
                        }}
                    >
                        <SFooterInfoWrapper
                            style={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "flex-start",
                            }}
                        >
                            <STitle style={{ margin: "0 16px 0 0" }}>대표</STitle>이병훈
                            <STitle>주소</STitle>울산광역시 남구 법대로15 법대로빌딩 4층 401호
                            <STitle>사업자등록번호</STitle>415-86-02577
                        </SFooterInfoWrapper>
                        <SFooterInfoWrapper
                            style={{
                                display: "flex",
                                justifyContent: "left",
                                marginTop: "8px",
                            }}
                        >
                            <STitle style={{ margin: "0 16px 0 0" }}>고객센터 대표번호</STitle>
                            1670-2251
                            <Link
                                to="/admin"
                                style={{
                                    margin: "0 0 0 20px",
                                    color: "#595959",
                                    textDecoration: "none",
                                }}
                            >
                                [관리자 로그인]
                            </Link>
                        </SFooterInfoWrapper>
                    </div>

                    <SFooterEndText>© 2023 EasyJoin INC. All rights reserved.</SFooterEndText>
                </SWrapper>

                <SLogoLink to={"/"} onClick={scrollToTop}>
                    <img src={require("~/assets/images/logo-2vR.png")} width={150} height={30} />
                </SLogoLink>
            </SInnerFooter>
        </SFooter>
    )
}

export default Footer

const SFooter = styled.div`
    // position: fixed; // 위에 고정할 경우 배경색 떄문에 화면에 글자가 안보임. 어떻게 처리할지 유책님과 논의 필요
    display: flex;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
`

const SInnerFooter = styled.div`
    display: flex;
    width: 1440px;
    height: 167px;
    justify-content: space-between;
    align-items: space-between;
`

const SLink = styled(NavLink)<{ activeClassName: string }>`
    color: var(--gray-900, #0d0d0d);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 0;
    position: relative; // 밑줄을 위한 위치 설정
    text-decoration: none; // 기본 상태에서 밑줄 제거
    &:hover {
        font-weight: bold; // 마우스 오버시 글씨 두께 변경

        &:after {
            font-weight: bold; // 마우스 오버시 글씨 두께 변경
        }
    }

    &.active {
        font-weight: bold; // 마우스 오버시 글씨 두께 변경

        &:after {
            font-weight: bold; // 마우스 오버시 글씨 두께 변경
        }
    }
`

const SBar = styled.div`
    background: var(--gray-100, #d9d9d9);
    width: 1px;
    height: 16px;
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

const SWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
`

const SFooterInfoWrapper = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    color: var(--gray-600, #595959);

    /* text-sm */
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const STitle = styled.div`
    display: flex;
    margin: 0 16px 0 40px;
    opacity: 0.6;
`
const SLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const SFooterEndText = styled.div`
    display: flex;
    flex-direction: column;
    alignitems: flexstart;
    backgroundcolor: red;
    width: 50%;
    color: var(--gray-900, #0d0d0d);

    /* text-sm */
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
