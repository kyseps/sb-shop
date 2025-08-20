import styled from "styled-components"
import ProductsItem from "./ProductsItem";
import GiftIconLarge from "@/shared/icons/GiftIconLarge";


const  ProductsData = [
  {
    name: "گیفت کارت",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    photoName: "image/image1.jpg",
    icon : <GiftIconLarge/>,
    
  },
  {
    name: "گیفت کارت",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    photoName: "image/image1.jpg",
    icon : <GiftIconLarge/>,
    
  },
  {
    name: "گیفت کارت",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    photoName: "image/image1.jpg",
    icon : <GiftIconLarge/>,
    
  },
  {
    name: "گیفت کارت",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    photoName: "image/image1.jpg",
    icon : <GiftIconLarge/>,
  },
];


const StyledProductBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 100%;
height: 351px;



margin : auto;
margin-top : 50px;
`
export default function ProductBox() {

    const Produts = ProductsData;

  return (
    <StyledProductBox>
      <ul className="flex flex-row gap-5">

{Produts.map((index) => (

<ProductsItem DataObject={index} key={index.name}/>
      ))}
</ul>
    </StyledProductBox>
  )
}
