import styled from "styled-components"



const StyledTopSellsBox = styled.div`

/* box-1 */
background: radial-gradient(93.04% 100% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%);
border-radius: 50px;




position: absolute;
width: 80%;
height: 400px;

margin : auto;


/* border */

border : double 2px transparent;
background-image: radial-gradient(93.04% 100% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;


`


const H2 = styled.h2`
;

/* hero */
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 56px;
line-height: 63px;
/* identical to box height, or 99% */
text-align: right;
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

color: #E9F5FC;


`

const P = styled.p`

/* parag */
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;
/* or 159% */
//display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.7);

`





function TopSellsBox() {
  return (
    <StyledTopSellsBox>
      <div className=" flex flex-col gap-3 mr-14 mt-10" dir="rtl">
      <H2>
        پرفروش ترین های این هفته
        </H2>

        <P>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
         چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
        </P>
      </div>
    {/* <ItemCardsBox/> */}
    </StyledTopSellsBox>
  )
}

export default TopSellsBox