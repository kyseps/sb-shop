
import styled from "styled-components"
import ChatBubbleLeftrightIcon from "../icons/ChatBubbleLeftrightIcon"
import DocumentShield from "../icons/DocumentShield"
import ClockIcon from "../icons/ClockIcon"
import BoltIcon from "../icons/BoltIcon"


const StyledBenefits = styled.section`

width : 80%;
// height :100px;
margin : auto;
margin-bottom : 50px;



display: flex;
gap : 45px;
justify-content : right;
align-items: right;
flex-wrap : wrap;

`

const H1 = styled.h1`


/* 22-bold */
font-family: bold;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;
/* identical to box height */
text-align: right;

color: #FFFFFF;
`

const P = styled.p`


/* info-text */
font-family: peyda;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
/* identical to box height, or 142% */
// text-align: right;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(255, 255, 255, 0.6);
`

const Container = styled.div`
// width : 310px;

display : flex;
gap : 20px;
align-items : right;
justify-content : right;



`

const Benefits = () => {
  return (

    <StyledBenefits>

      <Container>
        <div>
          <H1>پشتیبانی</H1>
          <P>هفت روز هفته در تمام پلتفرم ها</P>
        </div>
      <ChatBubbleLeftrightIcon/>
      </Container>


      <Container>
        <div>
          <H1>تضمین امنیت</H1>
          <P>پرداخت ایمن با رعایت حریم خصوصی</P>
        </div>
        <DocumentShield/>
      </Container>


      <Container>
        <div>
          <H1>قیمت های بروز</H1>
          <P>بروزرسانی لحظه ای با توجه به قیمت ارز</P>
        </div>
        <ClockIcon/>
      </Container>


      <Container>
        <div>
          <H1>تحویل سریع</H1>
          <P>از 30 دقیقه تا 24 ساعت</P>
        </div>
        <BoltIcon/>
      </Container>

   
   </StyledBenefits>
  )
}

export default Benefits