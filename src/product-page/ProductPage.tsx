import styled from 'styled-components'
import Home from './home/Home'
// import FAQ from './FAQ/FAQ'
// import Comments from './comments/Comments'
// import Benefits from '@/shared/benefits/Benefits'
import Footer from '@/shared/footer/Footer'
import RelatedProduct from './related product/RelatedProduct'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const StyledProductPage = styled.div`
width: 100%;
height: full;


// background: #000001;
// color : white;
`


const ProductPage = () => {
  const params = useParams();
  const [Data , setData] = useState<any>(JSON);


useEffect(() => {
  async function getData(){
      const id = params.id;
      try{
        // const res = await fetch(`https://sbshop.ir/products/${id}`);
        // const res = await axios.get(`https://app.sbshop.ir/api/product/${id}`);
        const res = await axios.get(`https://app.sbshop.ir/api/product/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        // const data = await res.json();
        // const data = await JSON.parse(res)
        setData(res);
        // console.log(Data.image.image)
        console.log(res, 'product data')

      }
      catch (error){
          console.log(error)
      }
    }

    getData();
  }, [params.id]);


console.log(Data)
  return (
    <>
    <StyledProductPage>
    <Home Data={Data}/>
    {/* <FAQ/> */}
    {/* <Comments/> */}
    <RelatedProduct/>
    {/* <Benefits/> */}
    <Footer/>
     </StyledProductPage>

            </>

  )
}

export default ProductPage