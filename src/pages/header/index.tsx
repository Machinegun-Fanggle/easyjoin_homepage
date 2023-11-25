// 리액트 메인 컴포넌트
import React from "react"
import styled from "styled-components"

// 메인 컴포넌트 함수
const Header = () => {
    return (
        <GnbSW9>
            <LogoNa1 src={require("~/assets/images/logo-2vR.png")} />
            <AutoGroupP26x8tm>
                <Frame1MRw>
                    <ItemText marginRight="5.2rem">이지조인 서비스</ItemText>
                    <ItemText marginRight="4.1rem">전자계약</ItemText>
                    <ItemText marginRight="5.2rem">홈페이지 제작</ItemText>
                    <ItemText marginRight="5.2rem">부동산 개발 컨설팅</ItemText>
                    <ItemText marginRight="5.2rem">서비스 신청</ItemText>
                    <ItemText marginRight="5.2rem">고객 지원</ItemText>
                </Frame1MRw>

                <Frame2CZB>
                    <ButtonType1xYM>로그인</ButtonType1xYM>
                    <ButtonType1N6H>도입문의</ButtonType1N6H>
                </Frame2CZB>
            </AutoGroupP26x8tm>
        </GnbSW9>
    )
}
export default Header

export const GnbSW9 = styled.div`
    display: flex;
    position: absolute;
    // margin-bottom: 20.9rem;
    width: 1200px;
    align-items: center;
    flex-shrink: 0;
`

export const LogoNa1 = styled.img`
    width: 15.4rem;
    height: 3.6rem;
    position: relative;
    object-fit: contain;
    vertical-align: top;
    flex-shrink: 0;
`

export const AutoGroupP26x8tm = styled.div`
    box-sizing: border-box;
    padding: 0.1rem 0rem 0.2rem 19.1rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
`

export const Frame1MRw = styled.div`
    margin: 1.1rem 6.6rem 0.6rem 0rem;
    height: calc(100% - 1.7rem);
    display: flex;
    align-items: center;
    flex-shrink: 0;
`

const ItemText = styled.p<{ marginRight: string }>`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    font-family: Pretendard, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
    margin-right: ${(props) => props.marginRight};
`

export const Frame2CZB = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
`

export const ButtonType1xYM = styled.div`
    margin-right: 1rem;
    width: 8.2rem;
    height: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    font-family: Pretendard, "Source Sans Pro";
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0858f7;
    border-radius: 0.4rem;
    flex-shrink: 0;
`

export const ButtonType1N6H = styled.div`
    width: 9.6rem;
    height: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1;
    color: #0858f7;
    font-family: Pretendard, "Source Sans Pro";
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 0.1rem #0858f7;
    box-sizing: border-box;
    border-radius: 0.4rem;
    flex-shrink: 0;
`

const Frame602qQy = styled.div`
    margin-right: 5rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
`

const MaskImage = styled.img`
    object-fit: contain;
    vertical-align: top;
    flex-shrink: 0;
`
