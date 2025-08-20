import styled from "styled-components"
import Home from "./home/Home"
import Benefits from "@/shared/benefits/Benefits";
import Footer from "@/shared/footer/Footer";


const StyledDashboardPage = styled.div`

//position: relative;
width: 100%;
height: full;

/* it would work when you zoome out the page */


// background: #000001;
`


function DashboardPage() {



  return (
    <StyledDashboardPage>
      <Home/>
      <Benefits/>
      <Footer/>
    </StyledDashboardPage>
  )
}

export default DashboardPage