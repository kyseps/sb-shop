import SliderSwiper from "@/shared/ItemCards/SliderSwiper"
import GiftIconSmall from "@/shared/icons/GiftIconSmall"
import styled from "styled-components"

const StyledTrendingGames = styled.section`
/* Group 31 */

position: relative;
height: 269px;


margin : auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 150px;
margin-top: 50px;
`

function TrendingGames() {
  return (
    <StyledTrendingGames>


    <SliderSwiper
     Header="بازی های ترند شده"
     Icon={<GiftIconSmall/>}
     Data={Data}
    />
    </StyledTrendingGames>
  )
}

export default TrendingGames

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