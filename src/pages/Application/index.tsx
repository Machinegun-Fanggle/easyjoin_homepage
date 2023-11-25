// 리액트 메인 컴포넌트
import React from "react"
import "./application.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const Application = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브5-서비스신청-도입문의</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
            </Helmet>

            <div className="item-5--gDb">
                <AppContainer windowWidth={window.innerWidth}>
                    {" "}
                    <div className="auto-group-i8yh-YFo">
                        <p className="item--fbK">이지조인 서비스 신청</p>
                        <p className="item--v1T">이지조인 신청서 작성</p>
                        <div className="faq-tabmenu-b7b">서비스 신청하기</div>
                        <p className="item--rJR">
                            상담 문의를 남겨주시면 확인후 빠르게 연락드리겠습니다.
                        </p>

                        <div className="auto-group-rlqq-zWR">
                            <img
                                className="contract-3-1-5Gy"
                                src={require("~/assets/images/contract-3-1-WdT.png")}
                            />
                            <div className="frame-899-QKF">
                                <p className="item--XPs">부동산 개발 컨설팅 어렵게 느껴지시나요?</p>
                                <p className="item--ocH">이지조인에서 쉽게 진행하세요!</p>
                            </div>
                            <div className="frame-601-ttd">
                                <p className="item--p1b">이지조인 서비스 신청하기</p>
                                <img
                                    className="arrow-right-JBf"
                                    src={require("~/assets/images/arrow-right.png")}
                                />
                            </div>
                        </div>
                        <div className="line-11-AUm"></div>
                        <div className="auto-group-fnxd-HpH">
                            <div className="frame-793-crZ">
                                <div className="component-tf-b-uqf">
                                    <p className="title-f49">이름</p>
                                    <div className="auto-group-9aip-bCh">이름 입력</div>
                                </div>
                                <div className="component-tf-b-1-r8d">
                                    <p className="title-nny">휴대폰</p>
                                    <div className="auto-group-efe3-jCR">
                                        <div className="auto-group-rpb9-frm">
                                            ‘-’빼고 숫자만 입력
                                        </div>
                                        <div className="component-rec-jLq">인증번호 받기</div>
                                    </div>
                                    <div className="auto-group-lv5h-CkD">인증번호 입력</div>
                                </div>
                                <div className="component-tf-email-HFs">
                                    <p className="title-2UM">이메일</p>
                                    <div className="auto-group-ukkd-AaZ">
                                        <p className="text-goo">이메일 입력</p>
                                        <p className="item--2Ms">@</p>
                                        <p className="item--m4Z">선택</p>
                                        <img
                                            className="chevron-down-6Mj"
                                            src={require("~/assets/images/chevron-down-white.png")}
                                        />
                                    </div>
                                </div>
                                <div className="component-tf-b-Pbj">
                                    <p className="title-Xhw">회사명</p>
                                    <div className="auto-group-wp7h-fZF">회사명 입력</div>
                                </div>
                                <div className="component-tf-b-1-Y7F">
                                    <p className="title-svD">회사주소</p>
                                    <div className="auto-group-65f1-QQM">
                                        <div className="auto-group-fdgx-Xjs">주소입력</div>
                                        <div className="component-rec-BJd">주소 선택</div>
                                    </div>
                                    <div className="auto-group-tnv1-ei1">나머지 주소 입력</div>
                                </div>
                                <div className="component-tf-b-KZF">
                                    <p className="title-Fho">부서명</p>
                                    <div className="auto-group-xr9h-Q4u">부서명 입력</div>
                                </div>
                                <div className="component-tf-b-5B3">
                                    <p className="title-Do3">직함</p>
                                    <div className="auto-group-nafm-xVj">직함 입력</div>
                                </div>
                                <div className="component-tf-b-1-e7f">
                                    <p className="item--Pb3">사업종류</p>
                                    <div className="group-12-7G9">
                                        <div className="frame-907-ems">
                                            <div className="component-checktext-PzM">
                                                <img
                                                    className="component-check-circle-wW5"
                                                    src={require("~/assets/images/component-check-circle-EEy.png")}
                                                />
                                                <p className="item--GHT">지역주택조합</p>
                                            </div>
                                            <div className="component-checktext-Pss">
                                                <img
                                                    className="component-check-circle-f4h"
                                                    src={require("~/assets/images/component-check-circle-Jxu.png")}
                                                />
                                                <p className="item--PWV">민간임대협동조합</p>
                                            </div>
                                            <div className="component-checktext-vFX">
                                                <img
                                                    className="component-check-circle-58R"
                                                    src={require("~/assets/images/component-check-circle-NDb.png")}
                                                />
                                                <p className="item--bMf">기타</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="component-tf--udF">
                                    <p className="title-roP">회원(조합원) 모집 개시일</p>
                                    <div className="auto-group-bwnf-zub">
                                        <p className="text-iah">YY-MM-DD</p>
                                        <img
                                            className="calendar-SFo"
                                            src={require("~/assets/images/calendar.png")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="frame-900-vwf">
                                <div className="component-tf-b-ecm">
                                    <p className="title-Qbw">단체명</p>
                                    <div className="auto-group-zxyf-M1P">세대수 입력</div>
                                </div>
                                <div className="component-tf-b-Rmw">
                                    <p className="title-z4M">단체 대표자명</p>
                                    <div className="auto-group-bfuf-KcR">세대수 입력</div>
                                </div>
                                <div className="component-tf-b-1-ziZ">
                                    <p className="item--kBw">계약(예정) 신탁사</p>
                                    <div className="frame-905-Tc9">
                                        <div className="group-12-1Nm">
                                            <div className="frame-906-8iH">
                                                <div className="component-checktext-tBf">
                                                    <img
                                                        className="component-check-circle-qMo"
                                                        src={require("~/assets/images/component-check-circle-n4m.png")}
                                                    />
                                                    <p className="item--mWM">있음</p>
                                                </div>
                                                <div className="component-checktext-VhF">
                                                    <img
                                                        className="component-check-circle-FRX"
                                                        src={require("~/assets/images/component-check-circle-Xm7.png")}
                                                    />
                                                    <p className="item--Ba5">없음</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-13-W6Z">신탁사명 입력</div>
                                    </div>
                                </div>
                                <div className="component-tf-b-a6R">
                                    <p className="title-vRB">현장명</p>
                                    <div className="auto-group-f39d-4XP">현장명 입력</div>
                                </div>
                                <div className="component-tf-b-jtR">
                                    <p className="title-Vch">직원수</p>
                                    <div className="auto-group-yyhm-qAm">직원수 입력</div>
                                </div>
                                <div className="component-tf-b-VWD">
                                    <p className="title-qpy">세대수</p>
                                    <div className="auto-group-twhh-nER">세대수 입력</div>
                                </div>
                                <div className="component-tf-b-4Bw">
                                    <p className="item--D4q">상세정보</p>
                                    <div className="auto-group-8qky-LQM">500자 이내 입력</div>
                                </div>
                                <div className="component-tf-b-1-DDF">
                                    <div className="frame-7-xwX">
                                        <p className="title-taH">첨부파일</p>
                                        <p className="item--Rq7">*</p>
                                    </div>
                                    <div className="auto-group-xz15-y5w">
                                        <div className="auto-group-duqd-iZK">
                                            단체(조합) 직인 첨부
                                        </div>
                                        <div className="component-rec-z13">파일선택</div>
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
export default Application
