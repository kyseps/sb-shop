import styled from "styled-components"
import Home from "./home/Home"
import Benefits from "@/shared/benefits/Benefits"
import Footer from "@/shared/footer/Footer"

const StyledSearchResultPage = styled.div`
position: realtive;
width: 100%;
height: full;

/* it would work when you zoome out the page */
// width:1519px; 
// margin : auto;

// background: #000001;

`

export default function SearchResultPage() {
  return (
    <StyledSearchResultPage>
        <Home/>     
        <Benefits/>
        <Footer/>
    </StyledSearchResultPage>
  )
}
