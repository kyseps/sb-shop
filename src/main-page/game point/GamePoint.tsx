import styled from "styled-components"
import GamePointIcon from "@/shared/icons/GamePointIcon"
import SliderSwiper from "@/shared/ItemCards/SliderSwiper"




const StyledGamePoint = styled.section`
position: relative;
margin : auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

function GamePoint() {
  return (
    <StyledGamePoint>    
<SliderSwiper
     Header="گیم پوینت"
     Icon={<GamePointIcon/>}
     Data={GamePointData}
     count={GamePointData.length}
    />
    </StyledGamePoint>

  )
}

export default GamePoint


const  GamePointData = [
  {
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image1.png",
    
  },
  {
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image2.png",
    
  },
  {
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    
  },
  {
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image4.png",
    
  },  

  {
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image4.png",
    
  }, 

  {
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image4.png",
    
  }, 

  {
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image4.png",
    
  },
   
];