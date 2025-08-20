
import styled, { css } from "styled-components";
import ShoppingButton from "./ShoppingButton";
import SearchButton from "./SearchButton";
import DropDownMenu from "./Dropdown/DropDownMenu";
import Logo from "@/shared/logo/Logo";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "@/features/authentication/useUser";
import UserButton from "./UserButton";
import LoginIcon from "../icons/LoginIcon";
// import Breadcrumbs from "../Breadcrumbs";


const LoginLink= styled(NavLink)`
font-family: semibold;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;



${(props) => props.about === "light" &&
  css`
  color: #ffff;
  `
}

${(props) => props.about === "dark" &&
  css`
  color: #000001;
  `
}

& svg{
width : 28px;
height : 28px;
}

display: flex;
align-items:center;
gap:3px;

&:hover{
// background: red;
color:#0534BA;
// opacity:0.8;
}

  transition: all 0.3s;
`



function MainNav() {
  

  
  const {isPending, isAuthorized} = useUser()
  console.log(isAuthorized)

   
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  // const isAboveMediumScreen = useMediaQuery ("(min-width: 700px)");

  const  [isClicked,setIsClicked] = useState(false);

  const flexBetween = "flex items-center justify-between";


  return (
    <div>
      

    <div className={`top-0 z-30  py-6 w-full`}>
         <nav className={`${flexBetween} mx-auto w-5/6`}>

              {/* LEFT SIDE DIV */}
        <div className="flex flex-row gap-8 mt-2 items-center">
        <div className="flex gap-3">
          {isAuthorized &&
          <ShoppingButton
          isMainPage={isMainPage}/>
          }
           

            <SearchButton 
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            isMainPage={isMainPage}
            />

          <div className="flex gap-2 justify-center items-center">

            
          {
            isAuthorized? 
            (isPending? <p>Loading..</p>:<UserButton isMainPage={isMainPage}/>)
            // (<UserButton isMainPage={isMainPage}/>)
            :
            (<LoginLink to="/login" about={isMainPage? "dark" : "light"}>
              <span>ورود</span>
              <LoginIcon/>
              </LoginLink> )
          }


          </div>          
          </div>
        </div>

      
        
    


        {/* RIGHT SIDE DIV */}
        <div className="flex">
          
       <DropDownMenu isMainPage={isMainPage}/>
       <Logo/>
        </div>
     
         </nav>
      
    </div>
    {/* <Breadcrumbs/> */}
    </div>

  )
}

export default MainNav