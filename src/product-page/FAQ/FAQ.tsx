import styled  from "styled-components"
import QuestionMarkIconYellow from "@/shared/icons/QuestionMarkIconYellow"
import Accordion from "./Accordion";
// import { Accordion } from "react-bootstrap";





const StyledFAQ = styled.section`
margin-top : 50px;

/** for responsive **/
// display : flex;
flex-direction : row;
// align-item : center;
justify-content : center;
gap : 30px;
flex-wrap: wrap;


`

const Div = styled.div`
display : flex;
flex-direction : column;
`


const StyledContainerBox = styled.div`
/* Rectangle 31 */

box-sizing: border-box;



/* item-list-bg */
background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 30px;



/* border */

border : double 2px transparent;
background-image:  linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;


margin-top : 20px;


`


const Heading = styled.h1`

      font-style: normal;
      font-weight: 900;
      font-family: black;
      font-style: normal;
      font-weight: 900;
      font-size: 22px;
      line-height: 32px;
      /* identical to box height, or 145% */
      display: flex;
      gap : 10px;
      align-items: center;
      text-align: right;
      font-feature-settings: 'salt' on;

      /* blue-verylight */
      color: #E9F5FC;
`



function FAQ() {
  return (
    <StyledFAQ dir="rtl">
     <Div>

        <Heading>
            <QuestionMarkIconYellow/>
            <span>سوالات متدوال</span>
        </Heading>


        <StyledContainerBox>
        {/* <Accordion data={faqs}/> */}
        <Accordion/>
        </StyledContainerBox>
     </Div>
    </StyledFAQ>
  )
}

export default FAQ
