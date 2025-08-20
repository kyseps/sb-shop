import styled from "styled-components";
import PageNavigationList from "./PageNavigationList";
import HomeTitle from "./HomeTitle";
import PopularGames from "./PopularGames";
import MainNav from "@/shared/navbar/MainNav";


const StyledHome = styled.section`
position : relative;
/* Rectangle 30 */

// width: 1920px;
// height: 1273px;


// background: radial-gradient(93.04% 100% at 100% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%), radial-gradient(93.04% 100% at 0% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%);


`

const Home = () => {
  return (
    <>
    
    <StyledHome>
      <MainNav/>
      <PageNavigationList/>
      <HomeTitle/>
      <PopularGames/> 
    </StyledHome>
    

    </>
    
  )
}

export default Home
