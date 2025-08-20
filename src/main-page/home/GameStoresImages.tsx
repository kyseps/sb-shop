import styled from "styled-components";
import Prime from "./images/prime.png";
import EA from "./images/ea.png";
import Steam from "./images/steam.png";
import Epic from "./images/epic.png";
import GreenMan from "./images/greenman.png";
import Xbox from "./images/xbox.png";


const  Container =  styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;

width : 80%;
margin: auto;
margin-top : 120px;

`

const P = styled.p`
//position: absolute;
//width: 466px;
//height: 31px;
//left: 730px;
//top: 1167px;

font-family: 'Peyda';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
/* identical to box height */
text-align: center;

color: #EDEBE8;

`

const GameStoreImages = styled.div`

width: 100%;


display: flex;
flex-direction: row;
flex-wrap : wrap;
justify-content: center;
align-items: center;
gap : 80px;
flex-basis: 60%;


`
const Image = styled.img`
/* ea 1 */

//position: absolute;
// width: 143px;
height: 39px;
// left: 547px;
// top: 1237px;


`


function GameStoresIcon() {
  return (
    <Container>
     <P>
       خرید بدون محدودیت از تمام گیم استور های معتبر 
    </P>

<GameStoreImages>

<Image src={Steam}/>
<Image src={EA}/>
<Image src={Epic}/>
<Image src={GreenMan}/>
<Image src={Prime}/>
<Image src={Xbox}/>

</GameStoreImages>

    </Container>
   
  )
}

export default GameStoresIcon