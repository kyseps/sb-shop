import ShoppingBagIcon from "@/shared/icons/ShoppingBagIcon"
import styled, { css } from "styled-components"
import CheckMarkDoingIcon from "@/shared/icons/CheckMarkDoingIcon"
import CheckMarkDoneIcon from "@/shared/icons/CheckMarkDoneIcon"
import CanceledMarkIcon from "@/shared/icons/CanceledMarkIcon"
import { useEffect, useState } from "react"
import { fetchOrders } from "@/orders-page/fetchOrders"
import SpinnerMini from "@/shared/ui/SpinnerMini"


const StyledRecentOedersBox = styled.div`

background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 30px;

/* border */

border : double 2px transparent;
background-image:  linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;


`
const ContentContainer = styled.div`
display : flex;
flex-direction : column;
margin : auto;
padding : 20px;

align-items: center;
`
const TableRow = styled.div`
display : flex;
flex-direction : row;
justify-content : space-between;
flex-wrap: wrap;

width : 95%;
margin : auto;

padding-top : 15px;

`


const Line = styled.div`
/* Line 1 */
height : 103px;
width :0;

margin-right : 8px;

border-right: 2px solid rgba(87, 87, 87, 0.22);
}
`

const LeftSideContainer = styled.div`
flex-basis : 55%;

display : flex;
flex-direction : column;
// justify-content: center;
// align-items:center;
// flex-wrap : wrap;
gap : 45px;


`
const RightSideContainer = styled.div`


flex-basis : 40%;

display : flex;
flex-direction : column;
gap : 10px;


`
const Heading = styled.div`

display: flex;
align-items: center;
gap: 0.8rem;
text-align: right;

color: #FFFFFF;




${(props) => 
  props.as === "h1" &&
  css`
  
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 29px;


& svg {
  width: 26px;
  height: 25.93px;
  stroke: #FFC744;
  // fill : black;
  stroke-opacity : 1;
}
  `
}

${(props) => 
  props.as === "h2" &&
  css`
  
    font-family: bold;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

  `
}


`

const P = styled.p`

font-family: 'Peyda';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height */
display: flex;
gap : 3px;
flex-wrap: wrap;

color: #FFFFFF;


${(props) => 
  props.as === "span" &&
  css`
  
  font-family: 'Peyda';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */
  display: flex;
  color: rgba(255, 255, 255, 0.6);

  `
}

`


const AllOrdersBox = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const getOrders = async () => {
          try {
              const ordersData = await fetchOrders();
              setOrders(ordersData);
          } catch (err : any) {
            console.log(err)
          } finally {
              setLoading(false);
          }
      };

      getOrders();
  }, []);
  console.log(orders)

  return (
    <>
    {
      orders.length > 0 ?
      (
        <div>

        {/* HEADER */}
        <div className="flex justify-between mb-2">
       <Heading as="h1">
           <ShoppingBagIcon/>  
           سفارش های اخیر
       </Heading>
        </div>



             {/* BOX */}
   <StyledRecentOedersBox>
     <ContentContainer>
       
     {loading && <SpinnerMini/>}


       {
         orders?.map((el : any) => {
           return(
             <TableRow>


             <RightSideContainer>

                 <Heading as="h2">
                   {el.status === "Paid" && <CheckMarkDoneIcon/>}
                   {el.status === "Pending" && <CheckMarkDoingIcon/>}
                   {el.status === "Failed" && <CanceledMarkIcon/>}
                   <span>
                   {el.status === "Paid" && "انجام شده"}
                   {el.status === "Pending" && "در حال انجام"}
                   {el.status === "Failed" && "لغو شده"}
                   </span>
                 </Heading>
   
   
                 <div className="flex gap-2">
                 <Line></Line>
                 <P className="mt-5 mr-2">{el.product_name}</P>
                 </div>    
             </RightSideContainer>
   
   
             <LeftSideContainer>
               <div className="flex justify-between gap-10 flex-wrap">
               <P as="span">{el.created_at === null ? "-" : el.created_at}</P>
               <P><P as="span">کد سفارش: </P>{el.transaction_refid === null ? "-" : el.transaction_refid}</P>
               <P><P as="span">مبلغ: </P>{el.price} تومان</P>
               </div>
   
             </LeftSideContainer>
           </TableRow>
           )
         })
       }

     </ContentContainer>
   </StyledRecentOedersBox>
   </div>
      )
      :
      (
        <div>

        {/* HEADER */}
        <div className="flex justify-between mb-2">
       <Heading as="h1">
           <ShoppingBagIcon/>  
           سفارش های اخیر
       </Heading>
        </div>



             {/* BOX */}
   <StyledRecentOedersBox>
     <ContentContainer>
       

     <Heading as="h1">
           سفارشی وجود ندارد! 
       </Heading>

     </ContentContainer>
   </StyledRecentOedersBox>
   </div>
      )
    }
    </>

  )
}

export default AllOrdersBox

