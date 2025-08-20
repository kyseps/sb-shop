import ArrowLeftIcon from "@/shared/icons/ArrowLeftIcon"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledPageNavigationList = styled.div`
display: flex;
align-items: center;
text-align: right;
gap : 2px;

height: 24px;

width : 80%;
margin : auto;

// margin-right : 100px;
// margin-top : 15px;



// margin-right : 100px;
// margin-top : 15px;
`

const SpanActive = styled(NavLink)`
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



function PageNavigationList() {
  return (
    <StyledPageNavigationList dir="rtl">
        
    <SpanActive to="/">خانه</SpanActive>
    <span><ArrowLeftIcon/></span>
    <SpanInacive>لیست محصولات</SpanInacive>
  

</StyledPageNavigationList>
  )
}

export default PageNavigationList