import React, { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import styled from "styled-components"
import { IPress } from "~/interface"

// 공지사항 등록
const ModifyAdminPress = () => {
    const [data, setData] = useState<IPress>({
        subject: "",
        url: "",
        content: "",
        image: "",
        creater: "admin",
    })

    const navigate = useNavigate()
    const location = useLocation()
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
        navigate("/admin/dashboard/press") // 이전 페이지로 이동
    }

    // '취소' 버튼 클릭 시 처리할 함수
    const handleCancel = () => {
        navigate("/admin/dashboard/press")
    }

    // '등록' 버튼 클릭 시 처리할 함수
    const handleSubmit = () => {
        alert("등록되었습니다.")
        navigate("/admin/dashboard/press")
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
                        언론보도 수정
                    </SMainText>
                </div>

                <Table>
                    <tbody>
                        <TableRow>
                            <TableColumn>제목</TableColumn>
                            <TableContent>
                                <Input
                                    type="text"
                                    name="subject"
                                    value={data.subject}
                                    onChange={handleInputChange}
                                />
                            </TableContent>
                        </TableRow>
                        <TableRow>
                            <TableColumn>URL</TableColumn>
                            <TableContent>
                                <Input
                                    type="text"
                                    name="url"
                                    value={data.url}
                                    onChange={handleInputChange}
                                />
                            </TableContent>
                        </TableRow>
                        <TableRow style={{ height: "320px" }}>
                            <TableColumn>내용</TableColumn>
                            <TableContent>
                                <TextArea
                                    name="content"
                                    value={data.content}
                                    onChange={handleInputChange}
                                />
                            </TableContent>
                        </TableRow>
                        {/* ... 첨부파일 관련 JSX 코드 */}
                    </tbody>
                </Table>

                <div style={{ display: "flex", gap: "8px", margin: "40px 0 0 0" }}>
                    <SButton onClick={handleCancel}>취소</SButton>
                    <SButton
                        onClick={handleSubmit}
                        style={{ background: "#0858F7", color: "#fff" }}
                    >
                        등록
                    </SButton>
                </div>
            </SPage1>
        </SPageWrapper>
    )
}
export default ModifyAdminPress

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
    display: flex; // Flexbox 레이아웃 사용
`

const TableColumn = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    width: 150px;
    background: var(--whf-9-f-9-f-9, #f9f9f9);
    text-align: center;
    vertical-align: middle;
    display: flex;
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
    min-height: 56px; // 최소 높이 수정
`

const TableContent = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    width: calc(1200px - 150px - 16px);
    display: flex; // Flexbox 레이아웃 사용
    align-items: center; // 세로 중앙 정렬
    min-height: 56px; // 최소 높이 수정
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

const SFileInput = styled.input`
    display: none; // 파일 입력을 숨깁니다
`

const SFileLabel = styled.label`
    background-color: #0858f7;
    color: #fff;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    // height: 36px;
    display: flex;
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
    cursor: pointer;
`

const SFileInstructions = styled.span`
    font-size: 14px;
    color: #697077;
`

const SFileName = styled.span`
    margin-right: 10px; // 파일 이름과 버튼 사이의 여백
    font-size: 14px; // 파일 이름의 폰트 크기
    color: #000; // 파일 이름의 색상
`
