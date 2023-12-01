import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"

// 공지사항
const AdminAnnouncement = () => {
    const navigate = useNavigate()

    // 각 항목의 체크 상태를 저장할 상태 배열
    const [checkedItems, setCheckedItems] = useState(new Array(8).fill(false))

    // 체크박스 상태를 토글하는 함수
    const handleCheckboxChange = (index: any) => {
        const updatedCheckedItems = [...checkedItems]
        updatedCheckedItems[index] = !updatedCheckedItems[index]
        setCheckedItems(updatedCheckedItems)
    }

    // '삭제' 버튼 클릭 시 체크된 항목을 삭제하는 함수
    const handleDelete = () => {
        // 사용자에게 삭제 확인 요청
        if (window.confirm("삭제하시겠습니까?")) {
            // 체크되지 않은 항목만 필터링
            const remainingItems = checkedItems.filter((checked) => !checked)
            setCheckedItems(remainingItems)
        }
    }

    // '추가' 버튼 클릭 시 이동할 경로를 정의하는 함수
    const handleAdd = () => {
        navigate("/admin/dashboard/announcement/add") // 지정된 경로로 이동
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
                    <SMainText style={{ color: "#000", fontSize: "32px", textAlign: "center" }}>
                        공지사항 관리
                    </SMainText>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        width: "100%",
                        justifyContent: "right",
                        margin: "50px 0 10px 0",
                    }}
                >
                    <SButton onClick={handleDelete}>삭제</SButton>
                    <SButton onClick={handleAdd} style={{ background: "#0858F7", color: "#fff" }}>
                        추가
                    </SButton>
                </div>
                <div
                    style={{
                        width: "1200px",
                        borderBottom: "1px solid #DDE1E6",
                    }}
                />

                <SList>
                    {checkedItems.map((isChecked, index) => (
                        <SListItem key={index}>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <STitle>공지</STitle>
                            <SSubject>
                                [공지] 전자결제 서비스 이용 계약 시 &apos;개인정보 처리 위탁
                                계약&apos; 추가
                            </SSubject>
                            <SDate>2023.09.07</SDate>
                        </SListItem>
                    ))}
                </SList>
            </SPage1>
        </SPageWrapper>
    )
}
export default AdminAnnouncement

const SPageWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    // background: blue;
    overflow-x: hidden;
    align-items: center;
    // justify-content: center;

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
    margin: 80px 0 0 0;
`

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 20px 364px;
    justify-content: center;
    align-items: center;
`

const SButton = styled.div`
    display: flex;
    width: 80px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--grbk-300, #a2a9b0);
    text-align: center;

    cursor: pointer;

    /* Pretendard/M/16 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */

    border-radius: 4px;
    border: 1px solid var(--grbk-100, #dde1e6);

    &:hover {
        color: #fff;
        background-color: #dde1e6;
    }
`

const SList = styled.div`
    width: 1200px;
`

const SListItem = styled.div`
    display: flex;
    padding: 0 20px;
    height: 58px;
    align-items: center;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
`

const STitle = styled.div`
    display: flex;
    width: 100px;
    margin: 0 0px 0 20px;
`

const SSubject = styled.div`
    display: flex;
    width: 100%;
    color: var(--grbk-500, #697077);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 18px */
`

const SDate = styled.div`
    display: flex;
    width: 100px;
`