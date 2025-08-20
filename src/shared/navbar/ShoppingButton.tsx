import styled, { css } from "styled-components"
import ShoppingCartIconWhite from "@/shared/icons/ShoppingCartIconWhite"
import { Link } from "react-router-dom"
import ShoppingCartIconBlack from "../icons/ShoppingCartIconBlack"


const StyledShoppingButton  = styled(Link)`

${(props) => 
  props.about==="dark" && css`
    color: #eef2ff;
    background: #000001;
  `
}


${(props) => 
  props.about==="light" && css`
    color: #000001;
    background: #eef2ff ;
  `
}
border: none;
border-radius: 50px; //get color from GlobalStyles
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

/* shadow-btn */
box-shadow: 0px 5px 30px #8DA1BD;
border-radius: 50px;

display : flex;
gap : 10px;
align-items : center;
justify-content : center;

&:hover {
  background-color: #0534BA;
}


font-family: bold;
font-style: normal;
font-weight: 700;
font-size: 22px;
// line-height: 28px;





width: 174px;
height: 50px;


transition : 0.5s;


`


function ShoppingButton({isMainPage} : any) {
  return (
    <StyledShoppingButton about={isMainPage? "dark" : "light"} to="/cart">
        <p>سبد خرید</p>
        {isMainPage? <ShoppingCartIconWhite/>  : <ShoppingCartIconBlack/>}
       
              
    </StyledShoppingButton>
  )
}

export default ShoppingButton