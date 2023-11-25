// 리액트 메인 컴포넌트
import React from "react"
import "./announcement.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const Announcement = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브6-고객지원-공지사항</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
            </Helmet>

            <div className="item-6--u7K">
                <AppContainer windowWidth={window.innerWidth}>
                    {" "}
                    <div className="auto-group-rmxf-ajF">
                        <p className="item--1Zf">공지사항</p>
                        <div className="group-2-Ui9">
                            <div className="frame-646-niq">
                                <img
                                    className="search-md-hau"
                                    src={require("~/assets/images/search-md.png")}
                                />
                                <p className="item--2t5">궁금한 점이 있다면 검색해보세요!</p>
                            </div>
                        </div>
                        <div className="frame-647-5LZ">
                            <div className="tabmenu-notice-oXT">전체</div>
                            <div className="auto-group-xlpb-gLM">
                                <p className="item--pSZ">공지</p>
                                <p className="item--Ku7">이벤트</p>
                            </div>
                        </div>
                        <div className="line-8-TEd"></div>
                        <div className="frame-649-NMb">
                            <div className="notice-list-74H">
                                <p className="item--eK7">공지</p>
                                <div className="frame-648-ycH">
                                    <p className="item--Lhj">
                                        [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리 위탁
                                        계약&#39; 추가
                                    </p>
                                    <p className="item-20230907-ByF">2023.09.07</p>
                                </div>
                            </div>
                            <div className="auto-group-vvab-iTP">
                                <div className="notice-list-2DB">
                                    <p className="item--y8R">공지</p>
                                    <div className="frame-648-uGy">
                                        <p className="item--49s">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-789">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-qK3">
                                    <p className="item--a1j">공지</p>
                                    <div className="frame-648-uJu">
                                        <p className="item--TrD">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-WbX">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-PvD">
                                    <p className="item--98h">공지</p>
                                    <div className="frame-648-5HF">
                                        <p className="item--qXK">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-6i9">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-dTB">
                                    <p className="item--BDo">공지</p>
                                    <div className="frame-648-W1B">
                                        <p className="item--fPs">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-j8q">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-Tad">
                                    <p className="item--R1f">공지</p>
                                    <div className="frame-648-wkh">
                                        <p className="item--hzm">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-N5K">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-6X7">
                                    <p className="item--Sqs">공지</p>
                                    <div className="frame-648-NzR">
                                        <p className="item--YP7">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-b6V">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-86R">
                                    <p className="item--GiR">공지</p>
                                    <div className="frame-648-BqP">
                                        <p className="item--x5T">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-D1P">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-vgV">
                                    <p className="item--H1F">공지</p>
                                    <div className="frame-648-oVP">
                                        <p className="item--N2h">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-BF3">2023.09.07</p>
                                    </div>
                                </div>
                                <div className="notice-list-VWd">
                                    <p className="item--3Y9">공지</p>
                                    <div className="frame-648-ygh">
                                        <p className="item--YUu">
                                            [공지] 전자결제 서비스 이용 계약 시 &#39;개인정보 처리
                                            위탁 계약&#39; 추가
                                        </p>
                                        <p className="item-20230907-QX7">2023.09.07</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-650-inh">
                            <img
                                className="group-4-Rh7"
                                src={require("~/assets/images/group-4-Z1f.png")}
                            />
                            <div className="pager-a4D">1</div>
                            <div className="pager-FRF">2</div>
                            <div className="pager-vGV">3</div>
                            <div className="pager-Ryw">4</div>
                            <div className="pager-YYm">5</div>
                            <img
                                className="dots-horizontal-2Tw"
                                src={require("~/assets/images/dots-horizontal-81T.png")}
                            />
                            <div className="pager-xcV">12</div>
                            <img
                                className="group-3-sjT"
                                src={require("~/assets/images/group-3-K9f.png")}
                            />
                        </div>
                    </div>
                </AppContainer>
            </div>
        </>
    )
}
export default Announcement
