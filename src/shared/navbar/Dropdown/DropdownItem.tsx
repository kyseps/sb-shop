import "@/index.css";
import Globe from "@/shared/icons/Globe";
import { useLocation } from "react-router-dom";
import styled ,{css} from "styled-components";



const ListItems = styled.a`




  display: flex;
  flex-direction: row;
  // align-items: flex-start;
  justify-content : center;
  // padding: 4px 6px 4px 18px;
  padding : 5px;
  
  gap: 3px;

  margin : 15px 0px;

width :155px;

  border-radius: 10px;


/*** TEXT  ***/

font-family: semibold;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #FFFFFF;




&:link,
&:visited {
  // color: #4b5563;
  // padding: 1.2rem 2.4rem;
  // transform: translate(0%);
  // transition: 0.3s ease-out;


}

&:hover,
&:active,
&.active:link,
&.active:visited {
  // background-color: white;

  box-sizing: border-box;

margin : 16px auto;

width :155px;



// width :178px;

  background: linear-gradient(180deg, #0C0C42 0%, rgba(0, 0, 1, 0) 100%);
  border-radius: 10px;


// border : 2px solid gray;
  


box-shadow: 0px 0px 4px rgba(233, 245, 252, 0.168), 0px 0px 2px rgba(87, 87, 87, 0.088);

}

// transform: translate(0%);
transition: 0.3s ease-out;

${(props) => 
  props.onAnimationEnd && css`
  &:hover {
    // position: fixed;
    // transform: translate(0%, -30%);
    transition: 0.3s ease-out;
  }
`}

&:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    stroke: rgba(255, 199, 68, 1);
    stroke-opacity : 1;
    
  }

`
const F = styled.div`


${(p) => 
  p.about === "color" &&
  css`
  & svg{
stroke: inherit;
}
  `
}
`
type Props = {
    text: string;
    href : string;
}

//  className='flex flex-row items-center justify-center gap-1 text-white hover:bg-gradient-blueDark rounded-md'

function DropdownItem({text , href}: Props) {
  const location = useLocation()
  const isMainPage = location.pathname === "/main";


  return (
    // <a href={href}>
    //  <List> 
   <ListItems href={href}>
    <p>{text}</p>
    <F about={isMainPage ? "color" : ""}>
    <Globe />
    </F>
    </ListItems>
//  </List>
//  </a>
  )
}

export default DropdownItem