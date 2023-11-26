import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import axios from "axios"

interface IRegisterInfo {
    name: string
    phone: string
    email: string
    company: string
    companyAddress: string
    companyAddress2: string
    department: string
    position: string
    startDate: string
    groupName: string
    groupLeader: string
    Trustee: boolean
    siteName: string
    employeeCount: number | undefined
    householdCount: number | undefined
    detailInfo: string
    attachedFile: string
}

// 서비스 신청
const Register = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [registerInfo, setRegisterInfo] = useState<IRegisterInfo>({
        name: "",
        phone: "",
        email: "",
        company: "",
        companyAddress: "",
        companyAddress2: "",
        department: "",
        position: "",
        startDate: "",
        groupName: "",
        groupLeader: "",
        Trustee: false,
        siteName: "",
        employeeCount: undefined,
        householdCount: undefined,
        detailInfo: "",
        attachedFile: "",
    })

    const [emailLocal, setEmailLocal] = useState("")
    const [emailDomain, setEmailDomain] = useState("")
    const [selectedCheckbox, setSelectedCheckbox] = useState("")

    const handleLocalChange = (e: any) => {
        setEmailLocal(e.target.value)
    }

    const handleDomainChange = (e: any) => {
        setEmailDomain(e.target.value)
    }

    const handleInputChange = (e: any) => {
        const { name, type, checked } = e.target
        if (type === "checkbox") {
            // 체크박스의 경우, checked 속성을 사용
            setRegisterInfo((prevState) => ({
                ...prevState,
                [name]: checked,
            }))
        } else {
            // 다른 입력 필드의 경우, value 속성을 사용
            setRegisterInfo((prevState) => ({
                ...prevState,
                [name]: e.target.value,
            }))
        }
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

    const postAuthPhone = async (phone: string) => {
        const response = await axios.post("http://localhost:8000/auth/phone", phone)
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

    const handleGetAuthNumber = (phone: string) => {
        // postAuthPhone(phone)
    }

    // 체크박스 변경 핸들러
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setRegisterInfo((prevState) => ({
            ...prevState,
            [name]: checked,
        }))
        setSelectedCheckbox(checked ? name : "")
    }

    const Checkbox = ({ className, checked, ...props }: any) => (
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked} />
        </CheckboxContainer>
    )

    // Function to handle file selection
    const handleFileChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            setRegisterInfo((prevState) => ({
                ...prevState,
                attachedFile: file.name, // You can change this to store the file itself or its data URL
            }))
        }
    }

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
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
                                name="name"
                                value={registerInfo.name}
                                onChange={handleInputChange}
                                placeholder="이름 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>휴대폰</SInputLabel>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <SInput
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="phone"
                                    value={registerInfo.phone}
                                    onChange={handleInputChange}
                                    placeholder="'-'빼고 숫자만 입력"
                                />
                                <SButton onClick={() => handleGetAuthNumber(registerInfo.phone)}>
                                    인증번호 받기
                                </SButton>
                            </div>
                            <SInput
                                type="text"
                                name="authNumber"
                                value={registerInfo.groupName}
                                onChange={handleInputChange}
                                placeholder="인증번호 입력"
                                style={{ background: "#FAFAFA" }}
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>이메일</SInputLabel>
                            <SBorder>
                                <input
                                    type="text"
                                    name="email"
                                    value={registerInfo.email}
                                    onChange={handleLocalChange}
                                    placeholder="ID 입력"
                                    style={{
                                        border: 0,
                                        width: "calc(100% - 200px)",
                                        outline: "none",
                                        fontSize: "18px",
                                    }}
                                />
                                <span>@</span>
                                <select
                                    value={emailDomain}
                                    onChange={handleDomainChange}
                                    style={{
                                        border: 0,
                                        width: "160px",
                                        marginLeft: "10px",
                                        outline: "none",
                                        fontSize: "18px",
                                    }}
                                >
                                    <option value="">선택</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value=".com">.com</option>
                                </select>
                            </SBorder>
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>회사명</SInputLabel>
                            <SInput
                                type="text"
                                name="company"
                                value={registerInfo.company}
                                onChange={handleInputChange}
                                placeholder="회사명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>회사주소</SInputLabel>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <SInput
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="companyAddress"
                                    value={registerInfo.companyAddress}
                                    onChange={handleInputChange}
                                    placeholder="회사주소 입력"
                                />
                                <SButton onClick={() => handleGetAuthNumber(registerInfo.phone)}>
                                    주소 선택
                                </SButton>
                            </div>
                            <SInput
                                type="text"
                                name="companyAddress2"
                                onChange={handleInputChange}
                                value={registerInfo.companyAddress2}
                                placeholder="나머지 주소 입력"
                                style={{ background: "#FAFAFA" }}
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>부서명</SInputLabel>
                            <SInput
                                type="text"
                                name="department"
                                value={registerInfo.department}
                                onChange={handleInputChange}
                                placeholder="부서명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>직함</SInputLabel>
                            <SInput
                                type="text"
                                name="position"
                                onChange={handleInputChange}
                                value={registerInfo.position}
                                placeholder="직함 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>사업종류</SInputLabel>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "21px 0 17px 0px",
                                }}
                            >
                                {[
                                    "isRegionalHousingAssociation",
                                    "isPrivateRentalCooperative",
                                    "isOther",
                                ].map((option) => (
                                    <label
                                        key={option}
                                        style={{ display: "flex", alignItems: "center" }}
                                    >
                                        <Checkbox
                                            name={option}
                                            checked={
                                                registerInfo[
                                                    option as keyof IRegisterInfo
                                                ] as boolean
                                            }
                                            onChange={handleCheckboxChange}
                                        />
                                        <span style={{ marginLeft: "10px" }}>
                                            {option === "isRegionalHousingAssociation" &&
                                                "지역주택조합"}
                                            {option === "isPrivateRentalCooperative" &&
                                                "민간임대협동조합"}
                                            {option === "isOther" && "기타"}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>회원(조합원) 모집 개시일</SInputLabel>
                            <SInput
                                type="text"
                                name="startDate"
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
                                name="groupName"
                                onChange={handleInputChange}
                                value={registerInfo.groupName}
                                placeholder="단체명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>단체 대표자명</SInputLabel>
                            <SInput
                                type="text"
                                name="groupLeader"
                                onChange={handleInputChange}
                                value={registerInfo.groupLeader}
                                placeholder="단체 대표자명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>계약(예정) 신탁사</SInputLabel>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "21px 0 17px 0px",
                                }}
                            >
                                {["hasTrustee", "noTrustee"].map((option) => (
                                    <label
                                        key={option}
                                        style={{
                                            display: "flex",
                                            width: "20%",
                                            alignItems: "center",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            name={option}
                                            checked={selectedCheckbox === option}
                                            onChange={handleCheckboxChange}
                                            style={{ marginRight: "10px" }}
                                        />
                                        {option === "hasTrustee" && "있음"}
                                        {option === "noTrustee" && "없음"}
                                    </label>
                                ))}
                            </div>
                            <SInput
                                type="text"
                                name="trustee"
                                onChange={handleInputChange}
                                value={registerInfo.groupLeader}
                                placeholder="신탁사명 입력"
                                style={{ background: "#FAFAFA" }}
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>현장명</SInputLabel>
                            <SInput
                                type="text"
                                name="siteName"
                                onChange={handleInputChange}
                                value={registerInfo.siteName}
                                placeholder="현장명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>직원수</SInputLabel>
                            <SInput
                                type="text"
                                name="employeeCount"
                                onChange={handleInputChange}
                                value={registerInfo.employeeCount}
                                placeholder="직원수 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>세대수</SInputLabel>
                            <SInput
                                type="text"
                                name="householdCount"
                                onChange={handleInputChange}
                                value={registerInfo.householdCount}
                                placeholder="세대수 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>상세정보</SInputLabel>
                            <SInput
                                as="textarea"
                                name="detailInfo"
                                value={registerInfo.detailInfo}
                                onChange={handleInputChange}
                                placeholder="500자 이내 입력"
                                maxLength={500}
                                style={{ height: "250px", resize: "none", overflow: "auto" }}
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>첨부파일</SInputLabel>
                            <div style={{ display: "flex", gap: "12px" }}>
                                {/* 실제 파일을 선택하는 숨겨진 input 요소 */}
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    style={{ display: "none" }} // 숨김 처리
                                />
                                {/* 사용자가 선택한 파일의 이름을 표시하는 input 필드 */}
                                <SInput
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="attachedFile"
                                    value={registerInfo.attachedFile}
                                    placeholder="단체(조합) 직인 첨부"
                                    readOnly
                                />
                                {/* 파일 선택 버튼 */}
                                <SButton onClick={triggerFileInput}>파일선택</SButton>
                            </div>
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

const SButton = styled.button`
    width: 168px;
    margin-top: 8px;
    border-radius: 4px;
    background: #2779f4; /* Default color */
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff; /* Adjust text color as needed */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    text-align: center;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s; /* Smooth transition for color change */

    &:hover {
        background: #4096ee; /* Lighter shade for hover */
    }

    &:active {
        background: var(--grbk-100, #dde1e6); /* Current color on click */
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
    justify-content: space-between;
`
const SBorder = styled.div`
    width: 440px;
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid var(--grbk-100, #dde1e6);
    padding: 21px 0 17px 20px;

    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 18px */
`

// 체크박스 커스텀 스타일
const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${(props) => (props.checked ? "#2779f4" : "white")};
    border-radius: 50%;
    transition: all 150ms;
    border: 1px solid grey;
    position: relative; // 상대적 위치 지정

    // 체크 표시를 위한 ::after 의사 요소
    ::after {
        content: "";
        position: absolute;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        top: 2px;
        left: 4px;
        transform: rotate(45deg); // 회전
        display: ${(props) => (props.checked ? "block" : "none")};
    }

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px pink;
    }

    ${HiddenCheckbox}:checked + & {
        background: #2779f4;
    }
`
