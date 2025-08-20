import styled from "styled-components"



const StyledTopSellsButton = styled.button`



background: #000;
position: relative;
z-index: 1;



position: relative;


width: 165px;
height: 50px;
border-radius: 50px;



/* دکمه */

/* 22-bold */
font-family: 'Peyda';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;
/* identical to box height */
// display: flex;
// align-items: flex-center;
text-align: center;

color: #EDEBE8;



&:before{
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width :100%;
  height : 100%;

   z-index: -1;

  border-radius: 50px;
  
//  transition: opacity 0.5s linear;
  opacity: 1;
}

&:hover:before {
  opacity: 0;

  //  background: radial-gradient(70.19% 100% at 50% 0%, #88B7F9 0%, #466BCD 63%, #2650C4 80%, #0534BA 100%);

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

const TopSellsButtonBorder = styled.div`

 margin-bottom: 15px;
 margin-right : auto;
 margin-left : auto;
 margin-top : 200px;


 background : linear-gradient(177.03deg, #88B7F9 0%, #0534BA 50%, #88B7F9 100%);


/* btn-color */

box-sizing: border-box;

/* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
padding: 2px;
// gap: 10px;

//  position: absolute;
// width: 165px;
// height: 50px;
// left: auto;
// bottom : auto;
top: auto;

001;
/* btn-shadow-color */
box-shadow: 0px 0px 54px rgba(0, 66, 255, 0.6), 0px 0px 44px rgba(45, 86, 201, 0.7), 0px 0px 120px rgba(5, 52, 186, 0.2);
border-radius: 50px;




`


function TopSellsButton() {
  return (
    <TopSellsButtonBorder>
    <StyledTopSellsButton>
       
  
  مشاهده همه
 </StyledTopSellsButton>
  </TopSellsButtonBorder>
  

  )
}

export default TopSellsButton