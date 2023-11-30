import React from "react"
import styled from "styled-components"
import { Link, NavLink, useLocation } from "react-router-dom"

const AdminSidebar = () => {
    return (
        <SSidebar>
            <SLink
                to="/admin/dashboard/announcement"
                activeClassName="active"
                style={{ margin: "28px 0 14px 40px" }}
            >
                공지사항 관리
            </SLink>
            <SLink to="/admin/dashboard/qna" activeClassName="active">
                자주하는질문 관리
            </SLink>
            <SLink to="/admin/dashboard/press" activeClassName="active">
                언론보도 관리
            </SLink>
        </SSidebar>
    )
}

export default AdminSidebar

const SSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    height: calc(100vh - 80px);
    // justify-content: flex-start;
    padding: 0 80px 0 29px;
    align-items: flex-start;
    background: #252a2e;
    text-decoration: none;
    color: #15191e;
`

const SLink = styled(NavLink)<{ activeClassName: string }>`
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    text-decoration: none; // 기본 상태에서 밑줄 제거
    border: 0;
    position: relative; // 밑줄을 위한 위치 설정
    margin: 14px 0 14px 40px;
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
