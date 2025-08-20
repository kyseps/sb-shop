import styled from "styled-components"


const StyledAdsButton = styled.button`

margin :auto;

width: 196.74px;
//height: 40px;
padding: 10px 40px 10px 40px;

/* shadow-btn-dark */
filter: drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.25));

background: #000001;
border-radius: 60px;
// transform: rotate(90deg);


/* مشاهده و خرید */

// position: absolute;
left: 0%;
right: 0%;
top: 20%;
bottom: 42.3%;

font-family: semibold;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
text-align: center;

color: #EDEBE8;

// transition: all 10s;

&:hover {

    background: #E9F5FC;
    border-radius: 60px;
    color: #000001;
  }

  transition: 0.5s;

`


function AdsButton(


) {
  return (
    <>
    <StyledAdsButton>
    مشاهده و خرید
    </StyledAdsButton>
        

    </>
    
  )
}

export default AdsButton