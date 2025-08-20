import styled from "styled-components"


const StyledAdsHeader = styled.div`
//position: absolute;
// width: 634px;
//height: 139px;
//left: calc(50% - 634px/2);
//top: 2214px;


display: flex;
flex-direction : column;
justify-content : center;
align-items : center;
gap : 10px;

margin: auto;
margin-top : 70px;

//border : solid red;
`

const H2 = styled.h2`
/* شانس در خونتو زده!/

//position: absolute;
//width: 634px;
//height: 139px;
//left: calc(50% - 634px/2);
//top: 2214px;

/* hero */
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 63.2px;
/* or 99% */
//display: flex;
//align-items: center;
text-align: center;
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

margin-top : 15px;
color: #E9F5FC;

`


const H1 = styled.h1`
/ این فرصت هارو از دست نده */

//position: absolute;
//width: 634px;
//height: 139px;
left: calc(50% - 634px/2);
top: 2214px;

/* hero */
font-family: black;
// font-style: normal;
// font-weight: 900;
font-size: 64px;
// line-height: 63.2px;
/* or 99% */
//display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

background: linear-gradient(268.08deg, #E9F5FC 2.41%, #88B7F9 86.22%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;


margin-bottom : 50px;


`


function Header() {
  return (
    <StyledAdsHeader  dir="rtl">
     <H2>شانس در خونتو زده!</H2>
     <H1>این فرصت هارو از دست نده</H1>

    </StyledAdsHeader>
  )
}

export default Header