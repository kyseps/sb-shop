import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const HomeButtonBorder = styled.div`
// margin-bottom: 15px;
// margin-right : auto;
// margin-left : auto;
 margin-top : 38px;


 background : linear-gradient(177.03deg, #88B7F9 0%, #0534BA 50%, #88B7F9 100%);

/* btn-color */

box-sizing: border-box;


padding: 3px;


/* btn-shadow-color */
box-shadow: 0px 0px 54px rgba(0, 66, 255, 0.6), 0px 0px 44px rgba(45, 86, 201, 0.7), 0px 0px 120px rgba(5, 52, 186, 0.2);
border-radius: 50px;


`

const StyledHomeButton = styled.button`
/* btn-color */

box-sizing: border-box;


width: 266px;
height: 57px;

padding: 16px 30px 13px;
color : white;


background: #000001;
/* btn-shadow-color */
box-shadow: 0px 0px 54px rgba(0, 66, 255, 0.6), 0px 0px 44px rgba(45, 86, 201, 0.7), 0px 0px 120px rgba(5, 52, 186, 0.2);
border-radius: 50px;

// ************************************************************************

position: relative;
z-index: 1;


/* text */


/* 22-bold */
font-family: 'Peyda';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;
/* identical to box height */
// display: flex;
align-items: flex-end;
text-align: center;

color: #EDEBE8;

&:before{
  // position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width :100%;
  height : 100%;

   z-index: -1;

  border-radius: 50px;
  
 transition: opacity 0.5s linear;
  opacity: 1;
}

&:hover:before {
  opacity: 0;
}

&:after{
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width :100%;
  height : 100%;
  background-image: radial-gradient(70.19% 100% at 50% 0%, #88B7F9 0%, #466BCD 63%, #2650C4 80%, #0534BA 100%);
   z-index: -1;

  border-radius: 50px;
  
 transition: opacity 0.5s linear;
  opacity: 0;
}

&:hover:after{
  opacity: 1;
}
`

function HomeButton() {
  return (
    <HomeButtonBorder>

    <StyledHomeButton>
      <NavLink to="/product-list">   
             رفتن به لیست محصولات        
    </NavLink>
        </StyledHomeButton>
    </HomeButtonBorder>
  )
}

export default HomeButton