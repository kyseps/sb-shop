import styled from "styled-components";
import DiscordLogo from "./images/discordLogo.png"
import DiscordNitroImage from "./images/discordNitroImage.png"
import AdsButton from "./AdsButton";


// const Border = styled.div`
// width :385px;
// height: 418px;
// background : linear-gradient(180deg, rgba(5, 52, 186, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%);
// border-radius: 30px;
// padding : 3px;
// `

const StyledDiscordAds = styled.div`
/* Rectangle 9 */

box-sizing: border-box;



width :385px;
height: 418px;

background: radial-gradient(104.37% 85.65% at 51.3% 48.21%, #3865E4 0%, #0534BA 31.6%, rgba(0, 0, 1, 0) 76%);
border-radius: 30px;


/* border */

border : double 3px transparent;
background-image: radial-gradient(104.37% 85.65% at 51.3% 48.21%, #3865E4 0%, #0534BA 31.6%, rgba(0, 0, 1, 0) 76%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// padding: 10px 10px 30px;
gap: 120px;

`

const StyledDiscordLogo = styled.img`


position: relative;
//  width: 1280p;
height: 269px;
// left: 320px;
// top: 2981px;

width: 266px;
height: 70px;

margin : auto;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// padding: 10px 10px 30px;
gap: 10px;

`

const StyledDiscordNitroImage = styled.img`

position: absolute;
width: 68px;
height: 350px;

width: 288px;
height: 236px;




 left: auto;
top: auto;


// border: 1px solid red;

//  margin-right : 80px;
//  margin-left : 80px;
//  margin-top : 500px;

 margin : auto;
 margin-top : -50px;
`

const DiscordAds = () => {
  return (
    // <Border>

    <StyledDiscordAds>
<div>
  <StyledDiscordLogo src={DiscordLogo}/>
  <StyledDiscordNitroImage src={DiscordNitroImage}/>
</div>


<div className="ml-16 mt-24">
<AdsButton/>
</div>

    </StyledDiscordAds>
    // </Border>
  )
}

export default DiscordAds