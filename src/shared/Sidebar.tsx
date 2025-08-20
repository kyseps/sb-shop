import styled from "styled-components"
import { NavLink } from "react-router-dom";
import DashboardIcon from "@/shared/icons/DashboardIcon";
import ShoppingBagIcon from "@/shared/icons/ShoppingBagIcon"
import InboxIcon from "@/shared/icons/InboxIcon";
import UserCircleIcon from "@/shared/icons/UserCircleIcon";

const StyledSidebar = styled.div`
/* Rectangle 19 */

box-sizing: border-box;

width: 303px;
height: 242px;


/* item-list-bg */
background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 30px;

/* border */

border : double 2px transparent;
background-image:  linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
background-origin: border-box;
background-clip: content-box, border-box;


display : flex;
align-items: center;
justify-content : center;



`
const StyledLinkList = styled.ul`
// border : 1px solid red;
display: flex;
flex-direction: column;
// align-items: flex-end;
padding: 0px;
gap: 5px;

// padding :32px 25px;

`

const StyledLink =  styled(NavLink)`

&:link,
&:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-family: semibold;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    
    color: #FFFFFF;


//   color: #4b5563;

//   font-size: 1.6rem;
//   font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.3s;
}

/* This works because react-router places the active class on the active NavLink */
&:hover,
&:active,
&.active:link,
&.active:visited {
//   color: #1f2937;
color :LightGray;
//   background-color: #f9fafb;
  border-radius: 5px;
}

& svg {
  width: 1.7rem;
  height: 1.7rem;


width: 24px;
height: 24px;


  transition: all 0.3s;
}

&:hover svg,
&:active svg,
&.active:link svg,
&.active:visited svg {
  stroke: #FFC744;
  stroke-opacity : 1;
//   stroke: yellow;
  
}
`

function Sidebar() {
  return (
    // <div dir="rtl" className="flex mr-9">

    <StyledSidebar dir="rtl">
        <StyledLinkList>
    <li>

    <StyledLink to="/dashboard">
        <DashboardIcon/>
        <span>داشبورد</span>
    </StyledLink>
    </li>

    <li>

    <StyledLink to="/orders">
        <ShoppingBagIcon/>
        <span>لیست سفارش ها</span>
    </StyledLink>
    </li>

    <li>
    <StyledLink to="/''">
        <InboxIcon/>
        <span>نظرات ثبت شده</span>
    </StyledLink>
    </li>

    <li>
    <StyledLink to="/acc-details">
        <UserCircleIcon/>
        <span>اطلاعات حساب کاربری</span>
    </StyledLink>
    </li>

        </StyledLinkList>
    </StyledSidebar>
    // </div>
  )
}

export default Sidebar