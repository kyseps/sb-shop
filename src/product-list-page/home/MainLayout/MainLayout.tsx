import styled from "styled-components"
import ItemCards from "./ItemCards"
import ReactPaginate from "react-paginate"
import { useEffect, useRef, useState } from "react"
import "./PaginationCss.css"
import axios from "axios"

interface Product {
  name: string;
  // Add specific product properties here - using Record<string, unknown> for other properties
  [key: string]: string | number | boolean | unknown;
}

interface PageChangeEvent {
  selected: number;
}

const StyledProductLists  = styled.section`

display : flex;
flex-direction : column;
gap : 15px;

flex-basis : 74%;

`

// const SearchResultHeaing = styled.h1`
// /* نتیجه جستجو برای “استیم” */

// font-family: peyda;
// font-style: normal;
// font-weight: 900;
// font-size: 22px;
// line-height: 29px;
// /* identical to box height */
// display: flex;
// gap : 10px;
// align-items: center;
// text-align: right;

// color: #FFFFFF;

// & svg {

// width: 26px;
// height: 26px;

// stroke : #FFC744;

// }
// `
 
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
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchRef = useRef<{page: number, perPage: number} | null>(null);

  useEffect(() => {
    // Prevent duplicate fetches for the same page/perPage
    if (fetchRef.current && fetchRef.current.page === page && fetchRef.current.perPage === perPage) return;
    fetchRef.current = { page, perPage };
    fetchData(page, perPage);
  }, [page, perPage]);

  async function fetchData(pageNum: number, perPageNum: number) {
    setLoading(true);
    try {
      const response = await axios.get(`https://app.sbshop.ir/api/product?page=${pageNum}&per_page=${perPageNum}`);
      const products = response.data.data?.products || [];
      setData(products);
      const total = response.data.data?.meta?.total ?? products.length;
      setTotal(total);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  const pageCount = Math.ceil(total / perPage);

  const displayUsers = data?.map((product: Product) => (
    <ItemCards DataObject={product} key={product.name} />
  ));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  return (
    <>
    <StyledProductLists>
        {/* HEADINHG */}
        <div className="flex justify-between">
            {/* <SearchResultHeaing>
                <SearchIcon/>
                <SearchIconBlack/>
                نتیجه جستجوی برای "استیم"        
            </SearchResultHeaing> */}

            {/* <div className="flex gap-3">
            <ScoreSorted>
                <ArrowDownIconWhite/>
                امتیاز
            </ScoreSorted>
                <Sortingicon/>
            </div>    */}
        </div>


        {/* MAIN LAYOUT */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
          <label style={{ color: '#fff', marginLeft: 8 }}>تعداد در هر صفحه:</label>
          <select value={perPage} onChange={handlePerPageChange} style={{ borderRadius: 6, padding: 4 }}>
            {[6, 12, 20, 30, 40].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <StyledMainLayout>
          {loading ? <div style={{ color: '#fff' }}>در حال بارگذاری...</div> : displayUsers}
        </StyledMainLayout>
        {/* Pagination Buttons */}
        {pageCount > 1 && (
          <div className="flex justify-center mt-4" style={{ marginTop: 24 }}>
            {Array.from({ length: pageCount }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => handlePageChange(idx + 1)}
                style={{
                  margin: '0 4px',
                  padding: '6px 14px',
                  borderRadius: 6,
                  background: page === idx + 1 ? '#FFC744' : '#222',
                  color: page === idx + 1 ? '#222' : '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: page === idx + 1 ? 700 : 400
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
    </StyledProductLists>

    
    </>
  )
}

export default MainLayout


