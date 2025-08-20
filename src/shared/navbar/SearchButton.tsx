import styled, { keyframes, css } from "styled-components";
import SearchIconWhite from "@/shared/icons/SearchIconWhite"
import { useEffect, useRef} from "react";
import SearchIconBlack from "../icons/SearchIconBlack";



const openAnimation = keyframes`
  0% {
    // width: 0;
    transform: translateX(0) rotate(0);

  }
  80% {
    // width: calc(100%); /* Adjust the width calculation as needed */
  }
  100% {
    // width: calc(100%); /* Adjust the width calculation as needed */
  }
`;

const closeAnimation = keyframes`
  0% {
    width: calc(100% - 30px); /* Adjust the width calculation as needed */
  }
  20% {
    width: calc(100% - 40px); /* Adjust the width calculation as needed */
  }
  100% {
    // width: 0;
    transform: translateX(0) rotate(0);

  }
`;

const StyledSearchButtonInactive = styled.button`
font-family: peyda;
border: none;
border-radius: 50px; //get color from GlobalStyles
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

/* shadow-btn */
box-shadow: 0px 5px 30px #8DA1BD;
border-radius: 50px;


&:hover {
  background-color: #0534BA;
}



/* rounded */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px;
gap: 10px;


width: 50px;
height: 50px;


transition : 0.5s;

${(props) =>
  props.about === "dark" &&
  css`
    color: #FFFFFF;
    background: #000001;
    
  `}

  ${(props) =>
    props.about === "light" &&
    css`
      background: #FFFFFF;
      color: #000001;
      
    `}


/* Add animation properties */
${(isClicked) =>
  isClicked &&
  (css as any)`
    animation: ${openAnimation} 0.8s ease-in-out both;
  `}

`

const StyledSearchButtonActive = styled.form`
/* Property 1=click */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 402.82px;
height: 50px;

/* black */
/* shadow-btn */
box-shadow: 0px 5px 30px #8DA1BD;
border-radius: 50px;

&:focus
{
  outline: none;
  background : none;
  border : none;
}

${(props) =>
  props.about === "dark" &&
  css`
    color: #FFFFFF;
    background: #000001;
    
  `}

  ${(props) =>
    props.about === "light" &&
    css`
      background: #FFFFFF;
      color: #000001;
      
    `}

    
/* Add animation properties */
${(isClicked) =>
  isClicked &&
  (css as any)`
    animation: ${closeAnimation} 0.8s ease-in-out both;
  `}
`

const IconButton = styled.button`
width: 10%;
margin-left : 8px;



display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`

const Input = styled.input`
font-family : peyda;
width : 90%;
background : none;

margin-right : 35px;



&:focus
{
  outline: none;
  background : none;
  border : none;
}

&:active
{
  outline: none;
  background : none;
  border : none;
}


&:hover
{
  outline: none;
  background : none;
  border : none;
}

`

type Props = {
  isClicked : boolean;
  setIsClicked : any;
  isMainPage: boolean
}


function SearchButton({isClicked , setIsClicked, isMainPage} : Props ) {

  const myRef = useRef(null);

  useEffect(() => { 

    const node =  myRef.current as any;

    const handler = (e: { target: any }) => {

      if(!node.contains(e.target)){
        setIsClicked(false);
      }
     
    }
    document.addEventListener("mousedown" , handler);


    return() => {
      document.removeEventListener("mousedown" , handler);
    }
  });

// ***********************************
 

  return (
    <div ref={myRef} onClick={() => {setIsClicked(true)}}>
    {
      isClicked?
      (
          <StyledSearchButtonActive about={isMainPage? "dark" : "light"} action="#">
              <IconButton>
                {isMainPage? <SearchIconWhite/> : <SearchIconBlack/>}
                
              </IconButton>

              
              <Input dir="rtl" autoComplete="off" type="text" placeholder="جستجو..." name="search"/>

          </StyledSearchButtonActive>
      )

      :(
        <StyledSearchButtonInactive about={isMainPage? "dark" : "light"}>
            <div>{isMainPage? <SearchIconWhite/> : <SearchIconBlack/>}</div>
        </StyledSearchButtonInactive>
        
      )
    }
    </div>
 
  )
}

export default SearchButton