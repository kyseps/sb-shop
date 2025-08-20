import styled from "styled-components";
import PageNavigationList from "./PageNavigationList";
import HomeBoxes from "./Boxes/HomeBoxes";
import MainNav from "@/shared/navbar/MainNav";
import UserProfileIntro from "@/shared/UserProfileIntro/UserProfileIntro";
// import Breadcrumbs from "@/shared/Breadcrumbs";





const StyledHome = styled.section`
/* Rectangle 30 */

// position: absolute;
// width: 1920px;
// height: 1273px;
left: 0px;
top: 0px;


// background: radial-gradient(93.04% 100% at 100% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%), radial-gradient(93.04% 100% at 0% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%);


`

const Home = () => {
  return (
    <>
    
    <StyledHome>
      
      <MainNav/>
      <PageNavigationList/>
      <UserProfileIntro/>
      <HomeBoxes/>
     
    </StyledHome>
    

    </>
    
  )
}

export default Home
