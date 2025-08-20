import styled from "styled-components"
import TopSellsButton from "./TopSellsButton"
import TopSellFinal from "@/TopSellFinal"

const StyledTopSells = styled.section`



position: relative;
margin : auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom : 300px;
margin-top : 200px;

`

const TopSells = () => {
  return (
    <>
     <StyledTopSells>
      <TopSellFinal/>
    {/* <TopSellsBox/> */}
   {/* <ItemCardsbox/> */}
    <TopSellsButton/>
    </StyledTopSells>
    </>
   
  )
}

export default TopSells