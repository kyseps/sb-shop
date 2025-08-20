import styled from "styled-components"
import AdsButton from "./AdsButton"

const StyledGiftCardAds = styled.div`
/* Rectangle 11 */

box-sizing: border-box;

//position: absolute;
//  width: 305px;
 width : 40%;

background: radial-gradient(131.64% 138.44% at 50.16% 100%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%);
border-radius: 30px;


/* border */

border : double 3px transparent;
background-image:  radial-gradient(131.64% 138.44% at 50.16% 100%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;

display : flex;
flex-direction : column;
align-items : center;
justify-content : center;
// space-between : 50px;
// gap : 0px;

`

const P = styled.p`
/* گیفت کارت پلـی استیشن */

// position: absolute;
// width: 163px;
// height: 58px;
left: 392px;
top: 2696px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 22px;
/* or 69% */
//  display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'salt' on;

color: #E9F5FC;

margin : auto;


`

const ContentContainer = styled.div`
display : flex;
flex-direction : column;
align-items:center;
justify-content : center;
gap : 16px;

width : 80%;
margin : auto;

// border : 1px solid red;
`
function PlayStationGiftCardAds() {
  return (
    <StyledGiftCardAds>

    <ContentContainer>
      <P>گیفت کارت</P>
      <P>پلی استیشن</P>    
      <AdsButton/>
    </ContentContainer>
  

    </StyledGiftCardAds>
  )
}

export default PlayStationGiftCardAds