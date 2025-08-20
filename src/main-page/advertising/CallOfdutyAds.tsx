import styled from "styled-components"
import CODImage from "./images/COD.png"
import AdsButton from "./AdsButton"


const StyledCallOfdutyAds = styled.div`
/* Rectangle 7 */

box-sizing: border-box;

//position: absolute;
// width: 874px;
//  width: 100%;


// height: 100%;
//left: 320px;
//top: 2428px;

height: 199px;

//padding: 25px 50px 75px 100px; 

/* box-2 */
background: radial-gradient(70.19% 100% at 50% 0%, #88B7F9 0%, #466BCD 63%, #2650C4 80%, #0534BA 100%);
border-radius: 30px;


/* border */

border : double 2px transparent;
background-image: radial-gradient(70.19% 100% at 50% 0%, #88B7F9 0%, #466BCD 63%, #2650C4 80%, #0534BA 100%), //origin background
linear-gradient(180deg, rgba(136, 183, 249, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;

display: flex;
flex-direciton : row;

`


const StyledCODImage = styled.img`
/* cod 1 */

//position: absolute;
width: 236px;
height: 214px;
//left: 903px;
//top: 2413px;

//background: url(cod.png);

margin-top : -18px;
margin-right : 50px;
margin-left : 40px

`



const H1 = styled.h1`
/* سی پی کالاف دیوتی موبایل */

//position: absolute;
//width: 350px;
//height: 42px;
//left: 530px;
//top: 2483px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 42px;
/* identical to box height */
display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'salt' on;

color: #000001;
`

const P = styled.p`
/* سی پی ارزون و معتبر بخر! */

// position: absolute;
// width: 393px;
// height: 32px;
// left: 484px;
// top: 2525px;

/* parag */
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 159% */
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on, 'ss01' on;

color: #000001;
`
const CallOfdutyAds = () => {
  return (
    // <Border>

    <StyledCallOfdutyAds dir="rtl" >
        <StyledCODImage src={CODImage} alt="COD"/>
        <div className="m-auto">
        <H1>سی پی کالاف دیوتی موبایل</H1>
        <P>سی پی ارزون و معتبر بخر!</P>
        </div>

        <div className="mt-32 ml-6">
    <AdsButton/> 
      </div>
              

    </StyledCallOfdutyAds>
    // </Border>

  )
}

export default CallOfdutyAds