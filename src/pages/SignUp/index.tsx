import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// 고객센터
const SignUp = () => {
    const [isLoginChecked, setIsLoginChecked] = useState(false)
    const [isIdSaved, setIsIdSaved] = useState(false)

    const ref = useRef(null)

    const handleCheckboxChange = (e: any) => {
        const { name, checked } = e.target
        if (name === "로그인유지") {
            setIsLoginChecked(checked)
        } else if (name === "아이디저장") {
            setIsIdSaved(checked)
        }
    }

    // 비밀번호 가시성 상태 관리
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [userId, setUserId] = useState("")

    // 비밀번호 가시성 토글 함수
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const handleLogin = () => {
        if (isIdSaved) {
            localStorage.setItem("userId", userId)
        }
        // 로그인 로직 (서버에 요청 등) 추가...
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

        // 컴포넌트가 언마운트될 때 IntersectionObserver 해제
        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <SPageWrapper ref={ref}>
            <SPage1>
                <div style={{ display: "flex", width: "100vw" }}>
                    <img
                        src={require("../../assets/Rectangle 2338.svg").default}
                        style={{ width: "auto", height: "100vh", objectFit: "contain" }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100vh",
                        }}
                    >
                        <SLogo>
                            <img
                                src={require("../../assets/Easy Join.svg").default}
                                style={{
                                    width: "auto",
                                    height: "30px",
                                    objectFit: "contain",
                                    marginRight: "40px",
                                }}
                            />
                        </SLogo>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "100%",
                                justifyContent: "center",
                            }}
                        >
                            <STitle>이지조인 관리자</STitle>
                            <SBorder>
                                <SInput
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    placeholder="아이디 입력"
                                />
                                <SPasswordInputWrapper>
                                    <SInput type={isPasswordVisible ? "text" : "password"} />
                                    <SIconButton onClick={togglePasswordVisibility}>
                                        <img
                                            src={
                                                isPasswordVisible
                                                    ? require("../../assets/eye blue.svg").default
                                                    : require("../../assets/eye.svg").default
                                            }
                                            alt="비밀번호 보기"
                                            height={20}
                                        />
                                    </SIconButton>
                                </SPasswordInputWrapper>{" "}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "21px 0 17px 0px",
                                        width: "440px",
                                    }}
                                >
                                    <label
                                        key={"로그인유지"}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginRight: "24px",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            name={"로그인유지"}
                                            checked={isLoginChecked}
                                            onChange={handleCheckboxChange}
                                            style={{ marginRight: "10px" }}
                                        />
                                        로그인 유지
                                    </label>
                                    <label
                                        key={"아이디저장"}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            name={"아이디저장"}
                                            checked={isIdSaved}
                                            onChange={handleCheckboxChange}
                                            style={{ marginRight: "10px" }}
                                        />
                                        아이디 저장
                                    </label>
                                </div>
                                <SButton to={"/admin/dashboard"} onClick={handleLogin}>
                                    로그인
                                </SButton>
                            </SBorder>
                            <SLink to="/">웹사이트 바로가기</SLink>
                        </div>
                    </div>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default SignUp

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

const STitle = styled.div`
    display: flex;

    color: var(--grbk-900, #15191e);
    text-align: center;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
`

const SPage1 = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    // justify-content: center;
    // align-items: center;
`

const SBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 540px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid #eee;
    margin: 60px 0 0 0;
`

const SInput = styled.input`
    display: flex;
    width: 440px;
    margin: 50px 0 0 0;
    padding: 21px 0px;
    align-items: center;
    gap: 4px;
    border: none;
    border-bottom: 1px solid var(--grbk-100, #dde1e6);
    outline: none; // 포커스시 아웃라인 제거
    box-shadow: none; // 기본 박스 그림자 제거
    -webkit-appearance: none; // 크롬, 사파리 등 웹킷 기반 브라우저의 기본 스타일 제거
    -moz-appearance: none; // 파이어폭스의 기본 스타일 제거
    background: #fff;
`

const SButton = styled(Link)`
    display: flex;
    width: 440px;
    padding: 27px 0px;
    margin: 40px 0 50px 0;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid var(--grbk-200, #c1c7cd);
    background: var(--grbk-100, #dde1e6);
    text-decoration: none; // 기본 상태에서 밑줄 제거
    color: var(--grbk-400, #878d96);
    /* Pretendard/R/18 */
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 18px */
    background: #fff;

    &:hover {
        background: #2779f4; // 호버 상태에서의 색상
        color: #fff;
    }
`

const SLogo = styled.div`
    display: flex;
    height: 75px;
    width: 100%;
    justify-content: right;
    align-items: center;
`

const SLink = styled(Link)`
    display: flex;
    margin-top: 80px;
    color: var(--000, #000);

    /* Pretendard/R/15 */
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 15px */
    text-decoration: none; // 기본 상태에서 밑줄 제거
`
const SPasswordInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 440px;
`

// 비밀번호 보기 버튼
const SIconButton = styled.button`
    position: absolute;
    border: none;
    right: 0;
    bottom: 20px;
    background: none;
    cursor: pointer;
`
