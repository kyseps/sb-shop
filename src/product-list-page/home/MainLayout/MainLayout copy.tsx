import ArrowDownIconWhite from "@/shared/icons/ArrowDownIconWhite"
import SearchIcon from "@/shared/icons/SearchIconWhite"
import Sortingicon from "@/shared/icons/Sortingicon"
import styled from "styled-components"
import ItemCards from "./ItemCards"
import ReactPaginate from "react-paginate";
import { useState } from "react"
import "./PaginationCss.css"
const StyledSearchResult  = styled.section`

display : flex;
flex-direction : column;
gap : 15px;

flex-basis : 74%;

`

const SearchResultHeaing = styled.h1`
/* نتیجه جستجو برای “استیم” */

font-family: peyda;
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 29px;
/* identical to box height */
display: flex;
gap : 10px;
align-items: center;
text-align: right;

color: #FFFFFF;

& svg {

width: 26px;
height: 26px;

stroke : #FFC744;

}
`
 
const ScoreSorted = styled.p`


font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
gap : 6px;
align-items: center;
text-align: right;

color: rgba(255, 255, 255, 0.6);

& svg {

stroke :rgba(255, 255, 255, 0.6);

}

`

const StyledMainLayout = styled.div`
display : flex;
flex-wrap : wrap;
gap : 10px;
`



const K = styled.div`

`

function MainLayout() {

  // const [users, setUsers] = useState(Data);
  const users = Data;
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 12;
  const pagesVisisted = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisisted, pagesVisisted + usersPerPage)
  .map((user: any) => {
    return(
      <ItemCards DataObject={user} key={user.name}/>                                

      )
  })

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected } : any) => {
    setPageNumber(selected);
  };

  return (
    <>
    <StyledSearchResult>
        {/* HEADINHG */}
        <div className="flex justify-between">
            <SearchResultHeaing>
                <SearchIcon/>
                {/* <SearchIconBlack/> */}
                نتیجه جستجوی برای "استیم"        
            </SearchResultHeaing>

            <div className="flex gap-3">
            <ScoreSorted>
                <ArrowDownIconWhite/>
                امتیاز
            </ScoreSorted>
                <Sortingicon/>
            </div>   
        </div>

<K>

        {/* MAIN LAYOUT */}
        <StyledMainLayout>
            {displayUsers}
        </StyledMainLayout>

       
        
 {/* SIWTCH PAGES BUTTONS  */}
 {Data.length > 12  && 
 <div className="border flex justify-end">
 <ReactPaginate
 // previousLabel={"Previous"}
 nextLabel={"بعدی"}
 pageCount={pageCount}
 onPageChange={changePage}
 containerClassName={"paginationBttns"}
 // previousLinkClassName={"previousBttn"}
 nextLinkClassName={"nextBttn"}
 disabledClassName={"paginationDisabled"}
 activeClassName={"paginationActive"}
 />
 </div>
 }
      
        
        </K>
    </StyledSearchResult>

    
    </>
  )
}

export default MainLayout



const FormatNumber = (Number: any ) => {
  let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
  return FaNum;
}

const  Data = [
  {
    name: "1",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    name: "2",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
  },
  {
    name: "3",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    name: "4",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    name: "5",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "top-sell-pics/image1.jpg",
    
  },
  {
    name: "6",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "7",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "8",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "9",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "10",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "11",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "12",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "13",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "14",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "15",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "16",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    name: "17",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    name: "18",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  }, {
    name: "19",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "20",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },{
    name: "21",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },{
    name: "22",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },{
    name: "23",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },{
    name: "24",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "25",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "26",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "27",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "28",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "29",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "30",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },
  {
    name: "31",
    price: FormatNumber(500.00),
    discount : FormatNumber(750.00),
    photoName: "/image1.jpg",
    
  },

];

