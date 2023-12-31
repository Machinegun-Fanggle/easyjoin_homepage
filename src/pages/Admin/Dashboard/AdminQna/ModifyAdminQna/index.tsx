import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import styled from "styled-components"
import apiInstance from "../../../../../api"
import { IQnA } from "../../../../../interface"
import { send } from "process"

// 공지사항 등록
const ModifyAdminQna = () => {
    const [data, setData] = useState<IQnA>({
        title: "",
        content: "",
        category: "",
        createAt: "",
        writer: "admin", // 이 부분은 필요에 따라 조정
    })

    const location = useLocation()
    const navigate = useNavigate()
    const item = location.state?.item

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // 뒤로가기 버튼 클릭 시 처리할 함수
    const handleBack = () => {
        navigate("/admin/dashboard/qna") // 이전 페이지로 이동
    }

    // '취소' 버튼 클릭 시 처리할 함수
    const handleCancel = () => {
        navigate("/admin/dashboard/qna")
    }

    // '등록' 버튼 클릭 시 처리할 함수
    const handleSubmit = async () => {
        const currentDate = new Date().toISOString().split("T")[0]
        const id = item?._id

        const qnaData: IQnA = {
            category: data.category,
            title: data.title,
            content: data.content,
            createAt: currentDate,
            writer: "admin",
        }

        const sendData = {
            data: {
                id: id,
                qnaData: qnaData,
            },
        }

        console.log(sendData)

        try {
            const response = await apiInstance.post("/qna/update", sendData)
            if (response.data.ok) {
                console.log("Response:", response.data)
                alert("수정되었습니다.")
                navigate("/admin/dashboard/qna")
            }
        } catch (error: any) {
            console.error("Error:", error.response)
            alert("관리자에게 문의해주십시오.")
        }
    }

    useEffect(() => {
        if (item) setData(item)
    }, [item])

    return (
        <SPageWrapper>
            <SPage1>
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        width: "1200px",
                        margin: "80px 0 0 0",
                    }}
                >
                    <SBackButton
                        src={require("~/assets/chevron-left.svg").default}
                        onClick={handleBack}
                        width={24}
                        height={24}
                    />

                    <SMainText style={{ color: "#000", fontSize: "32px", textAlign: "center" }}>
                        자주하는질문 수정
                    </SMainText>
                </div>

                <Table>
                    <tbody>
                        <TableRow>
                            <TableColumn>제목</TableColumn>
                            <TableContent>
                                <Input
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    onChange={handleInputChange}
                                />
                            </TableContent>
                        </TableRow>
                        <TableRow style={{ height: "430px" }}>
                            <TableColumn>내용</TableColumn>
                            <TableContent style={{ height: "430px" }}>
                                <TextArea
                                    name="content"
                                    value={data.content}
                                    onChange={handleInputChange}
                                />
                            </TableContent>
                        </TableRow>
                    </tbody>
                </Table>

                <div style={{ display: "flex", gap: "8px", margin: "40px 0 0 0" }}>
                    <SButton onClick={handleCancel}>취소</SButton>
                    <SButton
                        onClick={handleSubmit}
                        style={{ background: "#0858F7", color: "#fff" }}
                    >
                        수정
                    </SButton>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default ModifyAdminQna

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
`

const SPage1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 20px 364px;
    justify-content: center;
    align-items: center;
`

const SBackButton = styled.img`
    margin-right: 20px; // 오른쪽 여백
    padding: 5px 10px; // 패딩
    font-size: 16px; // 폰트 크기
    cursor: pointer; // 마우스 커서 스타일
    // 추가적인 스타일링
`

const Table = styled.table`
    border-collapse: collapse;
    width: 100%; // 테이블의 너비를 100%로 설정
    margin: 40px 0 0 0;
`

const TableRow = styled.tr`
    width: 100%;
`

const TableColumn = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    width: 150px;
    background: var(--whf-9-f-9-f-9, #f9f9f9);
    text-align: center;
    vertical-align: middle;
`
const TableContent = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    width: calc(1200px - 150px - 16px));
`

const Input = styled.input`
    height: 36px;
    flex-shrink: 0;
    width: calc(100% - 16px); // 패딩 고려
    border: 1px solid var(--gray-50, #dde1e6);
`

const TextArea = styled.textarea`
    width: calc(100% - 16px); // 패딩 고려
    height: 98%;
    border: 1px solid var(--gray-50, #dde1e6);
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
