import styled from "styled-components"

// import * as Common from "~/styles/common"
export const SPage = styled.div`
    display: flex;
    overflow: scroll;
    width: ${() => window.innerWidth - 250}px;
    height: ${() => window.innerHeight - 20}px;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
`

export const SContentsWithMargin = styled.div`
    display: flex;
    width: 1000px;
    margin: 60px;
    flex-direction: column;
    justify-content: center;
`

export const JSContentsWithMargin = styled.div`
    display: flex;
    width: 1600px;
    margin: 60px;
    flex-direction: column;
    justify-content: center;
`

export const SContentsNoMargin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SPageTitle = styled.h3`
    width: 100%;
    margin: 10px 0;
`

export const SFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const SFlexRowVerticalCenter = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`

export const SFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SFlexColumnFlexEnd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
`

export const SLine = styled.div<{ width?: string }>`
    width: ${({ width }) => width ?? "auto"};
    height: 0px;
    border: 1px solid #335a93;
`

export const SText = styled.p`
    display: flex;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
`

export const STableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const STable = styled.table<{ width?: string; display?: string }>`
    ${({ display }) => `display: ${display ?? ""}`};
    ${({ display }) => `flex-direction: ${display !== undefined ? "column" : ""}`};
    width: ${({ width }) => width ?? "100%"};
`

export const STableHeader = styled.thead<{ width?: string; display?: string }>`
    ${({ display }) => `display: ${display ?? ""}`};
    width: ${({ width }) => width ?? "100%"};
`

export const STableBody = styled.tbody<{ width?: string; display?: string }>`
    ${({ display }) => `display: ${display ?? ""}`};
    width: ${({ width }) => width ?? "100%"};
`

export const STableRow = styled.tr<{ width?: string; display?: string }>`
    ${({ display }) => `display: ${display ?? ""}`};
    width: ${({ width }) => width ?? "100%"};
`

export const SColumn = styled.th<{ width?: string; display?: string; isNestedColumnRow?: boolean }>`
    ${({ display }) => `display: ${display ?? ""}`};
    width: ${({ width }) => width ?? "20%"};
    height: 40px;
    vertical-align: middle;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #17181a;
    background-color: ${({ isNestedColumnRow }) =>
        isNestedColumnRow ?? false ? "#252A2E" : "#17181a"};
`
export const JColumn = styled.th<{ width?: string; display?: string; isNestedColumnRow?: boolean }>`
    ${({ display }) => `display: ${display ?? ""}`};
    width: ${({ width }) => width ?? "20%"};
    height: 450px;
    vertical-align: middle;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #17181a;
    background-color: ${({ isNestedColumnRow }) =>
        isNestedColumnRow ?? false ? "#252A2E" : "#17181a"};
`
export const SCell = styled.td<{
    width?: string
    textalign?: string
    display?: string
    padding?: string
}>`
    ${({ display }) => `display: ${display ?? ""}`};
    ${({ display }) => (display !== undefined ? "flex-direction: row;" : "")}
    width: ${({ width }) => width ?? "auto"};
    height: 40px;
    line-height: 15px;
    vertical-align: middle;
    justify-content: center;
    text-align: ${({ textalign }) => textalign ?? "center"};
    align-items: center;
    padding: ${({ padding }) => padding ?? "0"};
    background-color: transparent;
    font-size: 10px;
    border: 1px solid #373b3e;
    cursor: default;
`

export const SInputBox = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
`

export const SInputAreaBox = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    padding: 11px 15px;
    color: #fff;
    background-color: #4d5358;
`

export const STitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

export const STitleDetailWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const STitle = styled.h3`
    /* color: #335a93; */
    color: #fff;
`

export const SEditButtonWrapper = styled.div`
    display: flex;
    color: #697077;
`

export const SEditImage = styled.img`
    color: #697077;
`

export const SEditButton = styled.button`
    color: #fff;
    cursor: pointer;
`
