
import { useEffect, useRef, useState } from "react";
// import "@/index.css";
import DropdownItem from "./DropdownItem";
import ArrowDownIconBlack from "@/shared/icons/ArrowDownIconBlack";
import "./dropdownDark.css"
import styled from "styled-components";


const StyledTriggerText = styled.div`
/* nav-menu */

/* Auto layout */
display: flex;
flex-direction: row;
// flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
padding: 0px;
gap: 4px 8px;

position: absolute;
//  width: 150px;
// height: 33px;
left: 46px;
top: 0;
// border : 2px solid red;
`

function BaziHa() {
    const  [open,setOpen] = useState(false);


    const menuRef = useRef(null);
  
    useEffect(() => { 
  
      const node = menuRef.current as any;
  
      const handler = (e: { target: any }) => {
  
        if(!node.contains(e.target)){
          setOpen(false);
        }
       
      }
        
  
      document.addEventListener("mousedown" , handler);
  
  
      return() => {
        document.removeEventListener("mousedown" , handler);
      }
    });

    
  return (
    <div ref={menuRef}>
    <div className='menu-trigger-games' onClick={() => {setOpen(!open)}}>
      <StyledTriggerText>
      <ArrowDownIconBlack/>
      بازی ها
      </StyledTriggerText>
    
    </div>
    

     <div  className={`dropdown-menu ${open? `active` : `inactive`}`}>
      <ul>
        <DropdownItem text = {"بازی های استیم"} href="" />
        <DropdownItem text = {"بازی های استیم"} href="" />
        <DropdownItem text = {"بازی های استیم"} href="" />
        <DropdownItem text = {"بازی های استیم"} href="" />
        <DropdownItem text = {"بازی های استیم"} href="" />
        <DropdownItem text = {"بازی های استیم"} href="" />
        
      </ul>
    </div> 
    </div>
  )
}

export default BaziHa