import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 15px;
    background-color: #f8f9fa;
`

const Logo = styled.img`
    height: 60px; // 로고 크기
    margin-left: 250px;
`

const Menu = styled.div`
    display: flex;
    align-items: center; // 세로 중앙 정렬
    p {
        margin: 0 20px;
        font-size: 23px; // 글씨 크기
        cursor: pointer;
        &:hover {
            color: #007bff;
        }
    }
`

const Buttons = styled.div`
    button {
        margin-left: 15px;
        padding: 8px 20px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        font-size: 23px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        &:hover {
            background-color: #0056b3;
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Logo src={require("~/assets/images/logo-AJq.png")} />
            <div style={{ display: "flex" }}>
                <Menu>
                    <p>이지조인서비스</p>
                    <p>전자계약</p>
                    <p>홈페이지 제작</p>
                    <p>부동산 개발 컨설팅</p>
                    <p>서비스 신청</p>
                </Menu>
                <Buttons>
                    <button style={{ marginLeft: 150 }}>로그인</button>
                    <button style={{ marginRight: 150 }}>도입문의</button>
                </Buttons>
            </div>
        </StyledHeader>
    )
}

export default Header
