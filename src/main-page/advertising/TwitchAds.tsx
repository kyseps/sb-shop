import styled from "styled-components";
import Twitch from "./images/Twitch.png"
import AdsButton from "./AdsButton";


const StyledTwitchAds = styled.div`
/* Rectangle 10 */

box-sizing: border-box;

//position: absolute;
// width: 549px;
width : 70%;
height: 199px;
left: 645px;
top: 2647px;

background: radial-gradient(70.19% 100% at 50% 0%, #FFC744 0%, #FF9344 100%);
border-radius: 30px;

/* border */

border : double 3px transparent;
background-image: radial-gradient(70.19% 100% at 50% 0%, #FFC744 0%, #FF9344 100%), //origin background
linear-gradient(180deg, #FFC744 0%, rgba(87, 87, 87, 0.22) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;


display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
// padding: 10px 10px 30px;
gap: 60px;

`

const H1 = styled.h1`
/* سابسکرایب آنی توییچ! */

// position: absolute;
// width: 296px;
// height: 42px;
// left: 871px;
// top: 2681px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 42px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on;

color: #000001;


`

const P = styled.p`
/* استریمر موردعلاقتو آنی ساب کن */

// position: absolute;
// width: 393px;
// height: 32px;
// left: 774px;
// top: 2723px;

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


const StyledTwitchImage = styled.img`
width: 121px;
height: 141px; 
`
function TwitchAds( ) {
  return (
    <StyledTwitchAds dir="rtl">
      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-6">

        <div>
        <H1>سابسکرایب آنی توییچ!</H1>
        <P>استریمر مورد علاقتو آنی ساب کن</P>
        </div>

        <div className="ml-4">
        <AdsButton/>
        </div>

       
      </div>

      {/* LEFT SIDE */}
      <div>
      <StyledTwitchImage src={Twitch} alt="twitch" />
      </div>
    </StyledTwitchAds>
  )
}

export default TwitchAds