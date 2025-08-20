import styled, { css } from 'styled-components'




const StyledPaymentBox = styled.div`
width: 308px;

/* item-list-bg */
border-radius: 30px;


/* border */

border : double 2px transparent;
background-image:linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;

`


const ContentContainer = styled.div`

padding : 2rem 1.3rem;

display : flex;
flex-direction : column;
gap : 20px;

`

const ProductPrice = styled.p`
display : flex;
justify-content : space-between;

font-family: 'Peyda';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 32px;
/* identical to box height, or 227% */
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on;

color: rgba(255, 255, 255, 0.6);


`

const PurchaseProfit = styled.span`
display : flex;
justify-content : space-between;

${(props) => 
  props.about === "title" &&
  css`

    font-family: 'Peyda';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    /* identical to box height, or 227% */
    display: flex;
    align-items: center;
    text-align: right;
    font-feature-settings: 'salt' on;

    color: #FFC744;


  `
}


${(props) => 
  props.about === "number" &&
  css`
    font-family: 'Peyda';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    /* identical to box height, or 227% */
    display: flex;
    align-items: center;
    font-feature-settings: 'salt' on;

    color: #FFC744;

  `
}



`
const PaymentPrice = styled.div`
display : flex;
justify-content : space-between;

${(props) => 
  props.about === "title" &&
  css`

  font-family: 'Peyda';
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 32px;
  /* identical to box height, or 227% */
  display: flex;
  align-items: center;
  text-align: right;
  font-feature-settings: 'salt' on;

  color: #E9F5FC;
  `
}


${(props) => 
  props.about === "number" &&
  css`
  font-family: 'Peyda';
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 32px;
  /* identical to box height, or 145% */
  display: flex;
  align-items: center;
  font-feature-settings: 'salt' on;

  color: #88B7F9;


  `
}

${(props) => 
  props.about === "currency" &&
  css`

    font-family: 'Peyda';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    /* identical to box height, or 227% */
    display: flex;
    align-items: center;
    font-feature-settings: 'salt' on;

    color: #88B7F9;
  `
}
`

const PaymentButton = styled.button`
padding: 8px 21px;


background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;


color: #000001;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


`

const StyledDiscountCode = styled.div`
display : flex;
justify-content : space-between;

`

const DiscountBox = styled.input`
flex-basis : 65%;

width: 188px;
height: 41px;

background: rgba(70, 87, 87, 0.22);
border-radius: 10px;


/* border */

border : double 2px transparent;
background-image:linear-gradient(0deg, rgba(87, 87, 87, 0.22) 0%, rgba(87, 87, 87, 0.22) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;

font-family: 'Peyda';
font-weight: 400;
font-size: 16px;

color: rgba(255, 255, 255, 0.6);

text-indent: 10px;

&:focus
{
  outline: none;
}
`

const ApplyDiscountButton = styled.button`
flex-basis : 30%;

width: 101px;
height: 41px;

background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;


color: #000001;




`

function PaymentBox() {
  return (
    <div className='flex flex-col gap-5'>
    <StyledPaymentBox>
      <ContentContainer>

        <ProductPrice>
          <span>قیمت محصولات</span>
          <span>۴,۲۳۶,۵۰۰ </span>
        </ProductPrice>

        <PurchaseProfit>
          <PurchaseProfit about='title'>سود شما از این خرید</PurchaseProfit>
          <PurchaseProfit about='number'>(۲۴%) ۱,۵۹۵,۰۰۰ </PurchaseProfit>
        </PurchaseProfit>

        <PaymentPrice>
          <PaymentPrice about='title'>مبلغ قابل پرداخت</PaymentPrice>
          <span className='flex'>
          <PaymentPrice about='number'>2.000.000</PaymentPrice>
          <PaymentPrice about='currency'>تومان</PaymentPrice>
          </span>
        </PaymentPrice>

        <PaymentButton>تایید و پرداخت</PaymentButton>

      </ContentContainer>
      </StyledPaymentBox>

      <StyledDiscountCode>
        <DiscountBox type='text' placeholder='کد تخفیف'/>
        <ApplyDiscountButton>اعمال</ApplyDiscountButton>

      </StyledDiscountCode>
    </div>
  )
}

export default PaymentBox