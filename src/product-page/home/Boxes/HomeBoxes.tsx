import styled from "styled-components"
import SteamWalletGiftCard from "./SteamWalletGiftCard"
import Description from "./Description"
import RegionAccount from "./RegionAccount"
import FAQ from "../../FAQ/FAQ"
import Comments from "../../comments/Comments"
// import RelatedProduct from "../../related product/RelatedProduct"

const MainContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`

const LeftSidebar = styled.div`
  flex: 0 0 470px;
  
  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
  }
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0; // Prevents flex item from overflowing
`

const ProductCard = styled.div`
  background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
  border-radius: 20px;
  border: double 2px transparent;
  background-image: 
    linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%),
    linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
`

function HomeBoxes({Data} : any) {
  return (
    <MainContainer dir="rtl">
      <MainContent>
        <ProductCard>
          <SteamWalletGiftCard Data={Data}/>
        </ProductCard>
        <Description Data={Data} />
        <FAQ />
        <Comments />
      </MainContent>

      <LeftSidebar>
        <RegionAccount />
      </LeftSidebar>
    </MainContainer>
  )
}

export default HomeBoxes