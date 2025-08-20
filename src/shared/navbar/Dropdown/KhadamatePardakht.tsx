
import { useEffect, useRef, useState } from "react";
import "./dropdownDark.css"
import DropdownItem from "./DropdownItem";
import ArrowDownIconBlack from "@/shared/icons/ArrowDownIconBlack";
import styled from "styled-components";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

const StyledTriggerText = styled.div`

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
left: 105px;
top: 0;
// right : auto;

// margin-left: 60px;

// border : 2px solid red;

`



function KhadamatePardakht() {

  
  const isAboveMediumScreen = useMediaQuery ("(min-width: 1060px)");
  

    
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
    <div ref={menuRef} >
    <div className='menu-trigger-services' onClick={() => {setOpen(!open)}}>
   
    <StyledTriggerText>
    <ArrowDownIconBlack/>
      خدمات پرداخت
      </StyledTriggerText> 
    </div>


    <div  className={`dropdown-menu ${open && isAboveMediumScreen? `active` : `inactive`}`}>
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

export default KhadamatePardakht