import styled from "styled-components";
import PageNavigationList from "./pagenavigationlist/PageNavigationList";
import HomeBoxes from "./Boxes/HomeBoxes";
import MainNav from "@/shared/navbar/MainNav";




const StyledHome = styled.section`

// background: radial-gradient(93.04% 100% at 0% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 70%),
// radial-gradient(93.04% 100% at 100% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 70%);


`

const Home = ({Data} : any) => {
  return (
    <>
    
    <StyledHome>

      <MainNav/>
      <PageNavigationList Data={Data}/>
      <HomeBoxes Data={Data}/>
      
    </StyledHome></>
    
  )
}

export default Home
