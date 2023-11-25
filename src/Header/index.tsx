import React from "react"
import styled from "styled-components"
import "./header.css"

const Header = () => {
    return (
        <AppContainer windowWidth={window.innerWidth}>
            <div className="gnb-SW9">
                <img className="logo-na1" src={require("~/assets/images/logo-2vR.png")} />
                <div className="auto-group-p26x-8tm">
                    <div className="frame-1-mRw">
                        <p className="item--6UD">이지조인 서비스</p>
                        <p className="item--C1T">전자계약</p>
                        <p className="item--7u7">홈페이지 제작</p>
                        <p className="item--eu3">부동산 개발 컨설팅</p>
                        <p className="item--Na9">서비스 신청</p>
                        <p className="item--upy">고객 지원</p>
                    </div>
                    <div className="frame-2-CZB">
                        <div className="button-type-1-xYM">로그인</div>
                        <div className="button-type-1-N6H">도입문의</div>
                    </div>
                </div>
            </div>
        </AppContainer>
    )
}

export default Header

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: center center; // 축소의 기준점 설정
    height: 3.6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
    // background: red;
`
