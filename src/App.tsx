
import MainPage from "./main-page/MainPage";
import GlobalStyles from "@/shared/styles/GlobalStyles";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ProductPage from "./product-page/ProductPage";
import DashboardPage from "./dashboard-page/DashboardPage";
import OrdersPage from "./orders-page/OrdersPage";
import AccDetailPage from "./acc detail-page/AccDetailPage";
import CategoryItemsPage from "./category items-page/CategoryItemsPage";
import SearchResultPage from "./search result-page/SearchResultPage";
import CartPage from "./cart-page/CartPage";
import LoginPage from "./login-page/LoginPage";
import styled from "styled-components";
import SignUpPage from "./signUp-page/SignUpPage";
// import VerificationCode from "./signUp-page/VerificationCode";
import PageNotFound from "./PageNotFound";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./shared/ProtectedRoute";
// import { useUser } from "./features/authentication/useUser"; 
import ProductList from "./product-list-page/ProductListPage";


const DIv= styled.div`
margin:auto;
// for when we zoom out
max-width: 1600px;

`


function Logout() {
  localStorage.clear()
  return <Navigate to="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <SignUpPage/>
}

function App() {
  // const {isAuthorized, isPending} = useUser();

// isPending && console.log("isPending");

  const BrowserRoutes = () => {
    return (

    // <div className="bg-black">      
      <DIv>
      <GlobalStyles />
      <BrowserRouter>
    <Routes>

    {/* PRIVATE PAGES */}
    <Route path="cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
    <Route path="acc-details" element={<ProtectedRoute><AccDetailPage/></ProtectedRoute>}/>
    <Route path="dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
    <Route path="orders" element={<ProtectedRoute><OrdersPage/></ProtectedRoute>} />


      {/* <Route index element={<Navigate replace to="/"/> }/> */}
      <Route path="/" element={<MainPage/>}/>
      {/* <Route index element={<MainPage/>}/> */}
      <Route path="product/:id" element={<ProductPage/>}/>
      <Route path="category-items" element={<CategoryItemsPage/>}/>
      <Route path="search-result" element={<SearchResultPage/>}/>
      <Route path="product-list" element={<ProductList/>}/>


      {/* {!isAuthorized && <Route path="login" element={<LoginPage/>}/>} */}
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<RegisterAndLogout/>}/>
      {/* <Route path="verify" element={<VerificationCode/>}/> */}
      <Route path="logout" element={<Logout/>}/>
      
            
      
      <Route path="/*" element={<PageNotFound/>}/>
      {/* <Route path="/test" element={<Test/>}/> */}

      



      
  
    </Routes> 
    
    </BrowserRouter>





               {/* pop up nofication */}
               <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
     
      </DIv>
  
      // </div>
    
    )
    
  }
  return(
    <>

  <BrowserRoutes/>
  </>
  )

}

export default App
