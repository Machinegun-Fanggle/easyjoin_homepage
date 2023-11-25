// 리액트 메인 컴포넌트
import React from "react"
import "./makeHomepage.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const MakeHomepage = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브3-홈페이지제작서비스</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
            </Helmet>

            <div className="item-3--5Rw">
                <AppContainer windowWidth={window.innerWidth}>
                    <div className="auto-group-efsb-iE1">
                        <div className="rectangle-1078-QMj"></div>
                        <div className="rectangle-22-7mw">
                            <div className="rectangle-22-7mw-bg"></div>
                        </div>
                        <div className="rectangle-1079-jYR"></div>
                        <p className="item--eQV">
                            분양현장에 특화된
                            <br />
                            홈페이지 제작
                        </p>
                        <p className="item--VR7">이지조인</p>
                        <p className="item--ty3">
                            현장상황에 맞추어 간편하고 쉽게 관리하고
                            <br />
                            맞춤형 마케팅 할 수 있도록 지원합니다.
                        </p>
                    </div>
                    <div className="auto-group-zfhv-vEq">
                        <div className="frame-23-eRj">
                            <p className="item--a4V">
                                <span className="item--a4V-sub-0">부동산 분양 현장에</span>
                                <span className="item--a4V-sub-1"> 특화된</span>
                                <span className="item--a4V-sub-2"> </span>
                                <span className="item--a4V-sub-3">홈페이지</span>
                                <span className="item--a4V-sub-4"> 제작</span>
                            </p>
                            <p className="pc--7MF">
                                스마트폰이나 pc, 태블릿 등 다양한 환경에 맞춰 최적화된 화면을
                                나타내는 반응형 웹
                            </p>
                        </div>
                        <div className="frame-24-NY5">
                            <p className="item--tmK">주요 서비스</p>
                            <p className="item--bQq">서비스 기간 내 무상서비스를 지원합니다.</p>
                        </div>
                        <div className="auto-group-nrmu-5L1">
                            <img className="item-1-aGm" src={require("~/assets/images/-fG1.png")} />
                        </div>
                        <div className="auto-group-f8z9-RYH">
                            <div className="frame-920-kKf">접속통계</div>
                            <div className="frame-629-d8Z">홈페이지 유지 관리</div>
                        </div>
                        <div className="auto-group-2u8f-heD">
                            <div className="frame-922-RKK">팝업관리</div>
                            <div className="frame-923-7C9">게시판 관리</div>
                        </div>
                        <div className="auto-group-gyl3-QS9">
                            <div className="frame-924-XWm">문의 기능</div>
                            <div className="frame-925-QqT">관심고객 등록</div>
                        </div>
                        <div className="auto-group-5szq-hpZ">
                            <div className="frame-921-2rq">
                                <p className="item--kH3">
                                    접속 고객들의 데이터가 실시간 그래프 통계로 표시
                                </p>
                                <p className="item--QcV">
                                    <span className="item--QcV-sub-0">
                                        접속경로(네이버, 구글, 블로그 등 어느 링크나 검색을 통해
                                        접속하는지)와
                                        <br />
                                    </span>
                                    <span className="item--QcV-sub-1">
                                        접속위치, 방문자 수 등의 데이터를 통해 맞춤형 마케팅 가능
                                    </span>
                                </p>
                            </div>
                            <div className="frame-926-pi9">
                                <p className="item-1-An1">서비스 기간 내 무상서비스 항목(월1회)</p>
                                <p className="item--req">
                                    각종 이벤트나 프로모션 실행 시 필요한 팝업화면 작성이나
                                    <br />
                                    - 메뉴 변경
                                    <br />
                                    - 이미지 변경
                                    <br />
                                    - 텍스트의 변경
                                    <br />- 도메인 주소 무상 제공
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-3fet-cGd">
                            <div className="frame-930-8km">
                                <p className="item--sTT">실시간 알림 서비스</p>
                                <p className="item--BDF">
                                    홈페이지 접속 시 고객 문의사항이 등록 되었을 경우
                                    <br />
                                    실시간으로 담당자의 휴대폰 문자/이메일로 내용과 알람 전송
                                </p>
                            </div>
                            <div className="frame-927-LVT">
                                <p className="item--4AZ">관심고객 알림 서비스</p>
                                <p className="item--ZND">
                                    관심고객 등록 시 실시간으로 담당자의 휴대폰 문자/이메일로
                                    <br />
                                    내용과 알람 전송
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-ug2w-NqT">
                            <div className="frame-929-72M">
                                <p className="item--Esf">이벤트 및 공지사항 안내</p>
                                <p className="item--wn5">
                                    각종 이벤트 공지가 가능한 팝업 이미지나 문구를
                                    <br />
                                    직접 수정하실 수 있으며, 간편하게 등록 가능
                                </p>
                            </div>
                            <div className="frame-928-ML1">
                                <p className="item--Vh7">손쉬운 관리 </p>
                                <p className="item--pUV">
                                    분양 현장과 관련된 공지나 안내, 각종 광고 자료들을
                                    <br />
                                    손쉽게 등록하며 관리가 용이
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-k5qx-EYD">
                            <div className="frame-917-Mcq">
                                <p className="item--Vj3">기본메뉴</p>
                                <p className="item-6--D9F">
                                    사업안내, 프리미엄, 단지안내, 타입안내,
                                    <br />
                                    자료실, 고객센터와 같은 기본메뉴를
                                    <br />
                                    현장상황에 맞추어 기본 6개 메뉴로 구성
                                </p>
                            </div>
                            <div className="frame-918-wzM">
                                <p className="item--gww">서브메뉴</p>
                                <p className="item-20--JTX">
                                    기본 메뉴 하단에 구성되는 서브메뉴는
                                    <br />
                                    분양상품에 맞춰 항목으로 구성
                                    <br />
                                    (20페이지 이내)
                                </p>
                            </div>
                            <div className="frame-919-HaM">
                                <p className="item--RAm">전자계약</p>
                                <p className="item--Xjb">
                                    전자계약을 체결하실 수 있는
                                    <br />
                                    별도 메뉴 제공
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-hxpw-NkD">
                            <img
                                className="vector-2-JNy"
                                src={require("~/assets/images/vector-2.png")}
                            />

                            <div className="auto-group-4edz-Sk5">
                                <div className="group-15-b7B">
                                    <div className="auto-group-e5jy-vfF">
                                        <div className="frame-916-fcq">
                                            <p className="item--ydX">사업안내</p>
                                            <p className="item--gnq">프리미엄</p>
                                            <p className="item--o6m">단지안내</p>
                                            <p className="item--7dF">타입안내</p>
                                            <p className="item--qJM">자료실</p>
                                            <p className="item--MGh">고객센터</p>
                                            <p className="item--GeZ">전자계약</p>
                                        </div>
                                        <div className="rectangle-1088-zqT"></div>
                                    </div>
                                    <div className="auto-group-bwxh-hE5">
                                        <p className="item--c69">
                                            사업개요
                                            <br />
                                            브랜드 소개
                                            <br />
                                            오시는길
                                        </p>
                                        <p className="item--Ue9">
                                            프리미엄
                                            <br />
                                            입지환경
                                        </p>
                                        <p className="item--NDj">
                                            동호수 배치도
                                            <br />
                                            시스템
                                            <br />
                                            커뮤니티
                                        </p>
                                        <p className="a-type-75b-type-84a-type-84b-type-84c-type-SjP">
                                            75A Type
                                            <br />
                                            75B Type
                                            <br />
                                            84A Type
                                            <br />
                                            84B Type
                                            <br />
                                            84C Type
                                        </p>
                                        <p className="item--kEH">
                                            공지사항
                                            <br />
                                            언론보도
                                        </p>
                                        <p className="item--Sso">괌심고객 등록</p>
                                    </div>
                                </div>
                                <img
                                    className="vector-3-6SZ"
                                    src={require("~/assets/images/vector-3.png")}
                                />

                                {/* <img
                                    className="arrow-1-RUq"
                                    src={require("REPLACE_IMAGE:204:10883")}
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="footer-9Qq">
                        <div className="top-line-VUh"></div>
                        <div className="footer-container-2zR">
                            <div className="footer-contents-xdB">
                                <div className="foot-nav-Weh">
                                    <p className="item--Dp1">회사소개</p>
                                    <div className="auto-group-oh1m-YrH">
                                        <div className="bar-fvu"></div>
                                        <p className="item--Pru">서비스 소개</p>
                                        <div className="bar-WRj"></div>
                                        <p className="item--QX7">고객센터</p>
                                        <div className="bar-iXo"></div>
                                        <p className="item--STo">이용약관</p>
                                        <div className="bar-Aeh"></div>
                                        <p className="item--Vgy">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-ztd">
                                    <div className="company-info-Yv9">
                                        <div className="frame-606-h2M">
                                            <div className="frame-602-pMs">
                                                <p className="item--Msb">대표</p>
                                                <p className="item--HmF">이병훈</p>
                                            </div>
                                            <div className="frame-607-coX">
                                                <p className="item--mAd">주소</p>
                                                <p className="a37-Huf">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-1Ks">
                                                <p className="item--ATf">사업자등록번호</p>
                                                <p className="item-415-86-02577-t8m">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-cKf">
                                            <div className="frame-604-jv5">
                                                <p className="item--Hgh">고객센터 대표번호</p>
                                                <p className="item-1670-2251-Pzd">1670-2251</p>
                                            </div>
                                            <div className="frame-608-j2u">
                                                <p className="item--HKK">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-ChB">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-gcM">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-5ajd-zsw">
                                <div className="frame-616-YPf">사업자정보확인</div>
                                <div className="auto-group-sy1q-Afw">
                                    <img
                                        className="logo-iBf"
                                        src={require("~/assets/images/logo-YD3.png")}
                                    />

                                    <div className="sns-e5K">
                                        <img
                                            className="group-11-Bb3"
                                            src={require("~/assets/images/group-11.png")}
                                        />
                                        <div className="icoi-vYd">
                                            <img
                                                className="mask-group-THf"
                                                src={require("~/assets/images/mask-group-Qcm.png")}
                                            />
                                            <img
                                                className="mask-group-BDf"
                                                src={require("~/assets/images/mask-group-edb.png")}
                                            />
                                            <img
                                                className="mask-group-Jp5"
                                                src={require("~/assets/images/mask-group-swT.png")}
                                            />
                                            <img
                                                className="mask-group-e7F"
                                                src={require("~/assets/images/mask-group-Uaq.png")}
                                            />
                                            <img
                                                className="mask-group-AbP"
                                                src={require("~/assets/images/mask-group-np5.png")}
                                            />
                                            <img
                                                className="mask-group-i77"
                                                src={require("~/assets/images/mask-group-QXo.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-qhX"
                                            src={require("~/assets/images/icof-iRs.png")}
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
export default MakeHomepage
