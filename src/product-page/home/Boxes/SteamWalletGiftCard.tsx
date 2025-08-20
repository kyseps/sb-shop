import styled , {css}from "styled-components"
import AirplaneIconYellow from "@/shared/icons/AirplaneIconYellow"
import CreditCardIconYellow from "@/shared/icons/CreditCardIconYellow"
import EmptyStarIcon from "@/shared/icons/EmptyStarIcon"
import FilledStarIcon from "@/shared/icons/FilledStarIconYellow"

const StyledContainerBox = styled.div`
/* Rectangle 19 */

box-sizing: border-box;

// width: 100%;
width : 792px;
height: 208px;

/* item-list-bg */
background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 30px;

display : flex;
flex-direction : row;
align-items : center;
justify-content : center;
gap : 50px;


/* border */

border : double 2px transparent;
background-image:  linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;




`

const Image = styled.img`

width: 245px;
height: 153px;

border-radius: 7px;

`

const Heading = styled.h1`

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 63px;
/* identical to box height, or 198% */
display: flex;
align-items: center;
text-align: right;
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

color: #FFFFFF;


`



const Text = styled.p`

font-style: normal;

font-size: 16px;
line-height: 23px;
line-height: 22.8px;

font-feature-settings: 'salt' on, 'ss01' on;

& svg, 
{
  // color: #9ca3af;
  // stroke: #011111;
  // transition: all 0.3s;
}

${(props) => 
  props.about === "DescriptionText" && 
  css`
  
  font-family: peyda;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  margin-top : -10px;
  `}


  ${(props) => 
    props.about === "BnefitsText" && 
    css`
    font-family: semibold;
    color: #FFFFFF;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-align: right;
    gap : 12px;
    `}



`

const FiveStarsContainer = styled.div`
margin-top : 110px;
display : flex;
gap : 4px;



& svg, 
{
  color:rgba(255, 199, 68, 1);

  // stroke: #011111;
  // transition: all 0.3s;
}
`

const DescriptionContainer =  styled.div`
// width : 300px;

`


function SteamWalletGiftCard({Data} : any) {

  const Rating = Data.rating;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FilledStarIcon key={i} />);
      } else {
        stars.push(<EmptyStarIcon key={i} />);
      }
    }
    return stars;
  };

  console.log(Data)

  const gf = Data.items
  console.log(gf)
  return (
    

    <StyledContainerBox dir="rtl">
      <div>   
     
      {Data.image && (
            <Image src={`https://sbshop.ir${Data.image.image}`} alt="Product Image" />
            )}

      </div>

 


      <DescriptionContainer >
        <Heading>{Data.title}</Heading>

        <Text about="DescriptionText" >{Data.title_en}</Text>

        {/* <p>{Data.items}</p> */}

        <div className="flex items-center gap-8 mt-6">
        <Text about="BnefitsText">
          <span><AirplaneIconYellow/></span>  
          <span>تحویل فوری</span>
        </Text>

        <Text about="BnefitsText">
          <span><CreditCardIconYellow/></span>  
          <span>پرداخت امن</span>
        </Text>
        </div>

      </DescriptionContainer>



      <div className='flex ml-2 text-red-500 '>    
        <FiveStarsContainer dir='ltr'>
      {renderStars(Rating)}
        </FiveStarsContainer>
      </div>

    </StyledContainerBox>
  
  )
}

export default SteamWalletGiftCard