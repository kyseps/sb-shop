import styled from "styled-components"
import Home from "./home/Home"
import Benefits from "@/shared/benefits/Benefits"
import Footer from "@/shared/footer/Footer"

const StyledAccDetailPage = styled.div`
//position: relative;
width: 100%;
height: full;

/* it would work when you zoome out the page */
// width:1519px; 
// margin : auto;

// background: #000001;
`

function AccDetailPage() {
  return (
    <StyledAccDetailPage>
        <Home/>
        <Benefits/>
        <Footer/>
    </StyledAccDetailPage>
  )
}

export default AccDetailPage