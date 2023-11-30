import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, NavLink, useLocation } from "react-router-dom"

const AdminHeader = () => {
    const location = useLocation()

    return (
        <SHeader>
            <SLogoLink to={"/"}>
                <img src={require("~/assets/images/logo-2vR.png")} width={132} />
            </SLogoLink>
            <SInnerHeader></SInnerHeader>
        </SHeader>
    )
}

export default AdminHeader

const SHeader = styled.div`
    // position: fixed; // 위에 고정할 경우 배경색 떄문에 화면에 글자가 안보임. 어떻게 처리할지 유책님과 논의 필요
    display: flex;
    width: 1920px;
    height: 80px;
    justify-content: space-between;
    padding: 0 80px 0 29px;
    align-items: center;
    background: #15191e;
`

const SInnerHeader = styled.div`
    display: flex;
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
