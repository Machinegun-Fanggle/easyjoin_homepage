// 리액트 메인 컴포넌트
import React from "react"
import "./applyService.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const ApplyService = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브5-서비스신청</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C600%2C700"
                />
            </Helmet>

            <div className="item-5--TQH">
                <AppContainer windowWidth={window.innerWidth}>
                    <div className="auto-group-kluq-v2y">
                        <p className="item--E3f">서비스 신청</p>
                        <p className="item--6Lm">
                            상담 문의를 남겨주시면 확인후 빠르게 연락드리겠습니다.
                        </p>

                        <div className="frame-920-xDs">
                            <div className="service-list-GkM">
                                <div className="component-14-1hw">
                                    <img
                                        className="website-LVK"
                                        src={require("~/assets/images/website-7Rw.png")}
                                    />
                                </div>
                                <div className="frame-901-ryT">
                                    <p className="item--ncD">상담</p>
                                    <p className="item--7eV">
                                        추진 중인 사업형태(업무 진행 단계, 예정 세대 수 등 포함) 등
                                        <br />
                                        서비스 제공에 대한 상담을 진행합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-bunb-iPP">
                                <div className="service-list-3Rf">
                                    <div className="component-14-9jb">
                                        <img
                                            className="website-sfb"
                                            src={require("~/assets/images/website-qFT.png")}
                                        />
                                    </div>
                                    <div className="frame-901-c7P">
                                        <p className="item--97K">서비스 신청 및 자료제공</p>
                                        <p className="item--5Fs">
                                            서비스 신청 후 솔루션 제작에 필요한 자료를 제공합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-list-UYu">
                                    <div className="component-14-DWV">
                                        <img
                                            className="website-M6u"
                                            src={require("~/assets/images/website-1HX.png")}
                                        />
                                    </div>
                                    <div className="frame-901-5ob">
                                        <p className="item--DQ1">개발 착수</p>
                                        <p className="item--Yx5">
                                            제공받은 자료를 토대로 전자계약 솔루션 및 홈페이지
                                            제작에 착수합니다.
                                            <br />
                                            (소요기간 : 착수 후 30일 이내)
                                        </p>
                                    </div>
                                </div>
                                <div className="service-list-Med">
                                    <div className="component-14-J45">
                                        <img
                                            className="website-2Vs"
                                            src={require("~/assets/images/website-diu.png")}
                                        />
                                    </div>
                                    <div className="frame-901-Ac5">
                                        <p className="item--5yw">제작 완료</p>
                                        <p className="item--DKT">
                                            개발 착수 후 30일 이내 전자계약 솔루션 및 홈페이지
                                            제작을 완료합니다.
                                            <br />
                                            제작 완료된 솔루션 및 홈페이지는 검수를
                                            진행합니다(검수기간 : 7일 이내)
                                        </p>
                                    </div>
                                </div>
                                <div className="service-list-Quj">
                                    <div className="component-14-kCu">
                                        <img
                                            className="website-gcM"
                                            src={require("~/assets/images/website-fos.png")}
                                        />
                                    </div>
                                    <div className="frame-901-pCm">
                                        <p className="item--MCh">서비스 개시</p>
                                        <p className="item--5uP">
                                            홈페이지 및 전자계약 솔루션의 검수 완료 시 서비스를
                                            개시합니다
                                        </p>
                                    </div>
                                </div>
                                <div className="service-list-u7j">
                                    <div className="component-14-Zxy">
                                        <img
                                            className="website-JvZ"
                                            src={require("~/assets/images/website-if7.png")}
                                        />
                                    </div>
                                    <div className="frame-901-ptu">
                                        <p className="item--AC5">수정 및 보완</p>
                                        <p className="item--65j">
                                            전자계약 및 홈페이지는 월1회 무상으로 수정, 보완 작업이
                                            진행됩니다
                                        </p>
                                    </div>
                                </div>
                                <div className="service-list-VtZ">
                                    <div className="component-14-qBj">
                                        <img
                                            className="website-aQD"
                                            src={require("~/assets/images/website-vPX.png")}
                                        />
                                    </div>
                                    <div className="frame-901-WYm">
                                        <p className="item--qb3">교육 및 업무매뉴얼 제공</p>
                                        <p className="item--N5B">
                                            운영에 필요한 담당자 교육이 진행되며 이지조인 홈페이지를
                                            통해 업무관련
                                            <br />
                                            매뉴얼을 제공 받으실 수 있습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="auto-group-fpby-yKs">
                            <img
                                className="contract-3-1-egu"
                                src={require("~/assets/images/contract-3-1-LRK.png")}
                            />
                            ``
                            <div className="frame-899-aqT">
                                <p className="item--WUD">부동산 개발 컨설팅 어렵게 느껴지시나요?</p>
                                <p className="item--zeH">이지조인에서 쉽게 진행하세요!</p>
                            </div>
                            <div className="frame-601-h2u">
                                <p className="item--cQm">이지조인 서비스 신청하기</p>
                                <img
                                    className="arrow-right-vAZ"
                                    src={require("~/assets/images/arrow-right.png")}
                                />
                            </div>
                        </div>
                        <p className="item--PK3">이지조인 서비스 도입 절차</p>
                    </div>
                    <div className="auto-group-2pbh-Fc9">
                        <p className="item--z3w">
                            <span className="item--z3w-sub-0">
                                가장 쉽고 빠른
                                <br />
                                부동산 전자계약 솔루션
                            </span>
                            <span className="item--z3w-sub-1">이지조인</span>
                        </p>
                        <div className="frame-904-AFF">
                            <div className="faq-tabmenu-K89">서비스 이용 관련</div>
                            <div className="faq-tabmenu-nGd">서비스 신청</div>
                        </div>
                    </div>
                </AppContainer>
            </div>
        </>
    )
}
export default ApplyService
