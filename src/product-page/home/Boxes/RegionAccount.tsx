import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled, { css } from "styled-components"

const StyledRegionAccount = styled.div`

box-sizing: border-box;

width : 470px;


/* item-list-bg */
// background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 30px;



/* border */

border : double 2px transparent;
background-image:  linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;

// display : flex;


`

const ContentContainer = styled.div`
width : 77%;
margin : auto;

// border : 1px solid red;
display: flex;
flex-direction : column;

gap : 20px;

padding-top : 1.5rem;
padding-bottom : 1.5rem;

`
const Heading = styled.h1`

// width : 140px;

/* card-title */
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 32px;
/* identical to box height, or 177% */
display: flex;
align-items: center;
text-align: right;
flex-wrap: nowrap;
font-feature-settings: 'salt' on;

color: #E9F5FC;


`

const Box = styled.button`

border-radius: 10px;

/* Text */
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;

color: #FFFFFF;

cursor : pointer;


${(props) => 
  props.about === "ActiveBox" && 
  css`
  
  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  
  
  border : double 2px transparent;
  background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(87, 87, 87, 0.22) 100%), //origin background
  linear-gradient(180deg, rgba(233, 200, 220, 0.168) 0%, rgba(87, 87, 87, 0.1) 100%);//border
  background-origin: border-box;
  background-clip: content-box, border-box;

  `}


  ${(props) => 
    props.about === "InActiveBox" && 
    css`
    width: 100px;
    height :  30px;

    border : double 2px transparent;
    background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 5, 0.21) 100%), //origin background
    linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
    background-origin: border-box;
    background-clip: content-box, border-box;

    `}

`


const Span = styled.span`

  display: flex;
  gap:3px;
  align-items: center;

${(props) => 
  props.about === "price" && 
  css`
  
  font-family: 'Peyda';
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 32px;
  /* identical to box height, or 145% */
  display: flex;
  align-items: center;
  gap:10px;
  font-feature-settings: 'salt' on;
  
  color: #88B7F9;
  
  
  }

  `}

  ${(props) => 
    props.about === "discount" && 
    css`
    
    
    font-family: peyda;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 177% */
    display: flex;
    align-items: center;
    text-decoration-line: line-through;
    font-feature-settings: 'salt' on;
    
    color: rgba(233, 245, 252, 0.4);   
    gap:10px;

    
    }
    `}


    
    ${(props) => 
      props.about === "text" && 
      css`
      
      font-family: 'Peyda';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 31.8px;
      /* identical to box height, or 145% */
      display: flex;
       gap:10px;

      // align-items: center;
      // font-feature-settings: 'salt' on;

      
      color: #88B7F9;
      
      
      }
    
      `}  
`

const Button = styled.button`
/* Frame 65 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 21px;
gap: 10px;

width : 100%;
margin : auto;


background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;


/* افزودن به سبد خرید */


font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;
display: flex;
align-items: flex-end;
text-align: center;

color: #000001;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


`



function RegionAccount() {
  const params = useParams();
  const id = params.id;

  const [Data , setData] = useState<any>(JSON);

  
  const [count , setcount] = useState(1);
  const [selectedAmount , setSelectedAmount] = useState<any>(0);
  const [selectedRegion , setSelectedRegion] = useState("");



  async function getData(){
    try{
      const res = await fetch(`https://sbshop.ir/products/${id}`);
      const data = await res.json();
      setData(data);
      // filterRegion3Items(data.items);
    }
    catch (error){
        // alert(error)
        // console.log(error)
    }
    finally{

    }
  }

  useEffect(() => {
    getData();
  }, [id]);




if (!Data) {
  return <div>Loading...</div>;
}


 // Set the default selected region to the first item's region
useEffect(() => {
  if (Data?.items?.length > 0) {
     
      setSelectedRegion(Data.items[0].region.region);
  }
}, [Data]);

  function handleRegionClick (region : any) {
    setSelectedRegion(region);
    setcount(1);
    setSelectedAmount(0);
  }

  function handleAmountClick(amount : any){
    setSelectedAmount(amount);
    setcount(1);
    // setShowPrice(price);
    // setShowDiscount(discount);
  }

  const FormatNumber = (Number: any ) => {
    let FaNum = new Intl.NumberFormat('fa-IR').format(Number);
    return FaNum;
  }

    //handle for minus counter
    function handleMinCount() {
      // miminum value
      if (count > 1) 
     setcount((count) => count - 1 )
    }

    //handle for plus counter
    function handlePlusCount() {
      setcount((count) => count + 1 )
    }


  
      const uniqueRegions = Array.from(new Set(Data?.items?.map((item : any) => item.region.region)))
          .map(regionName => {
              return Data.items.find((item : any) => item.region.region === regionName)?.region;
          });

          // Filter items by selected region
    const regionItems = Data?.items?.filter((item : any) => item.region.region === selectedRegion);

  // Get the price of the selected item
  const selectedItemPrice = regionItems?.[selectedAmount]?.price || 0;

  // Calculate the total price based on selected item and count
  const totalPrice = selectedItemPrice * count;


  return (
    <div>

    <StyledRegionAccount>
      <ContentContainer>
  

  
      {/*  ریجن */}
    <div className="flex flex-col gap-3">
        <Heading>ریجن اکانت</Heading>
      
        <div className="flex gap-3 mt-3">

        {uniqueRegions?.map((region : any ) => (
                <Box
                    key={region.id}
                    onClick={() => handleRegionClick(region.region)} // Handle click
                    about={selectedRegion === region.region ? "ActiveBox" : "InActiveBox"}
                >
                    <p>
                         {region.region} {/* Display region details */}
                    </p>
                </Box>
            ))}


        </div>
    </div>



    {/* مقدار گیفت کارت */}
    <Heading>مقدار گیفت کارت</Heading>

    <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-3 flex-wrap">

      {

          <>
     

        {
          regionItems?.map((el : any , index : any)  => {
            return(
              <Box
              key={el.id}
              onClick={() => handleAmountClick(index)}
              about={selectedAmount === index ? "ActiveBox" : "InActiveBox"}>{el.name}</Box>
            )
         
          })
          }


          </>
      }


      </div>  
    </div>

    {/* تعداد */}

    <div className="flex justify-between mt-3">
      <Heading>تعداد</Heading>
     <div className="flex gap-4">
      <button onClick={handlePlusCount}><PlusBox/></button>
        <Heading className="w-8 justify-center">{FormatNumber(count)}</Heading>
      <button onClick={handleMinCount}><MinusBox/></button>
     </div>
    </div>

    
    <div className="flex justify-between mt-3">
      <Heading>قیمت</Heading>
     <div className="flex gap-4">
     {Data?.discount_amount === 0 ? "" : (<Span about="discount">{FormatNumber(Data.discount_amount || "")}</Span>)}
     {
       totalPrice !== 0 &&
       <Span>
                                <Span about="price">{
                                FormatNumber(totalPrice || "")}</Span>
                                <Span about="text">تومان</Span>
                            </Span>
     }
                            
                        </div>
                    </div>
      <Button>افزودن به سبد خرید</Button>

      </ContentContainer>
    </StyledRegionAccount>
    </div>

  )
}

export default RegionAccount



// *****    MINUS SVG  *************
function MinusBox() {
  return (
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="url(#paint0_linear_287_804)"/>
    <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_287_804)" stroke-opacity="0.4" stroke-width="2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 21C13 20.4477 13.4477 20 14 20H28C28.5523 20 29 20.4477 29 21C29 21.5523 28.5523 22 28 22H14C13.4477 22 13 21.5523 13 21Z" fill="white"/>
    <defs>
    <linearGradient id="paint0_linear_287_804" x1="20.516" y1="0" x2="20.516" y2="41" gradientUnits="userSpaceOnUse">
    <stop stop-opacity="0.14"/>
    <stop offset="1" stop-color="#000001" stop-opacity="0.21"/>
    </linearGradient>
    <linearGradient id="paint1_linear_287_804" x1="20.5" y1="0" x2="20.5" y2="41" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E9F5FC" stop-opacity="0.42"/>
    <stop offset="1" stop-color="#575757" stop-opacity="0.22"/>
    </linearGradient>
    </defs>
    </svg>
    
  )
}



// ****** PLUS SVG *************
function PlusBox() {
  return(
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="url(#paint0_linear_287_803)"/>
    <rect x="1" y="1" width="39" height="39" rx="9" stroke="url(#paint1_linear_287_803)" stroke-opacity="0.4" stroke-width="2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21.5523 12 22 12.4477 22 13V19H28C28.5523 19 29 19.4477 29 20C29 20.5523 28.5523 21 28 21H22V27C22 27.5523 21.5523 28 21 28C20.4477 28 20 27.5523 20 27V21H14C13.4477 21 13 20.5523 13 20C13 19.4477 13.4477 19 14 19H20V13C20 12.4477 20.4477 12 21 12Z" fill="white"/>
    <defs>
    <linearGradient id="paint0_linear_287_803" x1="20.516" y1="0" x2="20.516" y2="41" gradientUnits="userSpaceOnUse">
    <stop stop-opacity="0.14"/>
    <stop offset="1" stop-color="#000001" stop-opacity="0.21"/>
    </linearGradient>
    <linearGradient id="paint1_linear_287_803" x1="20.5" y1="0" x2="20.5" y2="41" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E9F5FC" stop-opacity="0.42"/>
    <stop offset="1" stop-color="#575757" stop-opacity="0.22"/>
    </linearGradient>
    </defs>
    </svg>
    
  )
}



// const TurkeyData =[
//   {
//     priceNumber : "10",
//     currency : "لیر",
//   },
//   {
//     priceNumber : "20",
//     currency : "لیر",
//   },
//   {
//     priceNumber : "50",
//     currency : "لیر",
//   },
// ]

// const AmericaData = [
//   {
//     priceNumber : "10",
//     currency : "دلار",
//   },
//   {
//     priceNumber : "20",
//     currency : "دلار",
//   },
//   {
//     priceNumber : "50",
//     currency : "دلار",
//   },
//   {
//     priceNumber : "100",
//     currency : "دلار",
//   },

//   {
//     priceNumber : "500",
//     currency : "دلار",
//   },

// ]