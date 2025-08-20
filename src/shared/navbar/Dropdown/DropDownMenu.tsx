
import styled, { css } from "styled-components";
// import "@/index.css";
import KhadamatePardakht from "./KhadamatePardakht";
import BaziHa from "./BaziHa";
import GamePoint from "./GamePoint";
import GiftCard from "./GiftCard";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import Responsive from "./Responsive";




const StyledDropDowns = styled.div`

display: flex;
flex-direction: row;
// میتونی برای سایز های مختلف اسکرین بهش گپ های متفاوت بدی
// border : none;
// color : black;
height : 10px;
margin-right : -70px;


@media (max-width: 600px) {
  display : flex;
  flex-direction: column;
}

color : yellow;

& svg{
${(props) => props.about === "dark" &&
  css`
  stroke : #000001;
  `
}

${(props) => props.about === "light" &&
  css`
  stroke : #ffff;
  `
}
}


// **********************************
${(props) => props.about === "dark" &&
  css`
  color : #000001;
  `
}

${(props) => props.about === "light" &&
  css`
  color : #ffff;
  `
}



`



function DropDownMenu({isMainPage}: any) {

  const isAboveMediumScreen = useMediaQuery ("(min-width: 1060px)");



  return (
    <>
    {
      isAboveMediumScreen
      ?(
        <StyledDropDowns about={isMainPage? "dark" : "light"} >
     
      <KhadamatePardakht/>
      <GamePoint/>
      <GiftCard/>
       <BaziHa/>  
  
  </StyledDropDowns>
      )
      :(
        <Responsive/>
      )
    }
    
    </>



    
  )
}



export default DropDownMenu