
import styled from 'styled-components';
import EmptyStarIcon from '@/shared/icons/EmptyStarIcon';
import FilledStarIcon from '@/shared/icons/FilledStarIcon';


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


/* card-title */
font-family: 'Peyda';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 32px;

font-feature-settings: 'salt' on;

color: #E9F5FC;

`

const Discount = styled.p`

/* price-disabled */
font-family: peyda;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 32px;
/* identical to box height, or 227% */
align-items: center;
text-align: right;
text-decoration-line: line-through;

color: rgba(233, 245, 252, 0.4);

`

const Price = styled.p`


font-family: medium;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 159% */


margin-top : -10px;
margin-bottom : 20px;

color: #88B7F9;


`
const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

const ItemCards = ( {DataObject} : {DataObject : any}) => {
  
  // const FormatNumber = (Number: any ) => {
  //   let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
  //   return FaNum;
  // }

  const firstImage = DataObject.images[0]?.image; // Access the first image link
  const baseUrl = 'http://5.178.111.119:8000/'; // Replace with your base URL
  const relativeUrl = firstImage; // Replace with your relative image URL
  const absoluteUrl = `${baseUrl}${relativeUrl}`;

  // console.log(relativeUrl)

  const Rating = DataObject.rating;

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

  
  const path1 = "/product/"
  const path = `${path1}${DataObject.id}`;
  return (


   <li>
    <MainBox href={`${path}`} >

      <div className='mt-3 mb-3'>
      <ImageBox src={absoluteUrl} alt='product-image'/>
      </div>  

      <Text>{DataObject.title}</Text>

      <div className='flex flex-row items-center justify-center gap-3'>
      <p className='mr-2' dir='rtl'>
        <Discount> {DataObject.discount_amount === 0 ? "" : DataObject.discount_amount}</Discount>
        <Price>{DataObject.price} تومان</Price>
      </p>

      <div className='flex ml-2 text-red-500 '>    
        <StarContainer dir='ltr'>
      {renderStars(Rating)}
        </StarContainer>
      </div>

    </div>
    </MainBox>
   </li>



  )
}

export default ItemCards