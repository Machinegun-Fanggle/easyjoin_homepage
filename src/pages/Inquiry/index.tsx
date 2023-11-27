import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { TextareaHTMLAttributes } from "react" // TextareaHTMLAttributes를 import

interface IInquiryInfo {
    name: string
    phone: string
    email: string
    detailInfo: string
}

//도입문의
const Inquiry = () => {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤 효과
        })
    }

    const [inquiryInfo, setInquiryInfo] = useState<IInquiryInfo>({
        name: "",
        phone: "",
        email: "",
        detailInfo: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInquiryInfo({
            ...inquiryInfo,
            [e.target.name]: e.target.value,
        })
    }

    // post 요청
    const postinquiryInfo = async (inquiryInfo: IInquiryInfo) => {
        const response = await axios.post("http://localhost:8000/register", inquiryInfo)
        console.log(response)
        if (response.status === 200) {
            console.log("성공")
        } else {
            console.log("실패")
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() // 폼 제출 시 페이지 새로고침 방지

        // 데이터를 이메일로 받을건지, 백오피스를 만들어야하는지??
        // postinquiryInfo(inquiryInfo)
        // 추가 로직...
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate")
                }
            },
            {
                threshold: 0.3,
            },
        )

        if (ref.current) observer.observe(ref.current)
        if (ref2.current) observer.observe(ref2.current)
        if (ref3.current) observer.observe(ref3.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
            if (ref2.current) observer.unobserve(ref2.current)
            if (ref3.current) observer.unobserve(ref3.current)
        }
    }, [])

    return (
        <SPageWrapper>
            <SPage1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "1200px",
                    }}
                >
                    <SMainText style={{ color: "#000", fontSize: "42px", textAlign: "center" }}>
                        도입문의
                    </SMainText>
                    <SSubText>상담 문의를 남겨주시면 확인후 빠르게 연락드리겠습니다.</SSubText>
                </div>

                <SPage1Border>
                    <SBorderLeft>
                        <SBorderImg src={require("../../assets/images/contract-3-1-wPB.png")} />
                        <STextWarpper>
                            <SBorderMainText>
                                부동산 개발 컨설팅 어렵게 느껴지시나요?
                            </SBorderMainText>
                            <SBorderSubText>이지조인에서 쉽게 진행하세요!</SBorderSubText>
                        </STextWarpper>
                    </SBorderLeft>

                    <SBorderBtn to="/register">
                        이지조인 서비스 신청하기
                        <SArrowRight src={require("~/assets/images/arrow-right-cwP.png")} />
                    </SBorderBtn>
                </SPage1Border>
            </SPage1>

            <SPage2>
                <SPage2Text>서비스 도입 문의</SPage2Text>
                <div
                    style={{
                        width: "1200px",
                        borderBottom: "1px solid #DDE1E6",
                        margin: "48px 0 44px 0",
                    }}
                />

                <SForm onSubmit={handleSubmit}>
                    <div style={{ display: "flex", gap: "75px" }}>
                        <SImg src={require("~/assets/Rectangle 2339.svg").default} />

                        <SFormWrapper>
                            <SInputWrapper>
                                <SInputLabel>이름</SInputLabel>
                                <SInput
                                    type="text"
                                    onChange={handleInputChange}
                                    placeholder="이름 입력"
                                />
                            </SInputWrapper>

                            <SInputWrapper>
                                <SInputLabel>연락처</SInputLabel>
                                <SInput
                                    type="text"
                                    value={inquiryInfo.phone}
                                    onChange={handleInputChange}
                                    placeholder="'-'빼고 숫자만 입력"
                                />
                            </SInputWrapper>

                            <SInputWrapper>
                                <SInputLabel>이메일</SInputLabel>
                                <SInput
                                    type="text"
                                    value={inquiryInfo.email}
                                    onChange={handleInputChange}
                                    placeholder="이메일 입력"
                                />
                            </SInputWrapper>

                            <SInputWrapper>
                                <SInputLabel>상세정보</SInputLabel>
                                <SInput
                                    as="textarea"
                                    name="detailInfo"
                                    onChange={handleInputChange}
                                    value={inquiryInfo.detailInfo}
                                    placeholder="500자 이내 입력"
                                    maxLength={500}
                                    // className="as-textarea" // 추가된 클래스명
                                    style={{ height: "150px", resize: "none", overflow: "auto" }}
                                />
                            </SInputWrapper>

                            <SSubmitBtn type="submit">서비스 신청하기</SSubmitBtn>
                        </SFormWrapper>
                    </div>
                </SForm>
            </SPage2>
        </SPageWrapper>
    )
}
export default Inquiry

const SPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // background: blue;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: fadeIn 1s ease-in-out;
`

const SMainText = styled.div`
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
`

const SSubText = styled.div`
    margin: 23px 0 0 0;
    color: var(--whbk-999-sub-txt-01, #999);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 17px */
`

const SButton = styled.div`
    position: absolute;
    top: 550px;
    left: 360px;
    color: var(--whfff, #fff);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 38.4px */
    margin: 52px 0 0 0;
    display: flex;
    width: 280px;
    height: 60px;
    padding: 0px 4px 4px 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--mGR-01, linear-gradient(90deg, #2779f4 0%, #4448d4 100%));
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 3;
`

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 200px 364px;
    justify-content: center;
    align-items: center;
`

const SImg = styled.img`
    display: flex;
    margin: 63px 0 0 0;
    width: 660px;
    height: 720px;
    border-radius: 20px;
`

const SPage1Border = styled.div`
    display: flex;
    margin: 48px 0 0 0;
    width: 100%;
    height: 160px;
    border-radius: 12px;
    background: var(--grbk-50, #f2f4f8);
    justify-content: space-between;
    align-items: center;
    color: var(--FFFFFF, #fff);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const SBorderLeft = styled.div`
    display: flex;
    width: 100%;
    padding: 44px 96px 44px 62px;
    justify-content: left;
    align-items: center;
`

const SBorderImg = styled.img`
    display: flex;
    width: 63px;
    height: 72px;
`

const STextWarpper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 12px;
`

const SBorderMainText = styled.div`
    color: var(--0858F7, #0858f7);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
`

const SBorderSubText = styled.div`
    color: var(--0858F7, #0858f7);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 8px 0 0 0;
`

const SBorderBtn = styled(Link)`
    display: inline-flex;
    width: 500px;
    padding: 20px 42px;
    margin: 0 80px 0 0;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background: var(--mGR-01, linear-gradient(90deg, #2779f4 0%, #4448d4 100%));
    cursor: pointer;

    text-decoration: none; /* 밑줄 제거 */
    color: inherit; /* 기본 글자색 상속 */
`

const SArrowRight = styled.img`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-left: 8px solid #fff;
`

const SPage2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    justify-content: center;
    align-items: flex-start;
    margin: 0px 0 0 0;
`

const SPage2Text = styled.div`
    color: #000;

    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 32px */
    width: 1200px;
    text-align: left;
`

const SInputLabel = styled.label`
    color: var(--grbk-700, #373b3e);
    /* Pretendard/M/15 */
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 15px */
`

const SInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

const SInput = styled.input`
    width: 440px;
    max-width: 440px;
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid var(--grbk-100, #dde1e6);
    padding: 21px 0 17px 20px;

    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 18px */

    &:focus {
        border-color: #2779f4;
        outline: none;
    }
`

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 186px 0;
`

const SSubmitBtn = styled.button`
    display: flex;
    width: 100%;
    padding: 16px 94px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: var(--2779F4, #2779f4);
    color: var(--whfff, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 18px */
    border: none;
    cursor: pointer;
    margin-top: 80px;
`

const SFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`
