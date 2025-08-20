import styled from "styled-components"
import BenefitsPic from "@/main-page/Images/BenefitsPic.png"
import Header from "./Header"
import Membership from "./Membership"


const StyledNewsLetterSubscribe = styled.section`
//  position : absolute;
//  right : auto;
// left: auto;
// top: auto;
// bottom :auto;


width : 80%;
height : 669px;
margin : auto;
 margin-top : 150px;
margin-bottom : -100px;
// border : 2px solid red;

`


const StyledBackgroundImage = styled.img`


// position: relative;
// height: 269px;
// left: 320px;
// top: 2981px;

width: 100%;
height : 100%;
margin : auto;

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// // padding: 10px 10px 30px;
// gap: 10px;

`

const StyledBenefitsBox = styled.div`

/* Group 62 */

position: relative;
width: 50%;
height: 172px;
right : auto;
left: auto;
top: auto;
bottom :auto;


margin : auto;

margin-top : -445px;
// margin-left : 250px;
// margin : auto;

// border : 2px solid red;
`



function NewsLetterSubscribe() {
  return (
    <StyledNewsLetterSubscribe>
      <StyledBackgroundImage src={BenefitsPic}/>


      <StyledBenefitsBox>
      <Header/>
      <Membership/>
      </StyledBenefitsBox>

      {/* <img src={BenefitsPic} alt="df"/> */}
    </StyledNewsLetterSubscribe>
  )
}

export default NewsLetterSubscribe