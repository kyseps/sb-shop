import styled from "styled-components"
import ProductBox from "./ProductBox"

const StyledProductsCategory = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin : auto;


width: 80%;
height: 500px;



margin-top:400px;
margin-bottom : 150px;

`

const H1 = styled.h1`

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 64px;
 line-height: 63px;

ont-feature-settings: 'salt' on, 'ss01' on;

background: linear-gradient(268.08deg, #E9F5FC 2.41%, #88B7F9 86.22%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

`

const P = styled.p`

/* parag */
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;

font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.7);


`
export default function ProductsCategory() {
  return (
    <StyledProductsCategory>

        <div className="flex flex-col items-center mt-5">
        <H1>دسته بندی محصولات</H1>
        <P>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
         از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </P>
        </div>

        <ProductBox/>
   
    </StyledProductsCategory>
  )
}
