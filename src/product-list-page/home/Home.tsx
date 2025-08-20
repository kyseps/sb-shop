import styled from "styled-components";
import PageNavigationList from "./PageNavigationList";
import SideBar from "./SideBar/SideBar";
import MainLayout from "./MainLayout/MainLayout";
import MainNav from "@/shared/navbar/MainNav";



const StyledHome = styled.section`
// position : relative;

// background: radial-gradient(93.04% 100% at 100% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%), radial-gradient(93.04% 100% at 0% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%);

`

const Container = styled.div`
width : 83%;
margin : auto;
margin-top : 20px;
margin-bottom : 80px;

display : flex;
gap : 5px;
flex-wrap : wrap;

`


const Home = () => {
  return (
    <>
    
    <StyledHome>
      <MainNav/>
      <PageNavigationList/>


      <Container dir="rtl">
        <SideBar/>
        <MainLayout/>
      </Container>
      


    </StyledHome>
    

    </>
    
  )
}

export default Home
