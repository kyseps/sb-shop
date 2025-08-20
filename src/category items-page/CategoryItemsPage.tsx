import styled from "styled-components"
import Home from "./home/Home"
import Benefits from "@/shared/benefits/Benefits"
import Footer from "@/shared/footer/Footer"
import Benefits1 from "./Benefits1"
import TrendingGames from "./TrendingGames"
import OrderGuide from "./OrderGuide"

const StyledAccDetailPage = styled.div`
//position: relative;
width: 100%;
height: full;

/* it would work when you zoome out the page */
// width:1519px; 
// margin : auto;

// background: #000001;

`
function CategoryItemsPage() {
  return (
    <StyledAccDetailPage>
    <Home/>
    <Benefits1/>
    <TrendingGames/>
    <OrderGuide/>
    <Benefits/>
    <Footer/>
</StyledAccDetailPage>
  )
}

export default CategoryItemsPage