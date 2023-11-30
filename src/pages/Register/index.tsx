import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import DaumPostcode from "react-daum-postcode"
import { Dialog } from "@mui/material"
import axios from "axios"
import { useLocation } from "react-router-dom"
import qs from "qs"

interface IRegisterInfo {
    // 사업자 정보
    company: string
    groupLeader: string // 대표자명
    email: string // 이메일
    businessRegNumber: string // 사업자등록번호
    representativePhone: string // 대표번호
    businessAddress: string // 사업장 주소
    businessAddress2: string // 나머지 주소

    // 단체(조합) 정보
    groupName: string // 단체명
    groupRepName: string // 대표자명
    groupPhone: string // 대표번호
    attachedFile: string // 첨부파일
    uniqueNumber: string // 고유번호
    groupEmail: string // 이메일
    groupAddress: string // 주소
    groupAddress2: string // 나머지 주소

    // 담당자 정보
    contactName: string // 성명
    contactPhone: string // 연락처
    contactEmail: string // 이메일
    affiliation: string // 소속
    department: string // 부서
    position: string // 직급

    // 그 외 정보
    businessType: string // 사업종류
    siteName: string // 현장명
    plannedOpeningDate: string // 오픈 예정일
    plannedContractTrustee: boolean // 계약(예정) 신탁사
    detailedInfo: string // 상세정보

    // 체크박스 관련 상태들
    isSmartContractSolution: boolean
    isRealEstateDevConsulting: boolean
    isWebsiteCreation: boolean
}

// 서비스 신청
const Register = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const dateInputRef = useRef<HTMLInputElement>(null)
    const location = useLocation() // 현재 URL 정보 가져오기

    const [emailLocal, setEmailLocal] = useState("")
    const [emailDomain, setEmailDomain] = useState("")
    const [selectedCheckbox, setSelectedCheckbox] = useState("")
    const [plannedOpeningDate, setPlannedOpeningDate] = useState(new Date())

    const [registerInfo, setRegisterInfo] = useState<IRegisterInfo>({
        // 사업자 정보
        company: "",
        groupLeader: "", // 대표자명
        email: "", // 이메일
        businessRegNumber: "", // 사업자등록번호
        representativePhone: "", // 대표번호
        businessAddress: "", // 사업장 주소
        businessAddress2: "", // 나머지 주소

        // 단체(조합) 정보
        groupName: "", // 단체명
        groupRepName: "", // 대표자명
        groupPhone: "", // 대표번호
        attachedFile: "", // 첨부파일
        uniqueNumber: "", // 고유번호
        groupEmail: "", // 이메일
        groupAddress: "", // 주소
        groupAddress2: "", // 나머지 주소

        // 담당자 정보
        contactName: "", // 성명
        contactPhone: "", // 연락처
        contactEmail: "", // 이메일
        affiliation: "", // 소속
        department: "", // 부서
        position: "", // 직급

        // 그 외 정보
        businessType: "", // 사업종류
        siteName: "", // 현장명
        plannedOpeningDate: "", // 오픈 예정일
        plannedContractTrustee: false, // 계약(예정) 신탁사
        detailedInfo: "", // 상세정보

        // 체크박스 관련 상태들
        isSmartContractSolution: false,
        isRealEstateDevConsulting: false,
        isWebsiteCreation: false,
    })

    const handleLocalChange = (e: any) => {
        setEmailLocal(e.target.value)
    }

    const handleDomainChange = (e: any) => {
        setEmailDomain(e.target.value)
    }

    const handleInputChange = (e: any) => {
        const { name, type, checked, value } = e.target

        if (type === "checkbox") {
            // 체크박스의 경우, checked 속성을 사용
            setRegisterInfo((prevState) => ({
                ...prevState,
                [name]: checked,
            }))
        } else if (type === "date") {
            // 날짜 필드의 경우, value 속성을 사용
            setRegisterInfo((prevState) => ({
                ...prevState,
                [name]: value,
                plannedOpeningDateDisplay: value, // 날짜를 표시하기 위한 별도의 필드
            }))
        } else {
            // 다른 입력 필드의 경우, value 속성을 사용
            setRegisterInfo((prevState) => ({
                ...prevState,
                [name]: value,
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

    // 날짜 변경 핸들러 추가
    const handleDateChange = (date: any) => {
        setPlannedOpeningDate(date)
        // 날짜 state를 IRegisterInfo 형식에 맞추어 업데이트
        setRegisterInfo((prevState) => ({
            ...prevState,
            plannedOpeningDate: date.toISOString().split("T")[0], // YYYY-MM-DD 형식
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() // 폼 제출 시 페이지 새로고침 방지

        // 데이터를 이메일로 받을건지, 백오피스를 만들어야하는지??
        // postRegisterInfo(registerInfo)
        // 추가 로직...
    }

    const handleCheckboxChange = (e: any) => {
        const { name } = e.target
        const isCurrentlyChecked = selectedCheckbox === name
        setSelectedCheckbox(isCurrentlyChecked ? "" : name)
        setRegisterInfo((prevState) => ({
            ...prevState,
            plannedContractTrustee: !isCurrentlyChecked,
        }))
    }

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

    const triggerFileInput = (e: any) => {
        e.preventDefault()
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    useEffect(() => {
        const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true }) // URL에서 쿼리 파라미터 추출
        const serviceType = queryParams.service // 'service' 쿼리 파라미터 값 가져오기

        // 쿼리 파라미터에 따라 체크박스 상태 설정
        if (serviceType === "전자계약 솔루션") {
            setSelectedCheckbox("isSmartContractSolution")
        } else if (serviceType === "부동산 개발 컨설팅") {
            setSelectedCheckbox("isRealEstateDevConsulting")
        } else if (serviceType === "홈페이지 제작") {
            setSelectedCheckbox("isWebsiteCreation")
        }
    }, [location])

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

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAddress = (data: any) => {
        console.log(data)
        setRegisterInfo((prevState) => ({
            ...prevState,
            companyAddress: data.address,
        }))
        handleClose()
    }

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
                    <SPage2Text>이지조인 신청서 작성</SPage2Text>
                    <SGrayBorder>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "21px 0 17px 0px",
                            }}
                        >
                            {[
                                "isSmartContractSolution",
                                "isRealEstateDevConsulting",
                                "isWebsiteCreation",
                            ].map((option) => (
                                <label
                                    key={option}
                                    style={{
                                        display: "flex",
                                        width: "200px",
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
                                    {option === "isSmartContractSolution" && "전자계약 솔루션"}
                                    {option === "isRealEstateDevConsulting" && "부동산 개발 컨설팅"}
                                    {option === "isWebsiteCreation" && "홈페이지 제작"}
                                </label>
                            ))}
                        </div>
                    </SGrayBorder>
                </div>
            </SPage1>

            <SForm onSubmit={handleSubmit}>
                <div style={{ width: "1200px", borderBottom: "1px solid #DDE1E6" }} />
                <SFormTitle>사업자 정보</SFormTitle>
                <div style={{ display: "flex", gap: "75px" }}>
                    <SFormWrapper>
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
                            <SInputLabel>대표자명</SInputLabel>
                            <SInput
                                type="text"
                                name="groupLeader"
                                onChange={handleInputChange}
                                value={registerInfo.groupLeader}
                                placeholder="단체 대표자명 입력"
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
                    </SFormWrapper>

                    <SFormWrapper>
                        <SInputWrapper>
                            <SInputLabel>사업자등록번호</SInputLabel>
                            <SInput
                                type="text"
                                name="businessRegNumber"
                                onChange={handleInputChange}
                                value={registerInfo.businessRegNumber}
                                placeholder="사업자등록번호(-없이 입력)"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>대표번호</SInputLabel>
                            <SInput
                                type="text"
                                name="representativePhone"
                                onChange={handleInputChange}
                                value={registerInfo.representativePhone}
                                placeholder="대표번호 입력(숫자만 입력)"
                            />
                        </SInputWrapper>
                        <SInputWrapper>
                            <SInputLabel>사업장 주소</SInputLabel>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <SInput
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="businessAddress"
                                    value={registerInfo.businessAddress}
                                    onChange={handleInputChange}
                                    placeholder="회사주소 입력"
                                />
                                {/* <SButton onClick={() => handleGetAuthNumber(registerInfo.phone)}> */}
                                <SButton onClick={handleOpen}>주소 선택</SButton>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            width: "70%", // 너비 설정
                                            height: "50%", // 높이 설정
                                        },
                                    }}
                                >
                                    <DaumPostcode onComplete={handleAddress} />
                                </Dialog>
                            </div>
                            <SInput
                                type="text"
                                name="businessAddress2"
                                onChange={handleInputChange}
                                value={registerInfo.businessAddress2}
                                placeholder="나머지 주소 입력"
                                style={{ background: "#FAFAFA" }}
                            />
                        </SInputWrapper>
                    </SFormWrapper>
                </div>

                <div
                    style={{
                        width: "1200px",
                        borderBottom: "1px solid #DDE1E6",
                        margin: "52px 0 0 0",
                    }}
                />
                <SFormTitle>단체(조합) 정보</SFormTitle>

                <div style={{ display: "flex", gap: "75px" }}>
                    <SFormWrapper>
                        <SInputWrapper>
                            <SInputLabel>단체명</SInputLabel>
                            <SInput
                                type="text"
                                name="groupName"
                                value={registerInfo.groupName}
                                onChange={handleInputChange}
                                placeholder="단체명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>대표자명</SInputLabel>
                            <SInput
                                type="text"
                                name="groupRepName"
                                value={registerInfo.groupRepName}
                                onChange={handleInputChange}
                                placeholder="단체 대표자명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>대표번호</SInputLabel>
                            <SInput
                                type="text"
                                name="groupPhone"
                                value={registerInfo.groupPhone}
                                onChange={handleInputChange}
                                placeholder="대표번호 입력(숫자만 입력)"
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
                                <SButton onClick={(e) => triggerFileInput(e)}>파일선택</SButton>
                            </div>
                        </SInputWrapper>
                    </SFormWrapper>

                    <SFormWrapper>
                        <SInputWrapper>
                            <SInputLabel>고유번호</SInputLabel>
                            <SInput
                                type="text"
                                name="uniqueNumber"
                                onChange={handleInputChange}
                                value={registerInfo.uniqueNumber}
                                placeholder="고유번호 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>이메일</SInputLabel>
                            <SBorder>
                                <input
                                    type="text"
                                    name="groupEmail"
                                    value={registerInfo.groupEmail}
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
                            <SInputLabel>주소</SInputLabel>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <SInput
                                    style={{ width: "100%" }}
                                    type="text"
                                    name="groupAddress"
                                    value={registerInfo.groupAddress}
                                    onChange={handleInputChange}
                                    placeholder="주소 입력"
                                />
                                {/* <SButton onClick={() => handleGetAuthNumber(registerInfo.phone)}> */}
                                <SButton onClick={handleOpen}>주소 선택</SButton>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            width: "70%", // 너비 설정
                                            height: "50%", // 높이 설정
                                        },
                                    }}
                                >
                                    <DaumPostcode onComplete={handleAddress} />
                                </Dialog>
                            </div>
                            <SInput
                                type="text"
                                name="groupAddress2"
                                onChange={handleInputChange}
                                value={registerInfo.groupAddress2}
                                placeholder="나머지 주소 입력"
                                style={{ background: "#FAFAFA" }}
                            />
                        </SInputWrapper>
                    </SFormWrapper>
                </div>

                <div
                    style={{
                        width: "1200px",
                        borderBottom: "1px solid #DDE1E6",
                        margin: "52px 0 0 0",
                    }}
                />
                <SFormTitle>담당자 정보</SFormTitle>
                <div style={{ display: "flex", gap: "75px" }}>
                    <SFormWrapper>
                        <SInputWrapper>
                            <SInputLabel>성명</SInputLabel>
                            <SInput
                                type="text"
                                name="contactName"
                                value={registerInfo.contactName}
                                onChange={handleInputChange}
                                placeholder="성명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>연락처</SInputLabel>
                            <SInput
                                type="text"
                                name="contactPhone"
                                value={registerInfo.contactPhone}
                                onChange={handleInputChange}
                                placeholder="연락처 입력(숫자만 입력)"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>이메일</SInputLabel>
                            <SBorder>
                                <input
                                    type="text"
                                    name="contactEmail"
                                    value={registerInfo.contactEmail}
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
                    </SFormWrapper>

                    <SFormWrapper>
                        <SInputWrapper>
                            <SInputLabel>소속</SInputLabel>
                            <SInput
                                type="text"
                                name="affiliation"
                                onChange={handleInputChange}
                                value={registerInfo.affiliation}
                                placeholder="소속 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>부서</SInputLabel>
                            <SInput
                                type="text"
                                name="groupName"
                                onChange={handleInputChange}
                                value={registerInfo.groupName}
                                placeholder="부서 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>직급</SInputLabel>
                            <SInput
                                type="text"
                                name="position"
                                onChange={handleInputChange}
                                value={registerInfo.position}
                                placeholder="직급 입력"
                            />
                        </SInputWrapper>
                    </SFormWrapper>
                </div>

                <div
                    style={{
                        width: "1200px",
                        borderBottom: "1px solid #DDE1E6",
                        margin: "52px 0 0 0",
                    }}
                />
                <SFormTitle>그 외 정보</SFormTitle>
                <div style={{ display: "flex", gap: "75px" }}>
                    <SFormWrapper>
                        <SInputWrapper>
                            <SInputLabel>사업종류</SInputLabel>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "21px 0 17px 0px",
                                    flexWrap: "wrap",
                                }}
                            >
                                {[
                                    "isLocalHousingAssociation",
                                    "isPrivateRentalCooperative",
                                    "isVoluntaryAssociation",
                                    "isOther",
                                ].map((option) => (
                                    <label
                                        key={option}
                                        style={{
                                            display: "flex",
                                            width: "33%",
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
                                        {option === "isLocalHousingAssociation" && "지역주택조합"}
                                        {option === "isPrivateRentalCooperative" &&
                                            "민간임대협동조합"}
                                        {option === "isVoluntaryAssociation" && "임의단체"}
                                        {option === "isOther" && "기타"}
                                    </label>
                                ))}
                            </div>
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>현장명</SInputLabel>
                            <SInput
                                type="text"
                                name="siteName"
                                value={registerInfo.siteName}
                                onChange={handleInputChange}
                                placeholder="현장명 입력"
                            />
                        </SInputWrapper>

                        <SInputWrapper>
                            <SInputLabel>오픈 예정일</SInputLabel>
                            <div style={{ display: "flex", gap: "12px", position: "relative" }}>
                                {/* 숨겨진 날짜 선택기 */}
                                <SInput
                                    ref={dateInputRef}
                                    type="date"
                                    onChange={handleInputChange}
                                    style={{ padding: " 21px 18px 17px 20px", width: "422px" }}
                                    name="plannedOpeningDate"
                                    onClick={() => {
                                        console.log(dateInputRef.current)
                                    }}
                                />
                            </div>
                        </SInputWrapper>
                    </SFormWrapper>

                    <SFormWrapper>
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
                            <SInputLabel>상세정보</SInputLabel>
                            <SInput
                                as="textarea"
                                name="detailedInfo"
                                value={registerInfo.detailedInfo}
                                onChange={handleInputChange}
                                placeholder="500자 이내 입력"
                                maxLength={500}
                                // className="as-textarea" // 추가된 클래스명
                                style={{ height: "250px", resize: "none", overflow: "auto" }}
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

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 200px 364px 16px 364px;
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
    justify-content: flex-start;
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

const SGrayBorder = styled.div`
    width: 1200px;
    height: 80px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    border-radius: 12px;
    background: var(--grbk-50, #f2f4f8);

    margin: 60px 0 0 0;
`

const SFormTitle = styled.div`
    display: flex;
    width: 1200px;
    color: var(--2779F4, #2779f4);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 24px */

    margin: 52px 0 0 0;
`

const SDateInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const SCalendarIcon = styled.img`
    position: absolute;
    right: 18px; // 오른쪽에 위치
    top: 28px;
    width: 20px; // 너비 20px
    height: 20px; // 높이 20px
    background-size: cover;
    cursor: pointer;
    margin: 0 0px 20px 0;
`
