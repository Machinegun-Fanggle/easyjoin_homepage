// 리액트 메인 컴포넌트
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import axios from "axios"

interface IRegisterInfo {
    phone: string
    email: string
    company: string
    companyAddress: string
    department: string
    position: string
    startDate: string
    groupName: string
    groupLeader: string
    siteName: string
    employeeCount: number
    householdCount: number
    detailInfo: string
    attachedFile: string
}

// 메인 컴포넌트 함수
const Register = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const [registerInfo, setRegisterInfo] = useState<IRegisterInfo>({
        phone: "",
        email: "",
        company: "",
        companyAddress: "",
        department: "",
        position: "",
        startDate: "",
        groupName: "",
        groupLeader: "",
        siteName: "",
        employeeCount: 0,
        householdCount: 0,
        detailInfo: "",
        attachedFile: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterInfo({
            ...registerInfo,
        })
    }

    // post 요청
    const postRegisterInfo = async (registerInfo: IRegisterInfo) => {
        const response = await axios.post("http://localhost:8000/register", registerInfo)
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
        postRegisterInfo(registerInfo)
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

        if (ref1.current) observer.observe(ref1.current)
        if (ref2.current) observer.observe(ref2.current)
        if (ref3.current) observer.observe(ref3.current)

        return () => {
            if (ref1.current) observer.unobserve(ref1.current)
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
                        서비스 신청
                    </SMainText>
                    <SSubText>상담 문의를 남겨주시면 확인후 빠르게 연락드리겠습니다.</SSubText>
                </div>
            </SPage1>

            <div style={{ width: "1200px", borderBottom: "1px solid #DDE1E6" }} />

            <SForm onSubmit={handleSubmit}>
                <div style={{ display: "flex", gap: "75px" }}>
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
                            <SInputLabel>휴대폰</SInputLabel>
                            <SInput
                                type="number"
                                value={registerInfo.phone}
                                onChange={handleInputChange}
                                placeholder="'-'빼고 숫자만 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>이메일</SInputLabel>
                            <SInput
                                type="text"
                                value={registerInfo.email}
                                onChange={handleInputChange}
                                placeholder="이메일 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>회사명</SInputLabel>
                            <SInput
                                type="text"
                                value={registerInfo.company}
                                onChange={handleInputChange}
                                placeholder="회사명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>회사주소</SInputLabel>
                            <SInput
                                type="text"
                                value={registerInfo.companyAddress}
                                onChange={handleInputChange}
                                placeholder="회사주소 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>부서명</SInputLabel>
                            <SInput
                                type="text"
                                value={registerInfo.department}
                                onChange={handleInputChange}
                                placeholder="부서명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>직함</SInputLabel>
                            <SInput
                                type="text"
                                onChange={handleInputChange}
                                value={registerInfo.position}
                                placeholder="직함 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>회원(조합원) 모집 개시일</SInputLabel>
                            <SInput
                                type="text"
                                onChange={handleInputChange}
                                value={registerInfo.startDate}
                                placeholder="이름 입력"
                            />
                        </SInputWrapper>
                    </SFormWrapper>

                    <SFormWrapper>
                        <SInputWrapper>
                            <SInputLabel>단체명</SInputLabel>
                            <SInput
                                type="text"
                                onChange={handleInputChange}
                                value={registerInfo.groupName}
                                placeholder="단체명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>단체 대표자명</SInputLabel>
                            <SInput
                                type="text"
                                onChange={handleInputChange}
                                value={registerInfo.groupLeader}
                                placeholder="단체 대표자명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>현장명</SInputLabel>
                            <SInput
                                type="text"
                                onChange={handleInputChange}
                                value={registerInfo.siteName}
                                placeholder="현장명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>직원수</SInputLabel>
                            <SInput
                                type="number"
                                onChange={handleInputChange}
                                value={registerInfo.employeeCount}
                                placeholder="직원수 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>세대수</SInputLabel>
                            <SInput
                                type="number"
                                onChange={handleInputChange}
                                value={registerInfo.householdCount}
                                placeholder="세대수 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>상세정보</SInputLabel>
                            <SInput
                                type="text"
                                onChange={handleInputChange}
                                value={registerInfo.detailInfo}
                                placeholder="500자 이내 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>첨부파일</SInputLabel>
                            <SInput
                                type="text"
                                onChange={handleInputChange}
                                value={registerInfo.attachedFile}
                                placeholder="단체(조합) 직인 첨부"
                            />
                        </SInputWrapper>
                    </SFormWrapper>
                </div>

                <SSubmitBtn type="submit">서비스 신청하기</SSubmitBtn>
            </SForm>
        </SPageWrapper>
    )
}
export default Register

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

    @media (max-width: 700px) {
        animation: none;
    }
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

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 200px 364px 32px 364px;
    justify-content: center;
    align-items: center;
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
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid var(--grbk-100, #dde1e6);
    padding: 21px 0 17px 20px;
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
    width: 1000px;
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
`
