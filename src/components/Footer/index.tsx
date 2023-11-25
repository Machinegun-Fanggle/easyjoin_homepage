import React from "react"
import styled from "styled-components"
import "./footer.css"

const Footer = () => {
    return (
        <AppContainer windowWidth={window.innerWidth}>
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
                                        <p className="item-415-86-02577-hV7">415-86-02577</p>
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
        </AppContainer>
    )
}

export default Footer

const AppContainer = styled.div<{ windowWidth: number }>`
    transform: scale(${(props) => props.windowWidth / 3047.62});
    transform-origin: center center; // 축소의 기준점 설정
    height: 3.6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
    // background: red;
`
