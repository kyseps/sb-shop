import styled from "styled-components"

const MainBox = styled.a`

/* Rectangle 19 */

box-sizing: border-box;

position: relative;


display: flex;
flex-direction: column;
align-items: center;

width: 267px;
height: 351px;



/* item-list-bg */
background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 30px;


/* border */

border : double 2px transparent;
background-image: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;



&:hover{            
  margin-top : -12px;
  transition: all 0.3s;
  // position: relative;
 
 }
 
 &:hover::after {
   content : "";
   display : block;
   background: #3E70FF;
  //  opacity : 0.7;
   filter: blur(25px);
   border-radius: 100px;
   width : 142px;
   height : 106px;
 
   /* second way */
 
    // position: absolute;
    // top: 68.17%;

    // content : "";
    // display : block;
    // background: #3E70FF;
    // filter: blur(25px);
    // border-radius: 100px;
    // width : 142px;
    // height : 106px;
 
 }
 


`

const Name = styled.h1`

font-family: 'Peyda';
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 42px;
/* identical to box height */
// display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'salt' on;

color: #E9F5FC;


`


const Description = styled.p`


/* info-text */
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
/* or 142% */
// display: flex;
align-items: flex-end;
text-align: center;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.7);



`


function ProductsItem({DataObject} : {DataObject : any}) {
  return (
    <li>
  <MainBox href="#">
      <div className="mt-8">{DataObject.icon}</div>

    <div>
      <Name>{DataObject.name}</Name>
      
      <Description>{DataObject.description}</Description>
      </div>
    </MainBox>
    </li>
  
  )
}

export default ProductsItem