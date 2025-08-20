import styled from "styled-components"
import GiftIconSmall from "@/shared/icons/GiftIconSmall"
import SliderSwiper from "@/shared/ItemCards/SliderSwiper"
// import SliderSwiper from "./Swiper"


const StyledGiftCards = styled.section`
position: relative;
margin : auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom : 300px;
`

function GiftCards() {

  return (
    <StyledGiftCards>

    <SliderSwiper
        Header="گیفت کارت"
        Icon={<GiftIconSmall/>}
        Data={Data}
        />

        {/* <SliderSwiper Data={Data}/> */}
    </StyledGiftCards>
  )
}

export default GiftCards


const  Data = [

  {
    href:"/product/1",
    id:1,
    items:[
      {region : 2 , lat: 50},
    ],
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image1.png",
    star:3,
    price:800,
    discount:60
    
  },
  {
    href:"/product/2",
    id:2,
    items:[
      {region : 2},
    ],
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image2.png",
    star:5,
    price:200,
    discount:0
    
  },
  {
    href:"/product/3",
    id:3,
    items:[
      {region : 2},
    ],
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    star:6,
    price:200,
    discount:0
  },
  {
    href:"/product/4",
    id:4,
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    star:8,
    price:200,
    discount:0
  },
  {
    href:"/product/4",
    id:4,
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    star:8,
    price:200,
    discount:0
  },
  {
    href:"/product/4",
    id:5,
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    star:8,
    price:200,
    discount:0
  },
  {
    href:"/product/4",
    id:6,
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    star:8,
    price:200,
    discount:0
  },  {
    href:"/product/4",
    id:7,
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    star:8,
    price:200,
    discount:0
  },
  {
    href:"/product/4",
    id:8,
    name: "گیفت کارت پلی استیشن",
    description: "Play Station Gift Card",
    photoName: "gift-card-pics/image3.png",
    star:8,
    price:200,
    discount:0
  },

  
];


// {
//   "id": 3,
//   "title": "محصول2",
//   "title_en": "Product2",
//   "description": "توضیحات2",
//   "discount_amount": 69,
//   "discount_end_date": "2024-04-25",
//   "rating": 3
// },