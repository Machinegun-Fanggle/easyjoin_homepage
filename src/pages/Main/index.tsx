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
                    <div className="footer-fQh">
                        <div className="top-line-b3T"></div>
                        <div className="footer-container-vbX">
                            <div className="footer-contents-GQV">
                                <div className="foot-nav-28m">
                                    <p className="item--Z8h">회사소개</p>
                                    <div className="auto-group-vqaf-3pZ">
                                        <div className="bar-APP"></div>
                                        <p className="item--heD">서비스 소개</p>
                                        <div className="bar-2gV"></div>
                                        <p className="item--NEZ">고객센터</p>
                                        <div className="bar-VKB"></div>
                                        <p className="item--Rid">이용약관</p>
                                        <div className="bar-MsB"></div>
                                        <p className="item--HVw">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-1Rw">
                                    <div className="company-info-Apd">
                                        <div className="frame-606-6CV">
                                            <div className="frame-602-qQy">
                                                <p className="item--Zrm">대표</p>
                                                <p className="item--t8M">이병훈</p>
                                            </div>
                                            <div className="frame-607-oFK">
                                                <p className="item--A5s">주소</p>
                                                <p className="a37-Vtq">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-E5j">
                                                <p className="item--mbT">사업자등록번호</p>
                                                <p className="item-415-86-02577-hV7">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-CRs">
                                            <div className="frame-604-8KX">
                                                <p className="item--faM">고객센터 대표번호</p>
                                                <p className="item-1670-2251-JtD">1670-2251</p>
                                            </div>
                                            <div className="frame-608-3au">
                                                <p className="item--QwF">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-YnZ">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-3jK">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-jwh9-LiR">
                                <div className="frame-616-VLR">사업자정보확인</div>
                                <div className="auto-group-ngi7-YJh">
                                    <img
                                        className="logo-gA1"
                                        src={require("~/assets/images/logo-WJH.png")}
                                    />
                                    <div className="sns-d5F">
                                        <img
                                            className="group-11-kvZ"
                                            src={require("~/assets/images/group-11.png")}
                                        />
                                        <div className="icoi-VNM">
                                            <img
                                                className="mask-group-QVK"
                                                src={require("~/assets/images/mask-group-YJ1.png")}
                                            />
                                            <img
                                                className="mask-group-9C1"
                                                src={require("~/assets/images/mask-group-Cvy.png")}
                                            />
                                            <img
                                                className="mask-group-Uzy"
                                                src={require("~/assets/images/mask-group-2oP.png")}
                                            />
                                            <img
                                                className="mask-group-Q7w"
                                                src={require("~/assets/images/mask-group-EGV.png")}
                                            />
                                            <img
                                                className="mask-group-95X"
                                                src={require("~/assets/images/mask-group-FHF.png")}
                                            />
                                            <img
                                                className="mask-group-6Ff"
                                                src={require("~/assets/images/mask-group-KcZ.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-DbB"
                                            src={require("~/assets/images/icof-3C9.png")}
                                        />
                                    </div>
                                </div>
                            </div>
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
