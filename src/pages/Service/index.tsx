// 리액트 메인 컴포넌트
import React from "react"
import "./service.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const Service = () => {
    return (
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>서브1-이지조인서비스</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Pretendard%3A400%2C500%2C600%2C700"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
                />
                <link rel="stylesheet" href="./styles/-LVT.css" />
            </Helmet>

            <div className="item-1--3au">
                <AppContainer windowWidth={window.innerWidth}>
                    <div className="auto-group-heyb-TuX">
                        <div className="rectangle-1077-aUM"></div>
                        <p className="item--qQH">
                            가장 쉽고 빠른
                            <br />
                            부동산 전자계약 솔루션
                        </p>
                        <p className="item--eMj">
                            <span className="item--eMj-sub-0">
                                부동산 개발 주체 및 각 단체가 회원을 더 쉽게 모집하고
                                <br />
                                다양한 단체의 가입 계약을 전자계약으로 체결하고 관리하는
                                <br />
                            </span>
                            <span className="item--eMj-sub-1">부동산 통합 전자계약 솔루션</span>
                        </p>
                        <p className="item--9Uq">이지조인 서비스</p>
                        <div className="gnb-d97">
                            <img
                                className="logo-YG5"
                                src={require("../../assets/images/logo-TqF.png")}
                            />
                            <div className="frame-1-doK">
                                <div className="gnb-text-NF7">이지조인 서비스</div>
                                <div className="auto-group-t81h-eTX">
                                    <p className="item--Awf">전자계약</p>
                                    <p className="item--HFb">홈페이지 제작</p>
                                    <p className="item--yu7">부동산 개발 컨설팅</p>
                                    <p className="item--hKK">서비스 신청</p>
                                    <p className="item--chB">고객 지원</p>
                                </div>
                            </div>
                            <div className="frame-2-LNH">
                                <div className="button-type-1-Xhf">로그인</div>
                                <div className="button-type-1-C37">도입문의</div>
                            </div>
                        </div>
                    </div>
                    <div className="auto-group-bes7-qbs">
                        <div className="frame-904-YWH">
                            <p className="item--TdF">이지조인</p>
                            <p className="item--MyX">
                                <span className="item--MyX-sub-0">이지조인</span>
                                <span className="item--MyX-sub-1">
                                    은 부동산 개발 주체 및 각 단체(조합)가 회원을 더 쉽게 모집하고
                                    관리하기 위해
                                    <br />
                                    다양한 단체의 가입 계약을 전자계약으로 체결하고 관리하는
                                    전자계약 솔루션입니다.
                                </span>
                            </p>
                        </div>
                        <div className="auto-group-ktxf-9gR">
                            <div className="image-2-pGm"></div>
                            <p className="item--5iV">
                                <span className="item--5iV-sub-0">
                                    이지조인은 지역주택조합 및 민간임대주택 협동조합 가입계약 등
                                    <br />
                                    다양한 단체의 회원모집 시 번거로운 서류작성과 인감도장 날인 및
                                    인감증명서 등의
                                    <br />
                                </span>
                                <span className="item--5iV-sub-1">
                                    서류 발급 없이도 전자계약으로 체결할 수 있는 전자계약 솔루션
                                </span>
                                <span className="item--5iV-sub-2">입니다.</span>
                            </p>
                        </div>
                        <div className="auto-group-lvrf-DEM">
                            <div className="image-3-Vhf"></div>
                            <p className="item--xr9">
                                <span className="item--xr9-sub-0">
                                    이지조인 솔루션은 회원을 효율적으로 모집하고 관리하는 것에
                                    특화되어 있는{" "}
                                </span>
                                <span className="item--xr9-sub-1">
                                    부동산 가입계약 전용 전자계약 통합 서비스
                                </span>
                                <span className="item--xr9-sub-2">
                                    로
                                    <br />
                                    부동산 분양현장에서 가입계약 체결율을 높여드립니다.
                                </span>
                            </p>
                        </div>
                        <div className="frame-24-oNu">
                            <p className="item--iVs">도입효과</p>
                            <p className="item--pYu">
                                전자계약은 종이문서와 같은 법적효력을 가집니다
                            </p>
                        </div>
                        <div className="item--gb7">
                            <img
                                className="auto-group-42qy-AWH"
                                src={require("../../assets/images/auto-group-42qy.png")}
                            />
                            <div className="frame-26-57T">
                                <p className="item--cNH">간편한 인증</p>
                                <p className="item--tqb">
                                    휴대폰 본인인증만으로
                                    <br />
                                    간편하게 본인 확인
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-fzib-jrD">
                            <div className="item--eiH">
                                <img
                                    className="auto-group-dqqo-ZKT"
                                    src={require("../../assets/images/auto-group-dqqo.png")}
                                />
                                <div className="frame-26-Tfj">
                                    <p className="item--c2q">업무력 향상</p>
                                    <p className="item--hpy">
                                        디지털화로 인하여
                                        <br />
                                        업무의 생산성과 효율성 증대
                                    </p>
                                </div>
                            </div>
                            <div className="item--Yah">
                                <img
                                    className="auto-group-3izp-43F"
                                    src={require("../../assets/images/auto-group-3izp.png")}
                                />
                                <div className="frame-26-Yj7">
                                    <p className="item--Ucm">보안 용이</p>
                                    <p className="item--avh">
                                        데이터 암호화를 제공하여 전송 중
                                        <br />
                                        데이터를 안전하게 보호
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="auto-group-prto-Sxu">
                            <div className="item--yC9">
                                <img
                                    className="auto-group-nhbr-g6Z"
                                    src={require("../../assets/images/auto-group-nhbr.png")}
                                />
                                <div className="frame-26-n9b">
                                    <p className="item--J7w">폴더관리</p>
                                    <p className="item--bsj">
                                        폴더별로 정리가 가능하여
                                        <br />
                                        문서정리와 보관의 편의성 제공
                                    </p>
                                </div>
                            </div>
                            <div className="item--Efo">
                                <img
                                    className="auto-group-7pdm-xLu"
                                    src={require("../../assets/images/auto-group-7pdm.png")}
                                />
                                <div className="frame-26-fWD">
                                    <p className="item--1KB">비용절감</p>
                                    <p className="item--hho">
                                        전자 계약을 통해
                                        <br />
                                        종이 서류시 계약에 드는 비용 절감
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="auto-group-mhpx-mSm">
                            <div className="item--6E9">
                                <img
                                    className="auto-group-en5h-CHB"
                                    src={require("../../assets/images/auto-group-en5h.png")}
                                />
                                <div className="frame-26-W2y">
                                    <p className="item--EzZ">환경보호</p>
                                    <p className="item--xQm">
                                        종이 낭비가 없는 친환경적인
                                        <br />
                                        페이퍼리스 계약으로 환경보호 기여
                                    </p>
                                </div>
                            </div>
                            <div className="item--cVK">
                                <img
                                    className="auto-group-wsqq-vW1"
                                    src={require("../../assets/images/auto-group-wsqq.png")}
                                />
                                <div className="frame-26-2Z3">
                                    <p className="item--NN1">쉬운 수정</p>
                                    <p className="item--gNh">
                                        템플릿 내용을 수정하여 진행하기에
                                        <br />
                                        빠르게 계약 체결 가능
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item--jLy">
                            <img
                                className="auto-group-rwhh-1ZP"
                                src={require("../../assets/images/auto-group-rwhh.png")}
                            />
                            <div className="frame-26-vAZ">
                                <p className="item--rK7">시간절약</p>
                                <p className="item--ZjK">
                                    계약서 작성 시간 단 5분!
                                    <br />
                                    계약서 검토 과정 최소화
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-rvzu-E4m">
                            <div className="auto-group-rn7u-viH">
                                <p className="item--3H7">
                                    지역주택조합
                                    <br />
                                    조합원 가입
                                </p>
                            </div>
                            <div className="auto-group-mkyw-UdK">
                                <p className="item--zrZ">
                                    민간임대 협동조합
                                    <br />
                                    조합원 가입
                                </p>
                            </div>
                            <div className="auto-group-xurq-Eku">
                                <p className="item--jxZ">기타 단체 가입</p>
                                <p className="item--MDF">
                                    가로주택,
                                    <br />
                                    소규모 재건축 사업,
                                    <br />
                                    각종동호회
                                </p>
                            </div>
                        </div>
                        <p className="item--jjb">다양한 단체가입 적용 가능</p>
                        <p className="item--b17">
                            이지조인은 부동산 관련 계약에 특화되어 있으며
                            <br />
                            회원의 가입계약이 필요한 곳이라면 모두 사용 가능합니다.
                        </p>
                        <div className="frame-902-YqT">
                            <p className="item--GWZ">부동산 개발 컨설팅 종합 패키지</p>
                            <p className="item--jf3">
                                이지조인 서비스는 전자계약 솔루션, 분양 홈페이지 제작, 맞춤 서식
                                제공으로
                                <br />
                                부동산 개발사업의 분양 성공률을 향상 시킬 수 있습니다.
                            </p>
                        </div>
                        <div className="auto-group-1zr7-Vnd">
                            <div className="rectangle-5-1W5"></div>
                            <div className="frame-9-urM">
                                <p className="item--ENq">스마트한 전자계약 솔루션</p>
                                <p className="item-5--8UD">
                                    스마트폰 본인인증을 통해 증명서류 없이
                                    <br />
                                    5분만에 계약 완료 가능한 전자계약 솔루션
                                    <br />
                                    종이문서 계약과 동일한 법적효력
                                    <br />
                                    모든 자료는 클라우드 저장소를 이용하여 저장 보존 및 관리가 용이
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-dkd1-Qa9">
                            <div className="rectangle-7-KSD">
                                <div className="rectangle-7-KSD-bg"></div>
                            </div>
                            <div className="frame-12-Mdo">
                                <p className="item--fuP">맞춤서식 제공</p>
                                <p className="item--yv5">
                                    사업별로 필요한 계약서 및 첨부서류 기본양식 제공
                                    <br />
                                    계약체결에 필요한 여러 문서를 전자 계약에 최적화한 디자인으로
                                    제공
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-h4qy-M9w">
                            <div className="frame-10-4q3">
                                <p className="item--bKB">홈페이지 제작</p>
                                <p className="item--u4y">
                                    분양 현장에 특화된 홈페이지를 반응형 웹 환경으로 제작
                                    <br />
                                    분양 현장에 필요한 기능들을 탑재한 홈페이지 제작
                                    <br />
                                    서비스 기간동안 홈페이지 디자인 수정 및 도메인 무상 제공
                                </p>
                            </div>
                            <div className="rectangle-6-Dzm"></div>
                        </div>
                        <div className="auto-group-sdsh-LJh">
                            <div className="frame-903-2xD">
                                <p className="item--YQm">부동산개발 컨설팅</p>
                                <p className="item--RzM">
                                    부동산개발 컨설팅을 통해 사업의 성공율을 높이고 사업이익을
                                    극대화
                                    <br />
                                    자금 투자 유치 및 금융구조화 등의 컨설팅 업무 진행
                                </p>
                            </div>
                            <div className="rectangle-1078-zvy"></div>
                        </div>
                    </div>
                    <div className="footer-tWZ">
                        <div className="top-line-RWV"></div>
                        <div className="footer-container-xWR">
                            <div className="footer-contents-ffj">
                                <div className="foot-nav-zxu">
                                    <p className="item--i8D">회사소개</p>
                                    <div className="auto-group-cmwh-dW5">
                                        <div className="bar-9UR"></div>
                                        <p className="item--GJ9">서비스 소개</p>
                                        <div className="bar-APX"></div>
                                        <p className="item--gcm">고객센터</p>
                                        <div className="bar-bUq"></div>
                                        <p className="item--Kfj">이용약관</p>
                                        <div className="bar-SkM"></div>
                                        <p className="item--NP7">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-GjP">
                                    <div className="company-info-d49">
                                        <div className="frame-606-NGd">
                                            <div className="frame-602-hJu">
                                                <p className="item--3Nm">대표</p>
                                                <p className="item--y1X">이병훈</p>
                                            </div>
                                            <div className="frame-607-Uys">
                                                <p className="item--dLy">주소</p>
                                                <p className="a37-kRb">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-Tau">
                                                <p className="item--bx1">사업자등록번호</p>
                                                <p className="item-415-86-02577-iFw">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-DiV">
                                            <div className="frame-604-kCd">
                                                <p className="item--61b">고객센터 대표번호</p>
                                                <p className="item-1670-2251-C4d">1670-2251</p>
                                            </div>
                                            <div className="frame-608-ujj">
                                                <p className="item--sAm">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-PQ1">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-fcR">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-tvkz-aUV">
                                <div className="frame-616-iKo">사업자정보확인</div>
                                <div className="auto-group-nqko-vgm">
                                    <img
                                        className="logo-Twb"
                                        src={require("../../assets/images/logo-YHb.png")}
                                    />
                                    <div className="sns-amK">
                                        <img
                                            className="group-11-isX"
                                            src={require("../../assets/images/group-11-fTB.png")}
                                        />
                                        <div className="icoi-dzV">
                                            <img
                                                className="mask-group-ZNM"
                                                src={require("../../assets/images/mask-group-nwP.png")}
                                            />
                                            <img
                                                className="mask-group-55o"
                                                src={require("../../assets/images/mask-group-sAV.png")}
                                            />
                                            <img
                                                className="mask-group-PMP"
                                                src={require("../../assets/images/mask-group-4DT.png")}
                                            />
                                            <img
                                                className="mask-group-uKj"
                                                src={require("../../assets/images/mask-group-WKF.png")}
                                            />
                                            <img
                                                className="mask-group-R3B"
                                                src={require("../../assets/images/mask-group-jLR.png")}
                                            />
                                            <img
                                                className="mask-group-wGR"
                                                src={require("../../assets/images/mask-group-SWy.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-4M3"
                                            src={require("../../assets/images/icof-Mm7.png")}
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
export default Service
