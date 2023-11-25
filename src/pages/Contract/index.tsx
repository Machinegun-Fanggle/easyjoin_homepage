// 리액트 메인 컴포넌트
import React from "react"
import "./contract.css"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: top left; // 축소의 기준점 설정
`

// 메인 컴포넌트 함수
const Contract = () => {
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

            <div className="item-2--S2y">
                <AppContainer windowWidth={window.innerWidth}>
                    <div className="auto-group-czuf-gxu">
                        <div className="gnb-PsK">
                            <img
                                className="logo-HC1"
                                src={require("~/assets/images/logo-S7P.png")}
                            />
                            <div className="frame-1-CZs">
                                <p className="item--9V7">이지조인 서비스</p>
                                <div className="gnb-text-CiH">전자계약</div>
                                <div className="auto-group-xkj5-HDw">
                                    <p className="item--R5F">홈페이지 제작</p>
                                    <p className="item--KgR">부동산 개발 컨설팅</p>
                                    <p className="item--48D">서비스 신청</p>
                                    <p className="item--bP3">고객 지원</p>
                                </div>
                            </div>
                            <div className="frame-2-885">
                                <div className="button-type-1-AqT">로그인</div>
                                <div className="button-type-1-pQD">도입문의</div>
                            </div>
                        </div>
                        <div className="auto-group-abjt-WXw">
                            <div className="auto-group-bket-s7b">
                                <p className="item--zxu">이지조인</p>
                                <p className="item-5--vLm">
                                    5분만에 끝나는
                                    <br />
                                    쉽고 간단한 전자계약
                                </p>
                                <p className="item--agD">
                                    지루하던 계약서 작성이 이지조인으로
                                    <br />
                                    쉽고 간단하게 완료 됩니다.
                                </p>
                            </div>
                            <div className="auto-group-sf87-cso">
                                <div className="image-1-Nc5"></div>
                                <div className="image-2-5WV"></div>
                            </div>
                        </div>
                    </div>
                    <p className="item--wHo">다양한 단체가입 적용 가능</p>
                    <p className="item--dAd">
                        비대면 계약, 대면 계약 방식을 모두 지원하며, 효율적인 계약업무를 진행
                        가능합니다.
                    </p>
                    <div className="auto-group-pxbh-rJH">
                        <div className="auto-group-uv1h-9HP">
                            <div className="auto-group-qsdq-qAD">
                                <p className="item--MuF">
                                    지역주택조합
                                    <br />
                                    조합원 가입
                                </p>
                            </div>
                            <div className="auto-group-9z9z-PL9">
                                <p className="item--82q">
                                    민간임대 협동조합
                                    <br />
                                    조합원 가입
                                </p>
                            </div>
                            <div className="auto-group-qk8j-xXf">
                                <p className="item--gTf">기타 단체 가입</p>
                                <p className="item--xvy">
                                    가로주택,
                                    <br />
                                    소규모 재건축 사업,
                                    <br />
                                    각종동호회
                                </p>
                            </div>
                        </div>
                        <p className="item--bDF">
                            각종조합원가입,단체가입 형태의 계약서와 계약체결에 모두 적용 가능해요!
                            <br />
                            동의서가 필요할 경우 단체의 동의서를 일괄적으로 전송하고 서명을 받을 수
                            있어요!
                            <br />
                            여러 단체에 가입하는 행위가 필요한 모든 형태 총회에서 전자투표로도 진행
                            가능해요!
                        </p>
                        <div className="frame-23-Qpu">
                            <p className="item--9nV">
                                <span className="item--9nV-sub-0">법적효력 및 보안</span>
                                <span className="item--9nV-sub-1">까지 확실한 보장</span>
                            </p>
                            <p className="item--EBf">
                                전자계약은 종이문서와 같은 법적효력을 가집니다
                            </p>
                        </div>
                        <div className="auto-group-vpep-4wP">
                            <div className="auto-group-ybtf-kpD">
                                <div className="frame-17-gxm">
                                    <p className="item-33-1-Sh3">전자서명법 제 33조 1항</p>
                                    <p className="item--A7F">
                                        전자서명은 전자적 형태라는 이유만으로 서명,
                                        <br />
                                        서명날인 또는 기명날인으로서의 효력이 부인되지 아니한다.
                                    </p>
                                </div>
                                <div className="frame-19-9js">
                                    <p className="item-33-2-i2H">전자서명법 제 33조 2항</p>
                                    <p className="item--oZX">
                                        전자서명은 전자적 형태라는 이유만으로 서명, 서명,
                                        <br />
                                        날인 또는 기명날인으로서의 효력이 부인되지 아니한다.
                                    </p>
                                </div>
                                <div className="frame-18-ycR">
                                    <p className="item-44-1-gmj">
                                        전자문서 및 전자거래 기본법 제44조 1항
                                    </p>
                                    <p className="item--BiV">
                                        법령의규정또는당사자간의약정에따라서명,
                                        <br />
                                        서명날인 또는 기명날인의 방식으로 전자서명을 선택한 경우
                                        <br />그 전자서명은 서명, 서명날인 또는 기명날인으로서의
                                        효력을 가진다.
                                    </p>
                                </div>
                            </div>
                            <div className="frame-21-W8V">
                                <div className="frame-20-EaH">
                                    <p className="item-44-2-ynm">
                                        전자문서 및 전자거래 기본법 제44조 2항
                                    </p>
                                    <p className="item--p2h">
                                        전자문서가다음각호의요건을모두갖춘경우에는
                                        <br />그 전자문서를 서면으로 본다.
                                    </p>
                                </div>
                                <p className="item--rk5">
                                    다만, 다른 법령에 특별한 규정이 있거나 성질상 전자적 형태가
                                    <br />
                                    허용되지 아니하는 경우에는 서면으로 보지 아니한다.
                                </p>
                                <p className="item--qM7">
                                    전자문서의내용을열람할수있을것
                                    <br />
                                    전자문서가 작성ᆞ변환되거나 송신ᆞ수신 또는
                                    <br />
                                    저장된 때의 형태 또는그와같이재현될수있는형태로보존되어 있을것
                                </p>
                                <img
                                    className="privacy-law-2-yLq"
                                    src={require("~/assets/images/privacy-law-2-tJH.png")}
                                />
                            </div>
                        </div>
                        <div className="frame-22-gFF">
                            <p className="item--1oK">
                                신탁사와 업무협약을 체결하여 전자계약 문서로 신탁업무가 가능합니다
                                <br />
                                신탁사 계정 배정을 통해 계약서 열람 기능을 제공하여 계약서 원본 또는
                                스캔자료를 송부하는 번거로움을 줄여 효율성을 높여드립니다.
                            </p>
                        </div>
                        <p className="item--p8V">신탁사 업무 연계</p>
                    </div>
                    <div className="auto-group-t2xv-rqs">
                        <p className="item--zBP">계약과정</p>
                        <div className="auto-group-t58p-hbb">
                            <div className="auto-group-xih9-EbX">
                                <img
                                    className="contract-type-1-m5f"
                                    src={require("~/assets/images/contract-type-1-rbo.png")}
                                />
                                <p className="item--HZo">계약서 작성</p>
                            </div>
                            <div className="auto-group-zsd9-PMw">
                                <img
                                    className="contract-type-1-WhT"
                                    src={require("~/assets/images/contract-type-1-1yo.png")}
                                />
                                <p className="item--SLD">서명요청</p>
                            </div>
                            <div className="auto-group-ykdq-8Tw">
                                <img
                                    className="contract-type-1-4Mb"
                                    src={require("~/assets/images/contract-type-1-ugZ.png")}
                                />
                                <p className="item--YGm">서명입력</p>
                            </div>
                            <div className="auto-group-q4ex-1RF">
                                <img
                                    className="contract-type-1-7DP"
                                    src={require("~/assets/images/contract-type-1-SC5.png")}
                                />
                                <p className="item--dxR">계약완료</p>
                            </div>
                        </div>
                        <div className="auto-group-vczz-M7j">
                            <p className="item--Ui9">이지조인 템플릿 사용</p>
                            <p className="item--Aqs">휴대폰으로 서명요청 전송</p>
                            <p className="item--Ubf">휴대폰인증 후 전자서명</p>
                        </div>
                    </div>
                    <div className="auto-group-6mi3-vCm">
                        <div className="frame-24-1zu">
                            <p className="item--Yzq">도입효과</p>
                            <p className="item--cjo">
                                전자계약은 종이문서와 같은 법적효력을 가집니다
                            </p>
                        </div>
                        <div className="frame-25-EFP">
                            <p className="item--Y1B">기능안내</p>
                            <p className="item--ztm">이지조인은 다양한 기능을 제공합니다.</p>
                        </div>
                        <div className="item--eiR">
                            <div className="auto-group-uzpd-K3s">
                                <img
                                    className="icon-function-cYm"
                                    src={require("~/assets/images/icon-function-qc9.png")}
                                />
                            </div>
                            <p className="item--WPF">팀 관리</p>
                        </div>
                        <div className="item--RFK">
                            <img
                                className="auto-group-yjfd-JK7"
                                src={require("~/assets/images/auto-group-yjfd.png")}
                            />
                            <div className="frame-26-SRK">
                                <p className="item--zhj">간편한 인증</p>
                                <p className="item--5jB">
                                    휴대폰 본인인증만으로
                                    <br />
                                    간편하게 본인 확인
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-rk3v-j33">
                            <div className="item--SCM">
                                <img
                                    className="auto-group-dkvu-xwP"
                                    src={require("~/assets/images/auto-group-dkvu.png")}
                                />
                                <div className="frame-26-6Xo">
                                    <p className="item--3T3">업무력 향상</p>
                                    <p className="item--ZgH">
                                        디지털화로 인하여
                                        <br />
                                        업무의 생산성과 효율성 증대
                                    </p>
                                </div>
                            </div>
                            <div className="item--DF3">
                                <img
                                    className="auto-group-dc3u-HVo"
                                    src={require("~/assets/images/auto-group-dc3u.png")}
                                />
                                <div className="frame-26-DeM">
                                    <p className="item--B5P">보안 용이</p>
                                    <p className="item--eDs">
                                        데이터 암호화를 제공하여 전송 중
                                        <br />
                                        데이터를 안전하게 보호
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="auto-group-budd-uvV">
                            <div className="item--bYR">
                                <img
                                    className="auto-group-wjm9-7mf"
                                    src={require("~/assets/images/auto-group-wjm9.png")}
                                />
                                <div className="frame-26-yYy">
                                    <p className="item--WYu">폴더관리</p>
                                    <p className="item--onu">
                                        폴더별로 정리가 가능하여
                                        <br />
                                        문서정리와 보관의 편의성 제공
                                    </p>
                                </div>
                            </div>
                            <div className="item--gLu">
                                <img
                                    className="auto-group-zc5q-z6h"
                                    src={require("~/assets/images/auto-group-zc5q.png")}
                                />
                                <div className="frame-26-Kuf">
                                    <p className="item--HLh">비용절감</p>
                                    <p className="item--1Gh">
                                        전자 계약을 통해
                                        <br />
                                        종이 서류시 계약에 드는 비용 절감
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="auto-group-16s7-f6M">
                            <div className="item--zeR">
                                <img
                                    className="auto-group-8vj9-hYq"
                                    src={require("~/assets/images/auto-group-8vj9.png")}
                                />
                                <div className="frame-26-q9F">
                                    <p className="item--naH">환경보호</p>
                                    <p className="item--WmB">
                                        종이 낭비가 없는 친환경적인
                                        <br />
                                        페이퍼리스 계약으로 환경보호 기여
                                    </p>
                                </div>
                            </div>
                            <div className="item--nTo">
                                <img
                                    className="auto-group-zy8x-Gtm"
                                    src={require("~/assets/images/auto-group-zy8x.png")}
                                />
                                <div className="frame-26-bw3">
                                    <p className="item--ADT">888888</p>
                                    <p className="item--VFj">
                                        휴대폰 본인인증만으로
                                        <br />
                                        간편하게 본인 확인
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item--KVf">
                            <img
                                className="auto-group-cznb-29B"
                                src={require("~/assets/images/auto-group-cznb.png")}
                            />
                            <div className="frame-26-VYZ">
                                <p className="item--FGq">시간절약</p>
                                <p className="item--BAV">
                                    계약서 작성 시간 단 5분!
                                    <br />
                                    계약서 검토 과정 최소화
                                </p>
                            </div>
                        </div>
                        <div className="auto-group-buzu-rXX">
                            <div className="item--nRB">
                                <div className="auto-group-oxuo-7CZ">
                                    <img
                                        className="icon-function-quF"
                                        src={require("~/assets/images/icon-function-7L9.png")}
                                    />
                                </div>
                                <p className="item--AwX">사인.도장 관리</p>
                            </div>
                            <div className="item--f7b">
                                <div className="auto-group-xjc3-yty">
                                    <img
                                        className="icon-function-iLm"
                                        src={require("~/assets/images/icon-function-mVP.png")}
                                    />
                                </div>
                                <p className="item--Tp9">템플릿 관리</p>
                            </div>
                            <div className="item--gwo">
                                <div className="auto-group-i22f-1jB">
                                    <img
                                        className="icon-function-xPX"
                                        src={require("~/assets/images/icon-function-rFo.png")}
                                    />
                                </div>
                                <p className="item--i7o">휴지통</p>
                            </div>
                        </div>
                        <div className="auto-group-m4jd-ciy">
                            <div className="item--8BX">
                                <div className="auto-group-jnz9-FX3">
                                    <img
                                        className="icon-function-o2m"
                                        src={require("~/assets/images/icon-function-BVf.png")}
                                    />
                                </div>
                                <p className="item--Ym3">대량 전송</p>
                            </div>
                            <div className="item--4Db">
                                <div className="auto-group-3u7y-BJD">
                                    <img
                                        className="icon-function-h1f"
                                        src={require("~/assets/images/icon-function-YpD.png")}
                                    />
                                </div>
                                <p className="item--cuK">잠금 설정</p>
                            </div>
                            <div className="item--6Zb">
                                <div className="auto-group-v4t3-dJd">
                                    <img
                                        className="icon-function-YAh"
                                        src={require("~/assets/images/icon-function-HsT.png")}
                                    />
                                </div>
                                <p className="item--6CD">맞춤 브랜딩</p>
                            </div>
                        </div>
                        <div className="auto-group-6dum-n53">
                            <div className="item--hxh">
                                <div className="auto-group-nkh1-2k5">
                                    <img
                                        className="icon-function-NJ9"
                                        src={require("~/assets/images/icon-function-4Rs.png")}
                                    />
                                </div>
                                <p className="item--7Wd">서면 결의</p>
                            </div>
                            <div className="item--zqK">
                                <div className="auto-group-mtx7-vDB">
                                    <img
                                        className="icon-function-fRf"
                                        src={require("~/assets/images/icon-function-UJR.png")}
                                    />
                                </div>
                                <p className="item--nmB">실시간 알림</p>
                            </div>
                            <div className="item--VvV">
                                <div className="auto-group-jqa3-E7P">
                                    <img
                                        className="icon-function-Mxh"
                                        src={require("~/assets/images/icon-function-ow3.png")}
                                    />
                                </div>
                                <p className="item--Wah">감사 추적 인증서</p>
                            </div>
                        </div>
                        <div className="auto-group-v4fm-RSm">
                            <div className="item--xSh">
                                <div className="auto-group-gnzy-Ufw">
                                    <img
                                        className="icon-function-2SZ"
                                        src={require("~/assets/images/icon-function-bd7.png")}
                                    />
                                </div>
                                <p className="item--yMo">PDF 저장</p>
                            </div>
                            <div className="item--SWH">
                                <div className="auto-group-ctxo-mYZ">
                                    <img
                                        className="icon-function-hx1"
                                        src={require("~/assets/images/icon-function-qrd.png")}
                                    />
                                </div>
                                <p className="item--TRP">문서함 관리</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-Lk5">
                        <div className="top-line-tWh"></div>
                        <div className="footer-container-SHK">
                            <div className="footer-contents-9hX">
                                <div className="foot-nav-WHB">
                                    <p className="item--EDB">회사소개</p>
                                    <div className="auto-group-v1c7-wdP">
                                        <div className="bar-5Do"></div>
                                        <p className="item--Zem">서비스 소개</p>
                                        <div className="bar-H4y"></div>
                                        <p className="item--p4u">고객센터</p>
                                        <div className="bar-Ymb"></div>
                                        <p className="item--VRw">이용약관</p>
                                        <div className="bar-RaV"></div>
                                        <p className="item--NEq">개인정보처리방침</p>
                                    </div>
                                </div>
                                <div className="bottom-F3j">
                                    <div className="company-info-1Ho">
                                        <div className="frame-606-xTw">
                                            <div className="frame-602-6q3">
                                                <p className="item--f7T">대표</p>
                                                <p className="item--C7P">이병훈</p>
                                            </div>
                                            <div className="frame-607-Kxh">
                                                <p className="item--Uqb">주소</p>
                                                <p className="a37-26R">
                                                    울산광역시 북구 매곡 1로 15-1, 413호 A37
                                                </p>
                                            </div>
                                            <div className="frame-605-9Rw">
                                                <p className="item--6MB">사업자등록번호</p>
                                                <p className="item-415-86-02577-yfs">
                                                    415-86-02577
                                                </p>
                                            </div>
                                        </div>
                                        <div className="frame-608-Gey">
                                            <div className="frame-604-6e1">
                                                <p className="item--r7P">고객센터 대표번호</p>
                                                <p className="item-1670-2251-xgD">1670-2251</p>
                                            </div>
                                            <div className="frame-608-6XX">
                                                <p className="item--eow">상담시간</p>
                                                <p className="item-10-17-11-30-12-30-n9T">
                                                    평일 10 ~ 17시 (점심시간 11:30 ~ 12:30)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="easyjoin-inc-all-rights-reserved-U2H">
                                        © 2023 EasyJoin INC. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="auto-group-zk55-ar1">
                                <div className="frame-616-8Mj">사업자정보확인</div>
                                <div className="auto-group-s5gx-8m3">
                                    <img
                                        className="logo-5RP"
                                        src={require("~/assets/images/logo-vgu.png")}
                                    />
                                    <div className="sns-Dvu">
                                        <img
                                            className="group-11-Zjs"
                                            src={require("~/assets/images/group-11-oNu.png")}
                                        />
                                        <div className="icoi-t1T">
                                            <img
                                                className="mask-group-nMj"
                                                src={require("~/assets/images/mask-group-o4Z.png")}
                                            />
                                            <img
                                                className="mask-group-Jqs"
                                                src={require("~/assets/images/mask-group-2Hs.png")}
                                            />
                                            <img
                                                className="mask-group-qqo"
                                                src={require("~/assets/images/mask-group-qcq.png")}
                                            />
                                            <img
                                                className="mask-group-yBK"
                                                src={require("~/assets/images/mask-group-rHj.png")}
                                            />
                                            <img
                                                className="mask-group-u4y"
                                                src={require("~/assets/images/mask-group-v9s.png")}
                                            />
                                            <img
                                                className="mask-group-qjK"
                                                src={require("~/assets/images/mask-group-E2R.png")}
                                            />
                                        </div>
                                        <img
                                            className="icof-Mhf"
                                            src={require("~/assets/images/icof-6nR.png")}
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
export default Contract
