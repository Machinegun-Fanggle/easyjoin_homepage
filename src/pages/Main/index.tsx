// 리액트 메인 컴포넌트
import React from "react"
import "./main.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const Main = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>메인</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
            </Helmet>

            <div className="item--Rqw">
                <AppContainer windowWidth={window.innerWidth}>
                    <div className="auto-group-cs8k-y6m">
                        <p className="item--epV">
                            부동산 개발사업의
                            <br />
                            성공분양을 위한
                            <br />
                            분양계약 전용
                            <br />
                            전자계약 솔루션
                        </p>
                        <p className="item--Tmw">
                            <span className="item--Tmw-sub-0">
                                부동산 개발 주체 및 각 단체가 회원을 더 쉽게 모집하고
                                <br />
                                다양한 단체의 가입 계약을 전자계약으로 체결하고 관리하는
                                <br />
                            </span>
                            <span className="item--Tmw-sub-1">부동산 통합 전자계약 솔루션</span>
                        </p>
                        <div className="frame-4-tGu">도입문의</div>
                        <div className="auto-group-cs8k-y6m-bg"></div>
                    </div>
                    <div className="auto-group-zjj1-XjB">
                        <div className="frame-903-1uF">
                            <p className="item--9Vf">
                                부동산 개발 컨설팅
                                <br />
                                이지조인에서 해결해드립니다!
                            </p>
                            <p className="item--yzV">
                                이지조인은 부동산 사업장별 맞춤 서비스로
                                <br />
                                사업의 성공율을 높여주는 통합 서비스입니다.
                            </p>
                        </div>
                        <div className="rectangle-8-mvM">
                            <div className="rectangle-8-mvM-bg"></div>
                        </div>
                        <div className="auto-group-m3qw-xV3">
                            <img
                                className="contract-3-1-p1T"
                                src={require("~/assets/images/contract-3-1-wPB.png")}
                            />
                            <div className="frame-899-x7f">
                                <p className="item--4wP">부동산 개발 컨설팅 어렵게 느껴지시나요?</p>
                                <p className="item--kZK">이지조인에서 쉽게 진행하세요!</p>
                            </div>
                            <div className="frame-601-qKs">
                                <p className="item--AN9">이지조인에 의뢰하기</p>
                                <img
                                    className="arrow-right-rEy"
                                    src={require("~/assets/images/arrow-right-cwP.png")}
                                />
                            </div>
                        </div>
                        <p className="item--WqK">다양한 단체가입 적용 가능</p>
                        <div className="auto-group-wdtw-opR">
                            <div className="line-9-Mb3"></div>
                            <div className="rectangle-19-eKF"></div>
                            <div className="rectangle-18-gmj"></div>
                            <div className="rectangle-20-DWm"></div>
                        </div>
                        <div className="auto-group-m61q-wBs">
                            <p className="item--2UD">
                                지역주택조합
                                <br />
                                조합원 가입
                            </p>
                            <p className="item--KTK">
                                민간임대 협동조합
                                <br />
                                조합원 가입
                            </p>
                            <p className="item--NAh">기타 단체 가입</p>
                        </div>
                    </div>

                    <div className="auto-group-iwo9-vVb">
                        <p className="item--dQ1">
                            <span className="item--dQ1-sub-0">
                                가장 쉽고 빠른
                                <br />
                                부동산 전자계약 솔루션
                            </span>
                            <span className="item--dQ1-sub-1">이지조인</span>
                        </p>
                        <div className="frame-632-xUD">
                            <div className="frame-6-VDF">서비스 신청하기</div>
                            <div className="frame-5-NXw">도입문의</div>
                        </div>
                    </div>
                </AppContainer>
            </div>
        </>
    )
}
export default Main
