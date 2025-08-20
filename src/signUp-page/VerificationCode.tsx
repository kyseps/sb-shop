

import { NavLink } from "react-router-dom"
import styled, { css } from "styled-components"


const Body = styled.body`
height : 750px;
width : 100%;
background : black;

display : flex;
align-items : center;
justify-content : center;

`

const StyledLoginCodeBox = styled.div`

width: 507px;

background: radial-gradient(123.17% 132.38% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%);
border-radius: 50px;


/* border */

border : double 2px transparent;
background-image: radial-gradient(123.17% 132.38% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;
background-clip: content
`
const ContentContainer = styled.div`
padding : 2rem ;
padding-top : 0.8rem;
display : flex;
flex-direction : column;
align-items: center;
gap : 20px;


`
const Heading = styled.h1`

margin-bottom : 10px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 63px;
/* or 198% */
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

color: #FFFFFF;

display : flex;
align-items : center;
// justify-content : center;
gap : 20px;

`

const Description = styled.p`
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;

font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.7);
`

const Input = styled.input`
text-align: center;   
border-radius: 10px;

width: 61px;
height: 41px;

/* Text */
font-family: 'Peyda';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;
display: flex;
align-items: flex-end;
text-align: center;

color: #FFFFFF;

color: #FFFFFF;
background : none;

&:focus {
outline : none;
   }

   /* Remove the default number input spinner */
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Chrome, Safari, Edge, Opera */

    /* Hide the number input spinner for WebKit/Blink browsers */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Hide the number input spinner for Firefox */
    &[type="number"] {
        -moz-appearance: textfield;
    }

${(props) => 
    props.about === "active" &&
    css`
    border : double 2px transparent;
    background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 5, 0.21) 100%), //origin background
    linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
    background-origin: border-box;
    background-clip: content-box, border-box;  
    `
}


${(props) => 
    props.about === "inactive" &&
    css`

    border : double 2px transparent;
    background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(87, 87, 87, 0.22) 100%), //origin background
    linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
    background-origin: border-box;
    background-clip: content-box, border-box;  
    `
}

`

const LoginButton = styled.button`

width: 409px;
height: 41px;

background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;


color: #000001;

`

const ResendMessage = styled.p`
/* ارسال مجدد کد در 1:26 دقیقه */

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 32px;
/* identical to box height, or 227% */
display: flex;
align-items: center;
text-align: center;
justify-content : center;

color: rgba(233, 245, 252, 0.7);


`

function VerificationCode ()  {
    
  return (
    <div>
        <Body>
        <StyledLoginCodeBox dir="rtl">

            <ContentContainer>

            <div className="flex flex-col gap-5">
                <p>
                <Heading>
                {/* <ArrowRightIcon/> */}
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.43934 0.418419C1.02513 -0.139473 1.97487 -0.139473 2.56066 0.418419L11.5607 8.98985C12.1464 9.54774 12.1464 10.4523 11.5607 11.0102L2.56066 19.5816C1.97487 20.1395 1.02513 20.1395 0.43934 19.5816C-0.146447 19.0237 -0.146447 18.1192 0.43934 17.5613L8.37868 10L0.43934 2.43872C-0.146447 1.88083 -0.146447 0.976311 0.43934 0.418419Z" fill="#E9F5FC"/>
                </svg>
                کد تایید
                </Heading>

                
                <Description>خب!</Description>
                <Description>کد تایید برای شماره ۰۹۳۷۷۹۰۶۰۸۶ پیامک شد</Description>
                </p>
             
                <div className="flex justify-between">
                    <Input type="number" about="inactive" pattern="[0-9]"></Input>
                    <Input type="number" about="inactive"></Input>
                    <Input type="number" about="inactive"></Input>
                    <Input type="number" about="active"></Input>
                    <Input type="number" about="inactive"></Input>
                </div>

                <ResendMessage>ارسال مجدد کد در 1:26 دقیقه</ResendMessage>
            </div>
                <NavLink to="/login">
                <LoginButton>ورود</LoginButton>
                </NavLink>
            </ContentContainer>

        </StyledLoginCodeBox>

    </Body>

    
    </div>
   
    
  )
}

export default VerificationCode