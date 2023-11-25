// 리액트 메인 컴포넌트
import React from "react"
import "./press.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const Press = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브6-고객지원-언론보도</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
            </Helmet>

            <div className="item-6--xmj">
                <AppContainer windowWidth={window.innerWidth}>
                    {" "}
                    <div className="auto-group-xysf-qad">
                        <p className="item--fX3">언론보도</p>
                        <div className="auto-group-4dsb-Aih">
                            <div className="group-5-6cM">
                                <div className="auto-group-c3gx-3Xb">
                                    <p className="item--aGd">보도자료</p>
                                    <p className="item--71f">
                                        이지조인 신규런칭 리뉴얼
                                        <br />
                                        다양한 서비스 제공...
                                    </p>
                                    <p className="item-20231223-NCV">2023.12.23</p>
                                </div>
                                <div className="rectangle-1073-gys"></div>
                            </div>
                            <div className="group-6-229">
                                <div className="auto-group-wth9-mVX">
                                    <p className="item--VRX">보도자료</p>
                                    <p className="item--oSD">
                                        이지조인 신규런칭 리뉴얼
                                        <br />
                                        다양한 서비스 제공...
                                    </p>
                                    <p className="item-20231223-sS5">2023.12.23</p>
                                </div>
                                <div className="rectangle-1073-QS1"></div>
                            </div>
                            <div className="group-7-LaZ">
                                <div className="auto-group-xkjm-try">
                                    <p className="item--DuF">보도자료</p>
                                    <p className="item--keH">
                                        이지조인 신규런칭 리뉴얼
                                        <br />
                                        다양한 서비스 제공...
                                    </p>
                                    <p className="item-20231223-REd">2023.12.23</p>
                                </div>
                                <div className="rectangle-1073-9wK"></div>
                            </div>
                        </div>
                        <div className="auto-group-jtdm-J3X">
                            <div className="group-8-dbb">
                                <div className="auto-group-wlsf-nDb">
                                    <p className="item--v4u">보도자료</p>
                                    <p className="item--F7B">
                                        이지조인 신규런칭 리뉴얼
                                        <br />
                                        다양한 서비스 제공...
                                    </p>
                                    <p className="item-20231223-tfw">2023.12.23</p>
                                </div>
                                <div className="rectangle-1073-baM"></div>
                            </div>
                            <div className="group-9-i9B">
                                <div className="auto-group-6cus-Say">
                                    <p className="item--XsK">보도자료</p>
                                    <p className="item--FYR">
                                        이지조인 신규런칭 리뉴얼
                                        <br />
                                        다양한 서비스 제공...
                                    </p>
                                    <p className="item-20231223-KoB">2023.12.23</p>
                                </div>
                                <div className="rectangle-1073-ro7"></div>
                            </div>
                            <div className="group-10-Cc5">
                                <div className="auto-group-zs5d-Yvq">
                                    <p className="item--5fs">보도자료</p>
                                    <p className="item--D1P">
                                        이지조인 신규런칭 리뉴얼
                                        <br />
                                        다양한 서비스 제공...
                                    </p>
                                    <p className="item-20231223-Fyf">2023.12.23</p>
                                </div>
                                <div className="rectangle-1073-PKB"></div>
                            </div>
                        </div>
                        <div className="frame-650-Wub">
                            <img
                                className="group-4-Rmf"
                                src={require("~/assets/images/group-4-rmj.png")}
                            />
                            <div className="pager-Ngu">1</div>
                            <div className="pager-sNm">2</div>
                            <div className="pager-zCV">3</div>
                            <div className="pager-WAq">4</div>
                            <div className="pager-29B">5</div>
                            <img
                                className="dots-horizontal-vEZ"
                                src={require("~/assets/images/dots-horizontal-5Bj.png")}
                            />
                            <div className="pager-3py">12</div>
                            <img
                                className="group-3-ZHX"
                                src={require("~/assets/images/group-3-9Wu.png")}
                            />
                        </div>
                    </div>
                    <div className="footer-VS5">
                        <div className="top-line-EuT"></div>
                        <div className="footer-container-PGZ">
                            <div className="footer-contents-KR7">
                                <div className="foot-nav-59P">
                                    <p className="item--By7">회사소개</p>
                                    <div className="auto-group-krfd-7rm">
                                        <div className="bar-TQq"></div>
                                        <p className="item--yty">서비스 소개</p>
                                        <div className="bar-JRT"></div>
                                        <p className="item--pub">고객센터</p>
                                        <div className="bar-9gy"></div>
                                        <p className="item--Q77">이용약관</p>
                                        <div className="bar-8J1"></div>
                                        <p className="item--FdX">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-Zu7">
                                    <div className="company-info-jHo">
                                        <div className="frame-606-suo">
                                            <div className="frame-602-RAd">
                                                <p className="item--Znd">대표</p>
                                                <p className="item--tpu">이병훈</p>
                                            </div>
                                            <div className="frame-607-Rpq">
                                                <p className="item--yrM">주소</p>
                                                <p className="a37-K9X">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-2Zj">
                                                <p className="item--P9P">사업자등록번호</p>
                                                <p className="item-415-86-02577-tbw">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-DeD">
                                            <div className="frame-604-x61">
                                                <p className="item--JvZ">고객센터 대표번호</p>
                                                <p className="item-1670-2251-DXj">1670-2251</p>
                                            </div>
                                            <div className="frame-608-kXf">
                                                <p className="item--WWq">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-drM">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-8o7">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-wx1r-4Ay">
                                <div className="frame-616-Pyw">사업자정보확인</div>
                                <div className="auto-group-yvtx-ddP">
                                    <img
                                        className="logo-aYd"
                                        src={require("~/assets/images/logo-Dss.png")}
                                    />
                                    <div className="sns-7Hf">
                                        <img
                                            className="group-11-3BK"
                                            src={require("~/assets/images/group-11.png")}
                                        />
                                        <div className="icoi-NUV">
                                            <img
                                                className="mask-group-6fP"
                                                src={require("~/assets/images/mask-group-NaZ.png")}
                                            />
                                            <img
                                                className="mask-group-ctd"
                                                src={require("~/assets/images/mask-group-mgR.png")}
                                            />
                                            <img
                                                className="mask-group-YnH"
                                                src={require("~/assets/images/mask-group-Xn5.png")}
                                            />
                                            <img
                                                className="mask-group-Uvq"
                                                src={require("~/assets/images/mask-group-7yP.png")}
                                            />
                                            <img
                                                className="mask-group-Crq"
                                                src={require("~/assets/images/mask-group-BdF.png")}
                                            />
                                            <img
                                                className="mask-group-YQu"
                                                src={require("~/assets/images/mask-group-qyP.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-UZT"
                                            src={require("~/assets/images/icof-foj.png")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>
        </>
    )
}
export default Press
