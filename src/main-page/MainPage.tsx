
import GiftCards from '@/main-page/GiftCards/GiftCards'
import Ads from '@/main-page/advertising/Ads'
import GamePoint from '@/main-page/game point/GamePoint'
import Home from '@/main-page/home/Home'
// import ProductsCategory from '@/main-page/products categorization/ProductsCategory'
import TopSells from '@/main-page/top sells/TopSells'
import styled from "styled-components"
import NewsLetterSubscribe from '@/main-page/subscribe to newsletter/NewsLetterSubscribe'
import Benefits from '@/shared/benefits/Benefits'
import Footer from '@/shared/footer/Footer'
import "./Main.css"
import { useEffect } from 'react'

type Props = {}

const StyledMainPage = styled.div`

//position: relative;
width: 100%;

// for when we zoom out
// max-width: 1600px;

margin:auto;

height: full;

/* it would work when you zoome out the page */
// width:1519px; 
// margin : auto;

// background: #000001;


`



function MainPage({}: Props) {

  useEffect(() => {
    // Apply the unique background with repeat
    document.body.style.background = 
 'radial-gradient(258.19% 74.24% at 50% 12.21%, #E9F5FC 0%, rgba(203, 220, 243, 0.87) 22%, rgba(5, 52, 186, 0) 100%), radial-gradient(63.78% 39.75% at 50% 18.41%, #0534BA 0%, rgba(5, 52, 186, 0) 100%), radial-gradient(100% 100% at 50% 0%, #0534BA 0%, rgba(5, 52, 186, 0) 100%)black';

    document.body.style.backgroundRepeat = 'no-repeat'; // Add background repeat
    // document.body.style.minHeight = '200px'; 

    // Cleanup to reset the background when component unmounts
    return () => {
      document.body.style.background = '';
      document.body.style.backgroundRepeat = '';
    };
  }, []);
 
 

  return (
  
<>

   
        <StyledMainPage>
          
      <Home/>
      <TopSells/>
      <Ads/>
      <GiftCards/>
      {/* <ProductsCategory/> */}
      <GamePoint/>
      <NewsLetterSubscribe/>
      <Benefits/>
      <Footer/>
      
        
      </StyledMainPage>
</>
  
  
    

      
        

  )
}


export default MainPage