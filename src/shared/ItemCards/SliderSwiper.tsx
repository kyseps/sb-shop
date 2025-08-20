import React, {  useRef } from "react"
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
width: 100%;
height: 200px;
border-radius: 50px;

/* border */

border : double 2px transparent;
background-image: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;

`

const H1 = styled.h1`
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 32px;
display: flex;
align-items: center;
gap : 12px;
text-align: center;
font-feature-settings: 'salt' on;

/* blue-verylight */
color: #E9F5FC;

margin-right : 5rem;
margin-top : 2rem;

`

const StyledItemCardsBox = styled.div`
position: absolute;
width: 70%;

margin-top : 250px;
color : white;
`

const MainBox = styled.a`
width: 240px;
height: 250px;

border-radius: 15px;

/* border */

border : double 2px transparent;
background-image: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

&:hover{            
  transform: translateY(-10px);
  transition: transform 0.3s;
 
 }
 
 &:hover::before{
  
   /* second way */
 
     position: absolute;
     top: 60.17%;
 
     content : "";
 
     background: #3E70FF;
     filter: blur(25px);
     border-radius: 100px;
     width : 142px;
     height : 106px;
     transition: all 0.5s;
     opacity : 0.7;
 
 }
`


const ImageBox = styled.div`
width: 95%;
height: 153px;

margin : auto;
margin-top : 7px;
margin-bottom : -25px;

border-radius : 9px;
`
const Name = styled.h1`
font-family: bold;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;
text-align: center;

color: #FFFFFF;
`

const Description = styled.p`
/* info-text */
font-family: peyda;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
text-align: center;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.7);
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
// width:  unset !important;
display:flex;
justify-content : center;

}

.swiper-slide-active + .swiper-slide-active + .swiper-slide-active{
background : white;
}
`


export default function SliderSwiper({Data , Header , Icon} : any) {

  return (
    <Container>
        <CardsBox Header={Header} Icon={Icon}/>
        <ItemCardsbox Data={Data} />
    </Container>
  )
}

function CardsBox ({Header , Icon} : any) {
  return(
    <StyledCardBox>
        <H1 dir="rtl">
             {Icon}
            {Header}
        </H1>
    </StyledCardBox>
    )
}

function ItemCardsbox({ Data}: { Data: any}) {
  const sliderRef = useRef(null);

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  console.log(navigationNextRef)
  return(
    <StyledItemCardsBox>
    
        
        {/* Navigation Buttons */}
        <div className="flex flex-row gap-8">
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
      slidesPerView={4}
      spaceBetween={30}
      ref={sliderRef}     
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
      slidesPerGroup={4}
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



  // console.log(items);
  const path1 = "/product/"
 const path = `${path1}${DataObject.id}`;

//  console.log(DataObject.id)

  return(

    // <MainBox href={path} >
    <MainBox href={`${path}`} >
    {/* <MainBox to={path} state={items}> */}
    

      <ImageBox>
      <img src={DataObject.photoName} alt={DataObject.name} className="rounded-lg"/>
      </ImageBox>
      {/* <ImageBox src={absoluteUrl}/> */}
      <Name>
        {DataObject.name}
      </Name>
      
      <Description>
        {DataObject.description}
        </Description>

        <div>
          {DataObject.id}
        </div>
    </MainBox>
       
    // </MainBox>
  )
}

