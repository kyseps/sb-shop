import ShoppingBagIcon from "@/shared/icons/ShoppingBagIcon"
// import steamTinyPic from "./steamWithBackGround.png"
import styled, { css } from "styled-components"
import CheckMarkDoingIcon from "@/shared/icons/CheckMarkDoingIcon"
import CheckMarkDoneIcon from "@/shared/icons/CheckMarkDoneIcon"
import CanceledMarkIcon from "@/shared/icons/CanceledMarkIcon"

const MainContainer = styled.div`
display : flex;
flex-direction : column;
gap : 2px;
`


const StyledRecentOedersBox = styled.div`
/* item-list-bg */
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
align-items : center;
width : 100%;
margin : auto;
padding : 20px;

`
const TableRow = styled.div`
display : flex;
flex-direction : row;
justify-content : space-between;
flex-wrap: wrap;

gap : 35px;
width : 95%;
margin : auto;
padding-top : 20px;
`



const LeftSideContainer = styled.div`
flex-basis : 55%;

display : flex;
flex-direction : column;
flex-wrap : wrap;
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

// margin-bottom : 10px;
// padding : 10px;

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
    // margin-bottom : 6px;

    // border-right : 1px solid yellow;
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
    // margin-bottom : 6px;

    // border-right : 1px solid yellow;
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
// align-items: center;
// text-align: right;

color: #FFFFFF;


/*  FADED TEXT */
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
  // align-items: center;
  // text-align: right;
  
  color: rgba(255, 255, 255, 0.6);

  `
}

`


const Line = styled.div`
/* Line 1 */
height : 103px;
// height : auto;
width :0;

margin-right : 8px;
// margin-top : 50px;
// margin-right : -40px;

border-right: 2px solid rgba(87, 87, 87, 0.22);



}
`
// const Image = styled.div`

// width: 52px;
// height: 36px;


// border-radius: 5px;

// & img{
//   border-radius: 5px;
//   width : 100%;
//   height : 100%;
// }
// `


const AllOrdersBox = () => {

  return (
    <MainContainer>

         {/* HEADER */}
         <div className="flex justify-between">
        <Heading as="h1">
            <ShoppingBagIcon/>  
            سفارش های اخیر
        </Heading>
         </div>



              {/* BOX */}
    <StyledRecentOedersBox>
      <ContentContainer>
        


        {
          Data.map((el) => {
            return(
              <TableRow>
              <RightSideContainer>
                  <Heading as="h2">
                    {el.status === "Paid" && <CheckMarkDoneIcon/>}
                    {el.status === "Pending" && <CheckMarkDoingIcon/>}
                    {el.status === "Faild" && <CanceledMarkIcon/>}
                  <span>
                  {el.status === "Paid" && <>انجام شده</>}
                  {el.status === "Pending" && <>در حال انجام</>}
                  {el.status === "Faild" && <>لغو شده</>}
                    </span>
                  </Heading>
    
    
                  <div className="flex gap-2">
                  <Line></Line>
                  <div className="flex justify-center mt-3">    
                  {/* <Image>
                    <img src={steamTinyPic} alt="steamTinyPic"/>
                  </Image>      */}
                  <P className="mt-2 mr-2">{el.product_name}</P>
                  </div>
                  </div>    
              </RightSideContainer>
    
    
              <LeftSideContainer>
                <div className="flex justify-between gap-10 flex-wrap">
                <P as="span">{el.created_at}</P>
                <P><P as="span">کد سفارش: </P>{el.transaction_refid === null ? "-" : el.transaction_refid}</P>
                <P><P as="span">مبلغ: </P>{el.price} تومان</P>
                </div>
    
                {/* <div dir="ltr" className="flex gap-5">
                    <P dir="rtl" as="span">10 دلاری</P>
                    <P as="span">دلار آمریکا</P>
                </div>    */}
              </LeftSideContainer>
            </TableRow>
            )
          })
        }



      </ContentContainer>
    </StyledRecentOedersBox>


    </MainContainer>
  )
}

export default AllOrdersBox





const Data =[
  {
    status : "Paid",
    transaction_refid: 13213130132,
    price : 65000 ,
    created_at: "10/01/2024",
    product_name: "گیفت کارت استیم - 5 دلار - آمریکا",

  },
  {
    status : "Pending",
    transaction_refid: null,
    price : 120000,
    created_at: null,
    product_name: "گیفت کارت اریجین - Item2 - Region2",


  },
  {
    status : "Faild",
    transaction_refid: null,
    price : 85000,
    created_at: null,
    product_name : "گیفت کارت اریجین - Item1 - Region1",

  },
]