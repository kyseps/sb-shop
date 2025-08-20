import styled from "styled-components"


const Border = styled.div`
// width : 226px;
padding: 2px 3px 3px 3px;
// padding : 2px 3px ;
background :linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);

/* Note: backdrop-filter has minimal browser support */
border-radius: 33px;

//  display : flex;
//  align-items : center;



`
const StyledHeaderDiv = styled.div`
 width: 100%;
 height: 148px;

background: linear-gradient(180deg, #13141C 20.5%, rgba(0, 0, 1, 0) 100%);
backdrop-filter: blur(15px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 30px;

`

const H1 = styled.h1`

width: 221px;
height: 64px;


font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 63px;
/* identical to box height, or 198% */
display: flex;
align-items: center;
text-align: right;
letter-spacing: -0.03em;
font-feature-settings: 'calt' off;

background: linear-gradient(92.18deg, #88B7F9 0.92%, #E9F5FC 98.88%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;


margin : auto;
`

const P = styled.p`
height: 23px;

/* info-text */
font-family: extralight;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
/* identical to box height, or 142% */
display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.7);

margin : auto;


`
const Header = () => {
  return (
    <Border>
    <StyledHeaderDiv>
    <div className="flex flex-col py-3">

        <H1 dir="rtl">از تخفیفا جا نمونی!</H1>
        <P dir="rtl">با عضویت در خبرنامه از تخفیفات و محصولات جدید باخبر شو!</P>
    </div>

    </StyledHeaderDiv>
    </Border>
  )
}

export default Header