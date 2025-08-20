import React, {  useEffect, useState } from "react"
import styled from "styled-components"
import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import ArrowRightIcon from "../icons/ArrowRightIcon"

import  'swiper/css'
import 'swiper/css/free-mode'
import "./Swiper.css"
import "swiper/css/pagination"
import { FreeMode } from "swiper/modules"
import  {Navigation,Pagination, Scrollbar, A11y, EffectFade} from "swiper/modules";
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import FilledStarIcon from "../icons/FilledStarIconYellow"
import EmptyStarIcon from "../icons/EmptyStarIcon"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width :80%;
margin:auto;
`

const StyledCardBox = styled.div`
/* box-1 */
background: radial-gradient(93.04% 100% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%);
border-radius: 50px;

// position: absolute;
height: 400px;

margin : auto;

/* border */

border : double 2px transparent;
background-image: radial-gradient(93.04% 100% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;

width: 100%;
// height: 200px;

`

const H2 = styled.h2`


/* hero */
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 56px;
line-height: 63px;
/* identical to box height, or 99% */
text-align: right;
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

color: #E9F5FC;


`

const StyledItemCardsBox = styled.div`
position: absolute;
width: 86%;

margin-top : 250px;
color : white;
margin-right : 180px;
`





// **************************************


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

const ImageBox = styled.div`
// background: radial-gradient(107.79% 100% at 50% 100%, rgba(5, 52, 186, 0.2) 0%, rgba(136, 183, 249, 0.2) 100%);
border-radius: 7px;

width : 186px;
height : 152px;

display : flex;
align-items:center;
justify-content: center;
`
const IMg = styled.img`

width : 186px;
height : 152px;

  object-fit: cover;
  /*object-fit: contain;
  object-fit: scale-down;
  object-position: -10% 0;
  object-fit: none;
  object-fit: fill;*/max-width: 100%;
  max-height: 100%;
border-radius: 7px;

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
font-size: 13px;
line-height: 32px;
/* identical to box height, or 227% */
// align-items: center;
text-align: right;
text-decoration-line: line-through;

margin-left : 145px;
color: rgba(233, 245, 252, 0.4);
`

const Price = styled.p`
font-family: medium;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 32px;

color: #88B7F9;
`
const StarContainer = styled.div`
display: flex;
align-items: center;
`


const MainSwiper = styled(Swiper)`

.swiper-wrapper {
  padding : 40px 0px;

}

.swiper-wrapper(
background : white;
)

swiper{

}
.swiper-slide{
width:  unset !important;
// display:flex;
// justify-content : center;
//  padding: 0px 30px;
// margin-left: 50px;
// border :1px solid red;
// width : 224px;
// width: calc((100% / 6) - 20px); /* Adjust for 6 slides with spacing */


}

.swiper-slide-active + .swiper-slide-active + .swiper-slide-active{
background : white;
}
`

export default function TopSells() {

  return (
    <Container>
        <CardsBox />
        <ItemCardsbox />
    </Container>
  )
}

function CardsBox () {
  return(
    <StyledCardBox>
      <div className="flex flex-col gap-3 mr-14 mt-10">
         <H2>
        پرفروش ترین های این هفته
        </H2>
      </div>
    </StyledCardBox>
    )
}

function ItemCardsbox() {

  const [Data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);



  async function fetchData() {
    try {
      const response = await fetch('https://sbshop.ir/');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData.products);
        
      } else {
        console.log('Error: ' + response.status);
      }
    } catch (error) {
      console.log('Error: ');
    }finally{
    }
  }


  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return(
    <StyledItemCardsBox>
    
        
        {/* Navigation Buttons */}
        <div className="flex flex-row gap-8 ml-44">
            {/* Right Arrow */}
            <button   ref={navigationNextRef} className="arrow-right">
                <ArrowLeftIcon/>
            </button>

            {/* Left Arrow */}
            <button ref={navigationPrevRef}  className="arrow-left">
              <ArrowRightIcon/>
            </button>
        </div>
    



<div dir="rtl">

    <MainSwiper
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      slidesPerView={8}
      // spaceBetween={20}
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
        
      pagination={{ clickable: true, dynamicBullets: true }}
      slidesPerGroup={1}
      breakpoints={{
        440:{
          slidesPerView: 1,
        },
        650:{
          slidesPerView: 2,
          spaceBetween:20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween:20,
        },
        1340:{
          slidesPerView: 4,
          spaceBetween:30
        }
        
      }}  
      >
            {Data.map((index : any) => (
              <SwiperSlide>
                  <ItemCards items={Data} DataObject={index} key={index.name}/>
              </SwiperSlide>
            ))}
           
    </MainSwiper>
            </div>
</StyledItemCardsBox>
  )
}


function ItemCards ({ DataObject }: any) {
  const FormatNumber = (Number: any ) => {
    let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
    return FaNum;
  }

  const firstImage = DataObject.images[0]?.image; // Access the first image link
  const baseUrl = 'https://sbshop.ir/'; // Replace with your base URL
  const relativeUrl = firstImage; // Replace with your relative image URL
  const absoluteUrl = `${baseUrl}${relativeUrl}`;

  // console.log(relativeUrl)

  const Rating = DataObject.rating;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FilledStarIcon key={i} />);
      } else {
        stars.push(<EmptyStarIcon key={i} />);
      }
    }
    return stars;
  };



  const path1 = "/product/"
  const path = `${path1}${DataObject.id}`;

  return(
    <MainBox href={`${path}`} >

      <div className='mt-3 mb-3'>
      <ImageBox>
        <IMg src={absoluteUrl} alt='product-image'/>
      </ImageBox>
      </div>  

      <Text>{DataObject.title}</Text>


      <div className='flex flex-row items-center justify-center gap-3'>
        <Price>{FormatNumber(DataObject.price)} تومان</Price>

      <div className='flex ml-2 text-red-500 '>    
        <StarContainer dir='ltr'>
      {renderStars(Rating)}
        </StarContainer>
      </div>
    </div>
        <Discount> {DataObject.discount_amount === 0 ? "" : DataObject.discount_amount}</Discount>
    </MainBox>
  )
}

