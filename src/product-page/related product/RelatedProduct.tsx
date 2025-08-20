// import React from 'react'
import styled from 'styled-components'
import GiftIconSmall from '@/shared/icons/GiftIconSmall'

const RelatedProductsSection = styled.section`
  direction: rtl;
  margin-top: 20px;
  margin-bottom: 50px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`

const Container = styled.div`
  background: linear-gradient(135deg, #2A2D3A 0%, #1C1E26 100%);
  border-radius: 24px;
  padding: 32px 24px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border-radius: 24px;
    pointer-events: none;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  direction: rtl;
`

const HeaderTitle = styled.h2`
  font-family: black;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 0;
  display: flex;
  align-items: center;
  font-feature-settings: 'salt' on;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
`

const ProductImage = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 120px;
  background: ${props => props.bgColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
`

const ProductLogo = styled.div<{ logoType: string }>`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  
  ${props => props.logoType === 'ea' && `
    background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
    border-radius: 8px;
    font-size: 18px;
  `}
  
  ${props => props.logoType === 'fortnite' && `
    background: linear-gradient(135deg, #9146FF 0%, #772CE8 100%);
    border-radius: 8px;
    font-size: 16px;
    font-weight: 900;
  `}
  
  ${props => props.logoType === 'nintendo' && `
    background: linear-gradient(135deg, #E60012 0%, #FFBD00 100%);
    border-radius: 8px;
    font-size: 16px;
  `}
  
  ${props => props.logoType === 'playstation' && `
    background: linear-gradient(135deg, #003087 0%, #0066CC 100%);
    border-radius: 8px;
    font-size: 14px;
  `}
`

const ProductInfo = styled.div`
  text-align: center;
  direction: rtl;
`

const ProductTitle = styled.h3`
  font-family: semibold;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0 0 4px 0;
  line-height: 1.3;
`

const ProductSubtitle = styled.p`
  font-family: peyda;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.2;
`

function RelatedProduct() {
  const products = [
    {
      id: 1,
      title: "گیفت کارت پلی استیشن",
      subtitle: "Play Station Gift Card",
      bgColor: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
      logoType: "ea",
      logoText: "EA Play"
    },
    {
      id: 2,
      title: "گیفت کارت پلی استیشن",
      subtitle: "Play Station Gift Card", 
      bgColor: "linear-gradient(135deg, #9146FF 0%, #772CE8 100%)",
      logoType: "fortnite",
      logoText: "FORTNITE"
    },
    {
      id: 3,
      title: "گیفت کارت پلی استیشن",
      subtitle: "Play Station Gift Card",
      bgColor: "linear-gradient(135deg, #E60012 0%, #FFBD00 100%)",
      logoType: "nintendo",
      logoText: "Nintendo"
    },
    {
      id: 4,
      title: "گیفت کارت پلی استیشن", 
      subtitle: "Play Station Gift Card",
      bgColor: "linear-gradient(135deg, #003087 0%, #0066CC 100%)",
      logoType: "playstation",
      logoText: "PlayStation"
    }
  ]

  return (
    <RelatedProductsSection>
      <Container>
        <Header>
          <GiftIconSmall />
          <HeaderTitle>محصولات مرتبط</HeaderTitle>
        </Header>
        
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage bgColor={product.bgColor}>
                <ProductLogo logoType={product.logoType}>
                  {product.logoText}
                </ProductLogo>
              </ProductImage>
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductSubtitle>{product.subtitle}</ProductSubtitle>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </RelatedProductsSection>
  )
}

export default RelatedProduct