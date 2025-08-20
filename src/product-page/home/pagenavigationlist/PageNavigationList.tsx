import ArrowLeftIcon from "@/shared/icons/ArrowLeftIcon"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledPageNavigationList = styled.div`
display: flex;
align-items: center;
text-align: right;
gap : 2px;

height: 24px;

margin-right : 120px;
margin-top : 15px;

`

const SpanActive = styled(Link)`
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 24px;

color: #FFFFFF;
`

const SpanInacive = styled.span`

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 24px;

color: rgba(233, 245, 252, 0.5);


`


function PageNavigationList({Data} : any) {
  return (
    <StyledPageNavigationList dir="rtl">
        
            <SpanActive to="/">خانه</SpanActive>
            <span><ArrowLeftIcon/></span>
            <SpanActive to="/product-list">لیست محصولات</SpanActive>
            <span><ArrowLeftIcon/></span>
            <SpanInacive>{Data.title}</SpanInacive>
    
    </StyledPageNavigationList>
  )
}

export default PageNavigationList