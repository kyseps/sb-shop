import styled from "styled-components";
import HomeNote from "./HomeNote";
import HomeButton from "./HomeButton";
// import useMediaQuery from "@/hooks/useMediaQuery";
import Rectangle28 from "./Rectangle28";
import GameStoresImages from "./GameStoresImages";
import MainNav from "@/shared/navbar/MainNav";




const StyledHome = styled.section`
//position: relative;
//width: full;
// height: 1552px;
// left: 0px;
// top: 0px;

// background-repeat : no-repeat;
// background : red;
  // background: radial-gradient(258.19% 74.24% at 50% 12.21%, #E9F5FC 0%, rgba(203, 220, 243, 0.87) 22%, rgba(5, 52, 186, 0) 100%), radial-gradient(63.78% 39.75% at 50% 18.41%, #0534BA 0%, rgba(5, 52, 186, 0) 100%), radial-gradient(100% 100% at 50% 0%, #0534BA 0%, rgba(5, 52, 186, 0) 100%)black;


`

const DIV = styled.div`

display: flex;
flex-direction: column;
//justify-content: center;
align-items: center;
gap: 40px;
margin-top : 128px;

`


const Home = () => {
  return (
    <>
    
    <StyledHome>
      <MainNav/>
       <div className="flex flex-col justify-center gap-24"> 
       
      <DIV>
      <HomeNote/>
      <HomeButton/>
      </DIV>
    

      <Rectangle28/>
      
      </div> 

      <GameStoresImages/>
    
    </StyledHome></>
    
  )
}

export default Home
