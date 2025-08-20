
import styled from 'styled-components'
import logo from "@/shared/logo/logo.png"


const StyledLogo = styled.img`
position: absolute;
top: 0;
right: 0;
width: 57px;
height: 42px;
margin-top: 18px;
margin-right : 20px;

font-family: 'Peyda';
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 42px;
/* identical to box height */
text-align: center;

color: #000000;
`

const Logo = () => {
  return (
    
           <StyledLogo alt='logo' src={logo}/>
   
   
  )
}

export default Logo