import TrashIcon from "@/shared/icons/TrashIcon"
import { useState } from "react"
import styled from "styled-components"

const StyledProductBox = styled.div`
    width: 898px;
    /* item-list-bg */
    border-radius: 30px;

    /* border */

    border : double 2px transparent;
    background-image:linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
    linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
    background-origin: border-box;
    background-clip: content-box, border-box;
`

const Table = styled.table`
width :90%;
margin : auto;

`
const TableRow = styled.tr`
// padding-bottom : 1rem;
// border-spacing: 30px;

`

const TableHeading = styled.th`
  padding : 2rem 0rem;

  font-family: 'Peyda';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 32px;
  
  text-align: right;
  font-feature-settings: 'salt' on;
  background : none;

  color: #E9F5FC;
  opacity : 0.6;
`

const TableData = styled.td`

  &: first-child {
    width : 640px;
    // border :1px solid yellow;
    padding-left :60px;
    
    }

  &:nth-child(2) {
    width : 100px;
    // border :1px solid red;
    padding-left :50px;

    }

    &:nth-child(3) {
    width : 250px;
    // border :1px solid blue;


    }

    &: last-child {
    width : 20px;
    // border :1px solid green;
    }
  padding-bottom: 50px;
  vertical-align: top;
  word-break: break-all;

`


const Image = styled.img`
width: 81px;
height: 81px;
`

const ProductName =  styled.h1`
font-family: 'Peyda';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;

color: #FFFFFF;
`



const Button = styled.div`
width : 150px;
`

const ProductDetails = styled.div`
display : flex;
flex-direction : column;
gap : 5px;
`

const DetailsTitle = styled.span`
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #FFFFFF;

`

const Detail = styled.span`

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: rgba(255, 255, 255, 0.6);
`

const Number = styled.span`

width : 32px;
justify-content : center;
font-family: 'Peyda';
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 32px;

text-align: center;
font-feature-settings: 'salt' on;

color: #E9F5FC;

`

const Price = styled.span`

font-family: 'Peyda';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
/* identical to box height */

color: #FFFFFF;

display : flex;
gap :10px;
`


function ProductBox() {

  const [count , setCount] = useState(Array(Data.length).fill(1));


  const FormatNumber = (Number: any ) => {
    let FaNum = new Intl.NumberFormat('fa-IR').format(Number);
    return FaNum;
  }

  function handlePlusCount (index : any) {
    setCount(prevCounts => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += 1;
      return updatedCounts;
    })
  }

  function handleMinusCount (index : any)  {
    setCount(prevCounts => {
      const updatedCounts = [...prevCounts];
      if(updatedCounts[index] > 1) {
        updatedCounts [index] -= 1;
      } 
      return updatedCounts;
    })
  }
  
 

  return (
    <>
    <StyledProductBox>
      <Table>

        <TableRow>
          <TableHeading>محصول</TableHeading>
          <TableHeading>تعداد</TableHeading>
          <TableHeading>قیمت نهایی</TableHeading>
          <TableHeading></TableHeading>
        </TableRow>

        {
          Data.map((el , index) => {
            return(
              <>
              
        <TableRow key={index}>

          <TableData data-cell="محصول">
            <div className="flex gap-4">
              <Image src={el.image}/>

                <ProductDetails>

                  <ProductName>{el.productname}</ProductName>

                  <div>
                
                  {
                  el.Details &&  el.Details.map((item) => {
                    return(
                      <p>
                      <DetailsTitle>{item.title}:</DetailsTitle>
                      <Detail>{item.info} </Detail>
                      
                      </p>
                    )
                    })
                  }
                  </div>
              </ProductDetails>
            </div>   
          </TableData>


          <TableData data-cell="تعداد">
                <Button>
                <div className="flex gap-4 items-center justify-center">
                  <button onClick={() => handlePlusCount(index)}><PlusBox/></button>
                  <Number>{count[index]}</Number>
                <button onClick={() => handleMinusCount(index)}><MinusBox/></button>
               </div>
                </Button>
            </TableData>


          <TableData  data-cell="قیمت">
                  <Price>
                    {FormatNumber(el.price)}
                      <span>تومان</span>
                  </Price>
          </TableData>


          <TableData width="10%" data-cell="">
            <div className="flex justify-end">
              <TrashIcon/>
            </div>
            </TableData>
        </TableRow>
        </>
            )
          })
        }




      
  
      </Table>


    </StyledProductBox>
    
    </>
  )
}

export default ProductBox

const Data = [
  {
    productname: "ولورانت پوینت ترکیه - VP 7300",
    image:
    "https://s3-alpha-sig.figma.com/img/942a/7fca/a8d68e2a4b747cc0c860e355cc45a733?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ec9WG9LhoV5Vhd~ZBkEo9UrTm9~MPcwuLSUDOkBkLK4SMd3FHWFobrqSRuqZBE4YU0y5azlj6TRg7~~CFmI1sVVuNN3~3N46NSzcF--8C1hHwUtrIn9wIhcfA8ig6pJIWoyKjWjAIOnzDmIPAcQbt9dI6jubUZk0psDAvsZfcgBYpyK0lB1ih7nXnseqpOnhUVFuywXmaNBv8sySzom3VBunwdA2-Kk3oXxrWs3kmKuCdw0AzRWll38X-0PxtoLLuuq85jdZHcu0-zOcrzBe-T7cmBPM-Rf4azziZhDC9g8C1l-Z~LaJJ26RZl~Yrrq4nOHtUfBvsomLQNAOF7acfQ__",
    Details : [
      {title : "مقدار",  info : " VP 7300"},
 
    ],
    price : 2604000,
   },

   {
    productname: `وی باکس فورتنایت - 1000 وی باکس`,
    image:"https://s3-alpha-sig.figma.com/img/1b66/8c09/a17b6a7dba0b9fa21983138ea74a14bd?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsG3sGbUNgJJyc-soXsV4JUSp07xn5do5qKtinnr1tqkvvgtkAy0h2930MIad5ZKE1xN5Pgild7SlMbug8rADeslUUEpGTz~G2eq~x-NU2N0pMvPowIvowtTpXpl~6lzQcWmh~trJXBYWNNpoh~bFUrBjBZmXa8WdGZV4~A2NGOwKZvnar4z2OeGOKEklDoA6f2MKr60P0M66sEv-YLEwcfhYE6i4OWbJET~9tqqyijw19fKWWXmgT~CpSSvdpQL2lwPQNLrlp2Du2cXfV5hoy03Gt~PIoiNRm1P6Vn79DMPA5b~1uHGDYpvbaNppy6HCzvNBleyIqlk22ni6MyrnQ__",
    Details : [
      {title : "مقدار",  info : " 100 وی باکس"},
      {title : "ایمیل", info:"Example@gmail.com"},
      {title : "پسورد", info:"1234Salam"},
      {title : " پلتفرم ورود", info:"اپیک گیمز"},
      {title : "نام داخل بازی", info:" Ali.Ahmadi"},
    ],
    price : 2604000,
   },

   {
    productname: "رایت پوینت اروپا - 8550RP",
    image:"https://s3-alpha-sig.figma.com/img/1ec0/a9dc/23f921a5a91035f1d3f2e1b9b0e5d3e8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4E9-gHtjRYIRwpatsy6OG-BJmrg-GeygtEV785UmsS0pHm1osDHQXPcZSSP7hb9b5xPlL2ZatFaaDuvPHuxi6qNMksppArCVGClAEtm8BLbvVtfgJgO8K46sFWjZ~8qVNB-0VcoD3M1nVL8Xzh9BMk9JI2zTde8LmEPnTzqQOLG3~IZ2TtVo4clxh91e9J3gW0UxvOFECBF6TIBd4jipYRitaIYuhWBfyjCj12JfW~ZwF8XtWmWri69l6Hb5oPg3LMDMmtTWEb0ZXV7Q3xbZnhTQWm7q9S6dOqILkRsilHFOEz7z7bXoPetbUZSwX5vpaqZ2ltUeFGu~mIoD6mXfA__",
    Details : [
      {title : "مقدار",  info : "8550RP"},
      {title : "یوزرنیم", info:"Ali.Ahmadi"},
      {title : "پسورد", info:"1234Salam"},
 
    ],
    price : 260400000,
   },

   {
    productname: "ولورانت پوینت ترکیه - VP 7300",
    image : "",
    // Details : [
    //   {title : "مقدار",  info : " 100 وی باکس"},
    //   {title : "ایمیل", info:"Example@gmail.com"},
    //   {title : "یوزرنیم", info:""},
    //   {title : "پسورد", info:"1234Salam"},
    //   {title : "پلتفرم", info:"اپیک گیمز"},
    //   {title : "نام داخل بازی", info:" Ali.Ahmadi"},
    // ],
    price : 2604000,
   },
]



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
