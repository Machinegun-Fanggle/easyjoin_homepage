// 리액트 메인 컴포넌트
import React from "react"
import "./qna.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const QnA = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브6-고객지원-자주하는질문</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
            </Helmet>

            <div className="item-6--E9j">
                <AppContainer windowWidth={window.innerWidth}>
                    {" "}
                    <div className="auto-group-7k23-hp1">
                        <p className="item--RV7">자주하는 질문</p>
                        <div className="auto-group-wiy3-gR3">
                            <div className="faq-tabmenu-C8V">전체</div>
                            <div className="faq-tabmenu-4Rb">서비스 이용 관련</div>
                            <div className="frame-619-9xq">법적효력</div>
                            <div className="frame-620-TCq">보안</div>
                            <div className="frame-621-95f">기타</div>
                        </div>
                        <div className="frame-627-F8h">
                            <div className="faq-accordion-m73">
                                <div className="frame-622-TkZ">
                                    <p className="q-opR"> Q</p>
                                    <p className="item--LJZ">[서비스 이용관련]</p>
                                    <p className="item--r21">
                                        전자계약을 이용한다는 점에 대한 불만은 없었나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-7Cq"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-pN9">
                                <div className="frame-622-iyK">
                                    <p className="q-USh"> Q</p>
                                    <p className="item--QbF">[서비스 이용관련]</p>
                                    <p className="item--irq">
                                        계약 상대방도 이지조인에 가입을 해야 하나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-zJZ"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-78H">
                                <div className="frame-622-DSD">
                                    <p className="q-mCq"> Q</p>
                                    <p className="item--WAR">[서비스 이용관련]</p>
                                    <p className="item--cDT">
                                        이지조인 회원가입 시 법인명으로 가입하나요? 담당자 이름으로
                                        가입하나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-up-efw"
                                    src={require("~/assets/images/chevron-up.png")}
                                />
                            </div>
                            <div className="frame-626-Znu">
                                <p className="ex--6nq">
                                    향후 법적 분쟁 발생 시 당사자 확인을 용이하게 하기 위해 계약
                                    담당자의 계정을 통해 가입하셔야 합니다.
                                    <br />
                                    계정 공유는 금지되며, 이는 같은 회사 내에서도 적용됩니다.
                                    <br />
                                    이지조인 가입 회원명과 계약서 체결주체 표시(ex. 법인 명)는
                                    이지조인 홈페이지 로그인 후 설정 변경을 통하여
                                    <br />
                                    서로 다르게 설정하실 수 있으므로, 법인계약 체결 시 계약 체결
                                    주체 표시를 법인명으로 변경하여 사용하시면 됩니다.
                                </p>
                            </div>
                            <div className="faq-accordion-CjP">
                                <div className="frame-622-WVB">
                                    <p className="q-4Wh"> Q</p>
                                    <p className="item--zv9">[서비스 이용관련]</p>
                                    <p className="item--vJ1">
                                        1건의 계약 시 최대 몇 명, 몇 개까지 서명 입력이 가능한가요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-PxH"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-iDs">
                                <div className="frame-622-2kM">
                                    <p className="q-yfb"> Q</p>
                                    <p className="item--it5">[서비스 이용관련]</p>
                                    <p className="item--e13">서명자의 순서는 지정할 수 있나요?</p>
                                </div>
                                <img
                                    className="chevron-down-Kcy"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-FFj">
                                <div className="frame-622-mE5">
                                    <p className="q-Jzh"> Q</p>
                                    <p className="item--qjj">[법적효력]</p>
                                    <p className="item--AX7">
                                        이지조인에서 법인 인감을 등록해서 활용하는 것이 실물 법인
                                        인감 날인과 동일한가요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-eBP"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-Mbb">
                                <div className="frame-622-fsB">
                                    <p className="q-2Sq"> Q</p>
                                    <p className="item--xbP">[법적효력]</p>
                                    <p className="item--FqP">
                                        이지조인 전자계약과 전자서명은 법적 효력이 있나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-Y3o"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-f8R">
                                <div className="frame-622-ZzV">
                                    <p className="q-XRX"> Q</p>
                                    <p className="item--U5s">[법적효력]</p>
                                    <p className="item--zK7">
                                        이지조인에서 상대방이 계약 권한을 가졌는지 등 위임 사실을
                                        확인해주나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-UEH"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-Pc9">
                                <div className="frame-622-6mT">
                                    <p className="q-eny"> Q</p>
                                    <p className="item--biD">[법적효력]</p>
                                    <p className="item--KPK">간인이나 계인을 하지 않아도 되나요?</p>
                                </div>
                                <img
                                    className="chevron-down-CT7"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-ve1">
                                <div className="frame-622-SMT">
                                    <p className="q-Bpq"> Q</p>
                                    <p className="item--7yP">[보안]</p>
                                    <p className="item--dgq">
                                        이지조인에서 문서를 열람할 수 있나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-76D"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-dKT">
                                <div className="frame-622-YBX">
                                    <p className="q-VMf"> Q</p>
                                    <p className="item--SGu">[보안]</p>
                                    <p className="item--ZMX">감사 추적 인증서란 무엇인가요?</p>
                                </div>
                                <img
                                    className="chevron-down-SgD"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-B81">
                                <div className="frame-622-Hwj">
                                    <p className="q-qyF"> Q</p>
                                    <p className="item--nNh">[기타]</p>
                                    <p className="item--WJh">
                                        실제로 전자계약을 사용하는 현장이 있나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-Nbo"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-ta9">
                                <div className="frame-622-oBK">
                                    <p className="q-kMT"> Q</p>
                                    <p className="item--6RK">[기타]</p>
                                    <p className="item--1oB">
                                        전자계약으로 가입을 진행하였을 때, 현장 반응은 어떠했나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-hR7"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-q1X">
                                <div className="frame-622-92D">
                                    <p className="q-gnq"> Q</p>
                                    <p className="item--Dnm">[기타]</p>
                                    <p className="item--LcV">신탁사 등의 업무처리가 가능한가요?</p>
                                </div>
                                <img
                                    className="chevron-down-RP3"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                            <div className="faq-accordion-LW1">
                                <div className="frame-622-eWh">
                                    <p className="q-zqT"> Q</p>
                                    <p className="item--wEu">[기타]</p>
                                    <p className="item--4KX">
                                        계약기간이 끝나면 제공받은 태블릿은 반납을 해야 하나요?
                                    </p>
                                </div>
                                <img
                                    className="chevron-down-jwT"
                                    src={require("~/assets/images/chevron-down-black.png")}
                                />
                            </div>
                        </div>
                        <div className="frame-636-s25">
                            <p className="item--BYZ">키워드표시</p>
                            <p className="item--VZF">키워드표시</p>
                            <p className="item--CTf">키워드표시</p>
                            <p className="item--veZ">키워드표시</p>
                        </div>
                        <div className="group-1-rYD">
                            <div className="frame-645-NFf">
                                <img
                                    className="search-md-5vm"
                                    src={require("~/assets/images/search-md.png")}
                                />
                                <p className="item--k1K">궁금한 점이 있다면 검색해보세요!</p>
                            </div>
                        </div>
                        <div className="gnb-zgM">
                            <img
                                className="logo-va1"
                                src={require("~/assets/images/logo-CJq.png")}
                            />
                            <div className="frame-1-3Pj">
                                <div className="auto-group-h3t9-PTb">
                                    <p className="item--7uP">이지조인서비스</p>
                                    <p className="item--eeR">전자계약</p>
                                    <p className="item--a2H">홈페이지 제작</p>
                                    <p className="item--6mK">부동산 개발 컨설팅</p>
                                    <p className="item--2us">서비스 신청</p>
                                </div>
                                <div className="gnb-text-mcZ">고객지원</div>
                            </div>
                            <div className="frame-2-GpD">
                                <div className="button-type-1-pKw">로그인</div>
                                <div className="button-type-1-tah">도입문의</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-AYD">
                        <div className="top-line-WMB"></div>
                        <div className="footer-container-3M7">
                            <div className="footer-contents-yEm">
                                <div className="foot-nav-KZX">
                                    <p className="item--FTB">회사소개</p>
                                    <div className="auto-group-awmh-aVT">
                                        <div className="bar-uXj"></div>
                                        <p className="item--did">서비스 소개</p>
                                        <div className="bar-Z6V"></div>
                                        <p className="item--VF3">고객센터</p>
                                        <div className="bar-p2R"></div>
                                        <p className="item--9Kb">이용약관</p>
                                        <div className="bar-Gv1"></div>
                                        <p className="item--pAq">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-Xqw">
                                    <div className="company-info-68M">
                                        <div className="frame-606-EkM">
                                            <div className="frame-602-BQh">
                                                <p className="item--XzM">대표</p>
                                                <p className="item--fKs">이병훈</p>
                                            </div>
                                            <div className="frame-607-Bp1">
                                                <p className="item--wYH">주소</p>
                                                <p className="a37-58h">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-o4h">
                                                <p className="item--9uF">사업자등록번호</p>
                                                <p className="item-415-86-02577-fsb">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-CMj">
                                            <div className="frame-604-Xuo">
                                                <p className="item--HPB">고객센터 대표번호</p>
                                                <p className="item-1670-2251-zoP">1670-2251</p>
                                            </div>
                                            <div className="frame-608-XoK">
                                                <p className="item--tNy">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-1yP">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-uYy">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-odns-ELM">
                                <div className="frame-616-BFb">사업자정보확인</div>
                                <div className="auto-group-tnt3-cLu">
                                    <img
                                        className="logo-ki1"
                                        src={require("~/assets/images/logo-UA9.png")}
                                    />
                                    <div className="sns-HC9">
                                        <img
                                            className="group-11-E7P"
                                            src={require("~/assets/images/group-11.png")}
                                        />
                                        <div className="icoi-Amj">
                                            <img
                                                className="mask-group-hFs"
                                                src={require("~/assets/images/mask-group-EY5.png")}
                                            />
                                            <img
                                                className="mask-group-DV7"
                                                src={require("~/assets/images/mask-group-MGq.png")}
                                            />
                                            <img
                                                className="mask-group-wAD"
                                                src={require("~/assets/images/mask-group-n6H.png")}
                                            />
                                            <img
                                                className="mask-group-TuF"
                                                src={require("~/assets/images/mask-group-JVK.png")}
                                            />
                                            <img
                                                className="mask-group-zeH"
                                                src={require("~/assets/images/mask-group-nNy.png")}
                                            />
                                            <img
                                                className="mask-group-91P"
                                                src={require("~/assets/images/mask-group-edb.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-Gbo"
                                            src={require("~/assets/images/icof-cMs.png")}
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
export default QnA
