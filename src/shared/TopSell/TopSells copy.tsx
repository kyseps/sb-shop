import TopSellsBox from "./TopSellsBox"

import React from "react"
import styled from "styled-components"

import  'swiper/css'
import 'swiper/css/free-mode'
import "./Swiper.css"
import "swiper/css/pagination"
import { FreeMode } from "swiper/modules"
import  {Navigation,Pagination, Scrollbar, A11y, EffectFade} from "swiper/modules";
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);




const StyledTopSells = styled.section`


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width :80%;
margin:auto;

`

const StyledItemCardsBox = styled.div`
position: absolute;
width: 100%;

margin-top : 350px;
color : white;
margin-rignt : 450px;
// max-width: 1800px;
`
const MainBox = styled.a`

width : 224px;
height : 286px;

background: linear-gradient(0deg, #000001 0%, #0C0C42 100%);
border-radius: 15px;

/* border */

border : double 2px transparent;
background-image: linear-gradient(0deg, #000001 0%, #0C0C42 100%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.3) 0%, rgba(136, 183, 249, 0.1) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;

display : flex;
flex-direction : column;
align-items: center;
text-align: right;

&:hover{
  box-shadow: 0px 15px 10px -15px #4f46e5;
  transform: translateY(-5px);
  transition: transform 0.3s;
}
`
const ImageBox = styled.img`
background: radial-gradient(107.79% 100% at 50% 100%, rgba(5, 52, 186, 0.2) 0%, rgba(136, 183, 249, 0.2) 100%);
border-radius: 7px;

width : 186px;
height : 152px;
`

const Text = styled.p`
font-family: 'Peyda';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 32px;
font-feature-settings: 'salt' on;

color: #E9F5FC;

`
const Discount = styled.p`
font-family: peyda;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 32px;
/* identical to box height, or 227% */
align-items: center;
text-align: right;
text-decoration-line: line-through;

color: rgba(233, 245, 252, 0.4);
`

const Price = styled.p`
font-family: medium;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;

margin-top : -10px;
margin-bottom : 20px;
color: #88B7F9;
`
const StarContainer = styled.div`
display: flex;
align-items: center;
margin-left: 2px;
`


const MainSwiper = styled(Swiper)`
.swiper{
display: flex;
    justify-content : space-between;
}
.swiper-wrapper {
border :1px solid red;
margin-right: 100px;
// max-width: 800px;
    // margin-top: 60px;
    // margin-bottom: 40px;
    padding : 40px 0px;
    // display: flex;
    // justify-content : space-between;
}

.swiper-wrapper(
background : white;
)

swiper{

}
.swiper-slide{
border :1px solid purple;
width:  unset !important;
display:flex;
justify-content : center;

}

// .swiper-slide + .swiper-slide  + .swiper-slide  + .swiper-slide {
// background : white;
// }

.swiper-slide-active + .swiper-slide-active + .swiper-slide-active{
background : white;
}

.arrow-left {

}

.arrow-right {
}


.slick-active>*:nth-child(4){
// background : white;
}


`

export default function TopSells () {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <>
     <StyledTopSells>
           
    <TopSellsBox
    navigationNextRef={navigationNextRef} 
    navigationPrevRef={navigationPrevRef}
    />
   <ItemCardsbox
    navigationNextRef={navigationNextRef} 
    navigationPrevRef={navigationPrevRef}
   />
    </StyledTopSells>
    </>
   
  )
}



const FormatNumber = (Number: any ) => {
    let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
    return FaNum;
  }


function ItemCardsbox({navigationPrevRef, navigationNextRef}: any) {


  return (    
    <>
    

      <StyledItemCardsBox>
          
 

        <div dir="rtl">
        <MainSwiper
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      slidesPerView={6}
      spaceBetween={20}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
        }}
      onInit={(swiper : any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      // autoHeight={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      slidesPerGroup={6}
      breakpoints={{
        440:{
          slidesPerView: 1,
          // spaceBetween:20,
        },
        640:{
          slidesPerView: 2,
          spaceBetween:20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween:40,
        },
        1100:{
          slidesPerView: 6,
          spaceBetween:30,
        }
        
      }}
      >
          {FirstSlideData.length > 0 ? (
            FirstSlideData.map((item, index) => (
              <SwiperSlide>
              <ItemCards key={index}  DataObject={item} />
              </SwiperSlide>
            ))
          ) : (
            <p>Loading...</p>
          )}
          </MainSwiper>
          </div>

      </StyledItemCardsBox>
    </>

  );
}



const ItemCards = ( {DataObject} : {DataObject : any}) => {

  return (

     <MainBox href='#'>

       <div className='mt-3 mb-3'>
      <ImageBox src='http://5.178.111.119:8000/media/images/%D8%B1%D9%86%D9%88-%D9%BE%DB%8C-%DA%A9%DB%8C-%D9%85%D9%87%D8%AF%DB%8C-%D8%B9%D9%84%D9%85%D8%A7%D8%A6%DB%8C-3.jpg' alt='product-image'/>
      </div>  

      <Text>{DataObject.title}</Text>

     <div className='flex flex-row items-center justify-center gap-3'>
      <p className='mr-2' dir='rtl'>
        <Discount> {DataObject.discount_amount === 0 ? "" : DataObject.discount_amount}</Discount>
        <Price>{DataObject.price} تومان</Price>
       </p>

      <div className='flex ml-2 text-red-500 '>    
        <StarContainer dir='ltr'>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
         </StarContainer>

         <div className="text-white">
          {DataObject.id}
         </div>
       </div>
     </div>
     </MainBox>

  )
}




const  FirstSlideData = [
  {
    id: 1,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    id: 2,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
  },
  {
    id: 3,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    id: 4,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    id: 5,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    id: 6,
    name: "گیفت کارت استیم ولت",
    ingredients: "Bread with italian olive oil and rosemary",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
];
