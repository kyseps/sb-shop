import SearchIcon from "@/shared/icons/SearchIconWhite"
import styled  from "styled-components"
import ItemCards from "./ItemCards"
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react"
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
 
// const ScoreSorted = styled.p`


// font-family: 'Peyda';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 20px;
// display: flex;
// gap : 6px;
// align-items: center;
// text-align: right;

// color: rgba(255, 255, 255, 0.6);

// & svg {

// stroke :rgba(255, 255, 255, 0.6);

// }

// `

const StyledMainLayout = styled.div`
display : flex;
flex-wrap : wrap;
gap : 10px;
`


function MainLayout() {

  
  const [Data, setData] = useState([]);
  // const [users, setUsers] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);



  async function fetchData() {
    try {
      const response = await fetch('http://5.178.111.119:8000/products/');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        console.log(Data)
        
      } else {
        console.log('Error: ' + response.status);
      }
    } catch (error) {
      console.log('Error: ');
    }
  }


  // const [users, setUsers] = useState(Data);

  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 12;
  const pagesVisisted = pageNumber * usersPerPage;

  const displayUsers = Data.slice(pagesVisisted, pagesVisisted + usersPerPage)
  .map((user: any) => {
    return(
      <ItemCards DataObject={user} key={user.name}/>                                

      )
  })

  const pageCount = Math.ceil(Data.length / usersPerPage);

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

            {/* <div className="flex gap-3">
            <ScoreSorted>
                <ArrowDownIconWhite/>
                امتیاز
            </ScoreSorted>
                <Sortingicon/>
            </div>    */}
        </div>


        {/* MAIN LAYOUT */}
        <StyledMainLayout>
            {displayUsers}
           
        </StyledMainLayout>

       
        
            {/* SIWTCH PAGES BUTTONS  */}
            {Data.length >12  && 
            <div className=" flex justify-end ">
            <div>
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
            </div>
            }
                  
        
    </StyledSearchResult>

    
    </>
  )
}

export default MainLayout


