import styled from "styled-components"
import SeeAllButton from "./SeeAllButton"
import SliderSwiper from "@/shared/ItemCards/SliderSwiper"
import GamePointIcon from "@/shared/icons/GamePointIcon"


const StyledPopularGames = styled.section`
/* Group 31 */

position: relative;
// height: 269px;

margin : auto;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 320px;

margin-top : 100px;

`

function PopularGames() {
  return (
    
    <>
      <StyledPopularGames>
      <SliderSwiper
     Header="بازی های پرطرفدار"
     Icon={<GamePointIcon/>}
     Data={Data}
    />
      <SeeAllButton/>
    </StyledPopularGames>

    

    </>

  )
}

export default PopularGames

const  Data = [
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