import styled from "styled-components"
import FilledStarIcon from "./shared/icons/FilledStarIconYellow";



function Test() {
    const FormatNumber = (Number: any ) => {
        let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
        return FaNum;
      }
    const sourc = "data:image/png;base64,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"
  return (
    <div className="flex items-center justify-center mt-16" dir="rtl">

    <MainBox >

      <div className='mt-3 mb-3'>
      <ImageBox src={sourc} alt='product-image'/>
      </div>  

      <Text>واقعی</Text>


        <Discount>{FormatNumber(999999999)} </Discount>
        
      <div className='flex flex-row gap-3 h-8 border'>
        <Price>{FormatNumber(999999999)} تومان</Price>

      <div className='flex ml-2 text-red-500 '>    
        <StarContainer dir='ltr'>
        <FilledStarIcon/>
      <FilledStarIcon/>
      <FilledStarIcon/>
      <FilledStarIcon/>
      <FilledStarIcon/>
        </StarContainer>
      </div>

    </div>
    </MainBox>
    </div>

  )
}

export default Test


const MainBox = styled.a`

width : 224px;
height : 286px;

background: linear-gradient(0deg, #000001 0%, #0C0C42 100%);
border-radius: 15px;

/* border */

border : double 2px transparent;
background-image: linear-gradient(0deg, #000001 0%, #0C0C42 100%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.3) 0%, rgba(136, 183, 249, 0.1) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;

display : flex;
flex-direction : column;
align-items: center;
text-align: right;

&:hover{
  box-shadow: 0px 15px 10px -15px #4f46e5;
  transform: translateY(-5px);
  transition: transform 0.3s;
}
`

const ImageBox = styled.img`
background: radial-gradient(107.79% 100% at 50% 100%, rgba(5, 52, 186, 0.2) 0%, rgba(136, 183, 249, 0.2) 100%);
border-radius: 7px;

width : 186px;
height : 152px;
`

const Text = styled.p`
font-family: 'Peyda';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 32px;
font-feature-settings: 'salt' on;

color: #E9F5FC;

`
const Discount = styled.p`
font-family: peyda;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 32px;
/* identical to box height, or 227% */
// align-items: center;
text-align: right;
text-decoration-line: line-through;

margin-left : 145px;
color: rgba(233, 245, 252, 0.4);
`

const Price = styled.p`
font-family: medium;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 32px;

color: #88B7F9;
`
const StarContainer = styled.div`
display: flex;
align-items: center;
`
