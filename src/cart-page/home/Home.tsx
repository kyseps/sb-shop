import styled from "styled-components";
import PageNavigationList from "./PageNavigationList";
import PaymentBox from "./PaymentBox";
import ProductBox from "./ProductBox";
import ShoppingBagIcon from "@/shared/icons/ShoppingBagIcon";
import MainNav from "@/shared/navbar/MainNav";


const StyledHome = styled.section`
position : relative;
/* Rectangle 30 */

// width: 1920px;
// height: 1273px;


// background: radial-gradient(93.04% 100% at 100% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%), radial-gradient(93.04% 100% at 0% 0%, #88B7F9 0%, #3865E4 22%, rgba(0, 0, 1, 0) 100%);

`
const Container = styled.div`
width : 80%;
margin : auto;
margin-top : 50px;
margin-bottom : 80px;

display : flex;
flex-direction : column;
gap : 25px;
// flex-wrap : wrap;
`

const Heading = styled.h1`
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 29px;

display: flex;
align-items: center;
gap: 0.8rem;

text-align: right;

color: #FFFFFF;


& svg {
  width: 26px;
  height: 25.93px;
  stroke: #FFC744;
  // fill : black;
  stroke-opacity : 1;
`
const Home = () => {
  return (
    <>
    
    <StyledHome>
        <MainNav/>
        <PageNavigationList/>

        
        
        <Container dir="rtl">

        <Heading>
            <ShoppingBagIcon/>  
            سفارش های اخیر
        </Heading>

        <div className="flex gap-1 flex-wrap">
          <ProductBox/> 
          <PaymentBox/>
        </div>

        </Container>
    
    </StyledHome>
    

    </>
    
  )
}

export default Home
