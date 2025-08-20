import styled, { css } from "styled-components";
import UserIcon from "@/shared/icons/UserIcon";
import { useEffect, useRef, useState } from "react";
import DashboardIcon from "../icons/DashboardIcon";
import { Link } from "react-router-dom";
import LogoutIcon from "../icons/LogoutIcon";
import { useLogout } from "@/features/authentication/useLogout";
import SpinnerMini from "../ui/SpinnerMini";


const StyledUserIcon = styled.div`
position: relative;
cursor : pointer;
margin-top :-10px;
margin-left: 25px;


& svg{
  ${(props) => 
    props.about === "light" &&
    css`
    stroke:white;
    `
  }
}`





const DropDownMenu = styled.div`



  position: absolute;
  top: 70px;
  // right: 20px;
  // background-color: #fff;
  border-radius: 10px;
  padding: 1.2rem;
  // width: 200px;



    background:  #0C0C42;

&:before {
      content: '';
  position: absolute;
  top: -4px;
  right: 67%;
  height: 17px;
  width: 20px;
  background:  #0C0C42;
  transform: rotate(45deg);
  }

${(props) => 
  props.about === "active" &&
  css`
    opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: 500ms ease;
  `
}


${(props) => 
  props.about === "inactive" &&
  css`
    opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
   transition: 500ms ease;
  `
}




/*** TEXT  ***/

font-family: bold;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #FFFFFF;

    
`



const MenuItem =  styled.li`
cursor:pointer;
padding : 0.3rem;
display: flex;
gap: 0.5rem;
color: #FFFFFF;
margin-bottom : 10px;
transition: all 0.3s;

& svg {
width: 21px;
height: 22px;
transition: all 0.3s;
stroke: #E9F5FC;
stroke-opacity: 0.42;
// opacity :0.42;
}

${(props) => 
  props.about === "acc" &&
  css`
  &:hover svg
 {
  stroke: #FFC744;
  stroke-opacity : 1;
}

&:hover{
color :LightGray
}
  `
}

${(props) => 
  props.about === "logout" &&
  css`
  &:hover svg
 {
  stroke: 	#D22B2B;
  stroke-opacity : 1;
}

&:hover{
color : #D22B2B;
opacity: 0.8;
}
  `
}



&:hover{

background: linear-gradient(180deg, #0C0C42 0%, rgba(0, 0, 1, 0) 100%);
border-radius: 8px;
box-shadow: 0px 0px 4px rgba(233, 245, 252, 0.168), 0px 0px 2px rgba(87, 87, 87, 0.088);
}

transition: 0.3s ease-out;
`
const UserButton = ({isMainPage} : any) => {

  
  const [showUserMenu, setShowUserMenu] = useState(false)

  let menuRef = useRef(null);
  
  useEffect(() => { 

    const node = menuRef.current as any;

    let handler = (e: { target: any }) => {

      if(!node.contains(e.target)){
        setShowUserMenu(false);
      }
     
    }
      

    document.addEventListener("mousedown" , handler);


    return() => {
      document.removeEventListener("mousedown" , handler);
    }
  });



  



  const {logout, isPending} = useLogout()

  return (
    <div ref={menuRef} >
            <StyledUserIcon
            about={isMainPage? "": "light"}
            onClick={() => setShowUserMenu(!showUserMenu)}
            > 
                <UserIcon/>  
            </StyledUserIcon>

             
        <DropDownMenu about={showUserMenu? "active" : "inactive"}>
          <ul dir="rtl">
            <Link to="/dashboard">
            <MenuItem about="acc">
              <DashboardIcon/> 
              داشبورد  
            </MenuItem>
            </Link>

            
            <MenuItem about="logout" onClick={() => logout()}>
              {isPending? <SpinnerMini/> : <LogoutIcon/> }
                خروج  
            </MenuItem>
          
          </ul>
        </DropDownMenu>
       
        
              
    </div> 
   
  )
}

export default UserButton