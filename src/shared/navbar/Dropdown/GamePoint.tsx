import { useEffect, useRef, useState } from "react";
import "./dropdownDark.css"
import DropdownItem from "./DropdownItem";
import ArrowDownIconBlack from "@/shared/icons/ArrowDownIconBlack";
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
width: 150px;
// height: 33px;
left: 90px;
top: 0;
// mrgin-bottom : 50px;

// display: flex;
// gap: 5px;
// align-items: center;
// margin-left: 45px;

// margin-left: 50px;
// border : 2px solid red;
`

function GamePoint() {
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
  <div className='menu-trigger-gamepoint' onClick={() => {setOpen(!open)}}>
    <StyledTriggerText>
      <ArrowDownIconBlack/>
      گیم پوینت   
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

export default GamePoint