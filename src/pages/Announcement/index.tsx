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
                    <div className="footer-4mK">
                        <div className="top-line-bmF"></div>
                        <div className="footer-container-Lyj">
                            <div className="footer-contents-gGu">
                                <div className="foot-nav-EJR">
                                    <p className="item--Ypu">회사소개</p>
                                    <div className="auto-group-eyfu-Gku">
                                        <div className="bar-CPf"></div>
                                        <p className="item--8HK">서비스 소개</p>
                                        <div className="bar-F73"></div>
                                        <p className="item--ZtR">고객센터</p>
                                        <div className="bar-J5K"></div>
                                        <p className="item--2X7">이용약관</p>
                                        <div className="bar-YkM"></div>
                                        <p className="item--sXj">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-bCq">
                                    <div className="company-info-Ked">
                                        <div className="frame-606-reZ">
                                            <div className="frame-602-PPb">
                                                <p className="item--veR">대표</p>
                                                <p className="item--T8Z">이병훈</p>
                                            </div>
                                            <div className="frame-607-NmK">
                                                <p className="item--XeD">주소</p>
                                                <p className="a37-rgV">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-n4M">
                                                <p className="item--wC9">사업자등록번호</p>
                                                <p className="item-415-86-02577-esF">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-mws">
                                            <div className="frame-604-i6R">
                                                <p className="item--Fs3">고객센터 대표번호</p>
                                                <p className="item-1670-2251-yHF">1670-2251</p>
                                            </div>
                                            <div className="frame-608-WHB">
                                                <p className="item--s7j">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-o1P">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-gay">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-vfyp-ofb">
                                <div className="frame-616-Yt5">사업자정보확인</div>
                                <div className="auto-group-eca7-NcD">
                                    <img
                                        className="logo-v7w"
                                        src={require("~/assets/images/logo-vWy.png")}
                                    />
                                    <div className="sns-Sry">
                                        <img
                                            className="group-11-yru"
                                            src={require("~/assets/images/group-11.png")}
                                        />
                                        <div className="icoi-X7j">
                                            <img
                                                className="mask-group-rA1"
                                                src={require("~/assets/images/mask-group-L4M.png")}
                                            />
                                            <img
                                                className="mask-group-mnm"
                                                src={require("~/assets/images/mask-group-885.png")}
                                            />
                                            <img
                                                className="mask-group-WEZ"
                                                src={require("~/assets/images/mask-group-a3F.png")}
                                            />
                                            <img
                                                className="mask-group-qGq"
                                                src={require("~/assets/images/mask-group-MBK.png")}
                                            />
                                            <img
                                                className="mask-group-N1s"
                                                src={require("~/assets/images/mask-group-RYq.png")}
                                            />
                                            <img
                                                className="mask-group-uXb"
                                                src={require("~/assets/images/mask-group-Wgm.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-diV"
                                            src={require("~/assets/images/icof-gCm.png")}
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
export default Announcement
