// 리액트 메인 컴포넌트
import React from "react"
import "./consulting.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const Consulting = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브4-부동산개발컨설팅</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
            </Helmet>

            <div className="item-4--J4M">
                <AppContainer windowWidth={window.innerWidth}>
                    <div className="auto-group-gbzu-nVK">
                        <div className="auto-group-tvr1-jFT">
                            <div className="auto-group-9rmm-Uiq">
                                <p className="item--q3b">이지조인</p>
                                <p className="item--xP7">
                                    개발 기획부터 준공까지
                                    <br />
                                    맞춤형 부동산 개발 컨설팅
                                </p>
                            </div>
                            <div className="auto-group-naaf-DZw">
                                <img
                                    className="contract-2-1-vDT"
                                    src={require("~/assets/images/contract-2-1.png")}
                                />
                                <p className="item--qLR">서비스 신청</p>
                            </div>
                        </div>
                        <div className="auto-group-devr-7Yq">
                            <p className="item--f4Z">
                                전자계약 솔루션 외에 부동산 개발에 필요한 종합적인 컨설팅 서비스를
                                제공합니다.
                            </p>
                            <div className="auto-group-syao-sAd">
                                <img
                                    className="customer-service-1-aKw"
                                    src={require("~/assets/images/customer-service-1.png")}
                                />
                                <p className="item--JWq">고객 지원</p>
                            </div>
                            <div className="auto-group-efvk-C6R">
                                <img
                                    className="landing-page-2-i4m"
                                    src={require("~/assets/images/landing-page-2.png")}
                                />
                                <p className="item--qQH">컨설팅 문의</p>
                            </div>
                        </div>
                    </div>
                    <div className="auto-group-uvns-65K">
                        <div className="frame-23-D9w">
                            <p className="item--KsB">
                                <span className="item--KsB-sub-0">부동산 </span>
                                <span className="item--KsB-sub-1">개발 컨설팅</span>
                            </p>
                            <p className="item--cjo">
                                개발 기획부터 준공 후 임대관리까지 통합 컨설팅을 제공하며
                                <br />
                                시행, 시공, 금융, 분양, 홍보까지 효과적이고 세심하게 처리합니다.
                            </p>
                        </div>
                        <div className="auto-group-pvfd-nGu">
                            <div className="rectangle-66-74H">
                                <div className="rectangle-66-74H-bg"></div>
                            </div>
                            <div className="auto-group-bdzd-xah">
                                <div className="frame-909-tjF">
                                    <p className="item--quP">목표달성 및 일정준수</p>
                                    <p className="item--9fB">
                                        명확한 목표와 범위를 설정하고 이를 달성하기 위한 계획을
                                        수립하고
                                        <br />
                                        철저한 프로젝트관리를 통해 일정을 준수하여 목표를
                                        달성합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="auto-group-h8wp-tWH">
                            <div className="rectangle-67-pPw"></div>
                            <div className="auto-group-3qqo-iER">
                                <div className="frame-910-EiZ">
                                    <p className="item--bJD">노하우를 통한 효율성 극대화</p>
                                    <p className="item--Hgq">
                                        프로젝트의 작업흐름을 최적화 하고 리소스를 효과적으로
                                        활용하여 사업비를 절감하고
                                        <br />
                                        사업 매출구조 개선을 통해 이익을 극대화 합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="auto-group-nwtq-EVb">
                            <div className="rectangle-68-mVX"></div>
                            <div className="auto-group-ttsb-soT">
                                <div className="frame-911-QHb">
                                    <p className="item--kcM">효과적인 리스크 관리</p>
                                    <p className="item--SVB">
                                        풍부한 경험을 바탕으로 지속적인 식별, 분석, 완화, 모니터링
                                        등을 통해 리스크 발생 및 영향을 최소화하고
                                        <br />
                                        문제 발생시 즉각적이 대응을 통해 데미지를 최소화 합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item-jch">
                            <div className="frame-652-qvd">
                                <p className="pm-xVT">PM</p>
                                <p className="project-management-te1">Project Management</p>
                            </div>
                            <p className="item--1id">
                                개발 기획 및 인허가
                                <br />
                                사업성 검토
                                <br />
                                분양가 및 시세분석
                                <br />
                                사업성 수지분석 및 평가
                            </p>
                        </div>
                        <div className="auto-group-kqyt-R1f">
                            <div className="item-jY9">
                                <div className="frame-652-3Hw">금융 컨설팅</div>
                                <p className="item--Lnq">
                                    금융구조화
                                    <br />
                                    필수사업비 조달
                                    <br />
                                    신탁사 및 금융사 선정
                                </p>
                            </div>
                            <div className="item-x3X">
                                <div className="frame-652-eS9">
                                    <p className="pm-AvH">CM</p>
                                    <p className="project-management-7Kj">
                                        Construction Management
                                    </p>
                                </div>
                                <p className="item--qWd">
                                    시공사 선정 및 계약 체결 업무
                                    <br />
                                    최적 건축설계 자문 및 최유효
                                    <br />
                                    이용계획 방향 설정
                                </p>
                            </div>
                            <div className="item-TH7">
                                <div className="frame-652-n4V">마케팅</div>
                                <p className="item--J2q">
                                    분양 및 광고사 교육 및 임대관리
                                    <br />
                                    맞춤 홍보로 성공적인 분양 지원
                                </p>
                            </div>
                            <div className="ellipse-17-Jww"></div>
                            <img
                                className="website-RFs"
                                src={require("~/assets/images/website.png")}
                            />
                        </div>
                        <div className="frame-628-Ltd">개발사업관리(Project Management) 효과</div>
                        <div className="frame-912-1E5">투자유치</div>
                        <div className="frame-22-g5K">
                            <p className="item--z61">
                                광고비, 모델하우스 공사비, 각종 용역비용 등 사업초기 부족한 사업비를
                                <br />
                                투자자 유치를 통해 조달할 수 있도록 하여 사업을 원활히 추진할 수
                                있도록 합니다
                            </p>
                        </div>
                    </div>
                    <div className="footer-hed">
                        <div className="top-line-FAM"></div>
                        <div className="footer-container-zNq">
                            <div className="footer-contents-Kg1">
                                <div className="foot-nav-5QH">
                                    <p className="item--QBf">회사소개</p>
                                    <div className="auto-group-m4lj-vQu">
                                        <div className="bar-Fi5"></div>
                                        <p className="item--B5w">서비스 소개</p>
                                        <div className="bar-u1w"></div>
                                        <p className="item--DHX">고객센터</p>
                                        <div className="bar-Y4u"></div>
                                        <p className="item--s7B">이용약관</p>
                                        <div className="bar-b3B"></div>
                                        <p className="item--7GR">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-pRj">
                                    <div className="company-info-B1P">
                                        <div className="frame-606-vUm">
                                            <div className="frame-602-rtD">
                                                <p className="item--1WD">대표</p>
                                                <p className="item--96d">이병훈</p>
                                            </div>
                                            <div className="frame-607-Td7">
                                                <p className="item--D6V">주소</p>
                                                <p className="a37-YPf">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-exV">
                                                <p className="item--RCZ">사업자등록번호</p>
                                                <p className="item-415-86-02577-vf7">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-eb7">
                                            <div className="frame-604-MkR">
                                                <p className="item--7Do">고객센터 대표번호</p>
                                                <p className="item-1670-2251-DXj">1670-2251</p>
                                            </div>
                                            <div className="frame-608-LsF">
                                                <p className="item--u9f">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-pXX">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-7Fj">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-abpr-RnD">
                                <div className="frame-616-MA5">사업자정보확인</div>
                                <div className="auto-group-3vyh-aYd">
                                    <img
                                        className="logo-XCy"
                                        src={require("~/assets/images/logo-6ow.png")}
                                    />
                                    <div className="sns-4To">
                                        <img
                                            className="group-11-byX"
                                            src={require("~/assets/images/group-11.png")}
                                        />
                                        <div className="icoi-ruT">
                                            <img
                                                className="mask-group-zEy"
                                                src={require("~/assets/images/mask-group-3mX.png")}
                                            />
                                            <img
                                                className="mask-group-K2M"
                                                src={require("~/assets/images/mask-group-fpH.png")}
                                            />
                                            <img
                                                className="mask-group-S6y"
                                                src={require("~/assets/images/mask-group-HyF.png")}
                                            />
                                            <img
                                                className="mask-group-xb7"
                                                src={require("~/assets/images/mask-group-ie9.png")}
                                            />
                                            <img
                                                className="mask-group-tjf"
                                                src={require("~/assets/images/mask-group-3Pj.png")}
                                            />
                                            <img
                                                className="mask-group-EYd"
                                                src={require("~/assets/images/mask-group-M7K.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-ASH"
                                            src={require("~/assets/images/icof-wed.png")}
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
export default Consulting
