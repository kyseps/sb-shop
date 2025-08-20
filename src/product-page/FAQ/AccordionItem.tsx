
// import "@/product-page/FAQ/FAQStyle.css"
import styled from "styled-components";
import PlusIcon from "@/shared/icons/PlusIcon";
import MinusIcon from "@/shared/icons/MinusIcon";

type Props = {
    num : number;
    children : any
    curOpen : number;
    onOpen : any;
    title : string;
}


const Cardscontainer = styled.div`
    display: grid;
    grid-template-columns: auto 2fr auto;
    column-gap: 24px;
    // row-gap: 32px;
    align-items: center;
    cursor: pointer;
  transition: all 0.3s;


`


const CardTitle = styled.h2`
/* card-title */
font-style: normal;
font-weight: 900;
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 32px;
/* identical to box height, or 177% */
display: flex;
gap: 10px;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on;

color: #E9F5FC;
  transition: all 0.3s;

`

const CardContent = styled.p`


font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;


color: rgba(233, 245, 252, 0.6);

grid-column: 2 / -1;
padding-top : 12px;
padding-bottom: 16px;
line-height: 24px;
  transition: all 0.3s;

`

const Icon = styled.p`
/* Icon (Stroke) */

color: #FFFFFF;
font-size: 16px;
font-weight: 500;

`

function AccordionItem({num , title , children , curOpen , onOpen}: Props) {
    const isOpen = num === curOpen;

    function handleToggle() {
      onOpen(isOpen ? null : num);
    }
  return (
   

    <Cardscontainer onClick={handleToggle}>
        <p></p>
        <CardTitle>{title}</CardTitle>
        <Icon>{isOpen ? (<MinusIcon/>) :(<PlusIcon/>)}</Icon>
          
        {isOpen && <CardContent>{children}</CardContent>}
    </Cardscontainer>

  )
}

export default AccordionItem