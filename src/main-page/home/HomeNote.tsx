import styled from "styled-components"

const P = styled.p`
//position: absolute;
width: 700px;
//height: 141px;
//left: calc(50% - 745px/2 + 0.5px);
// top: 268px;

/* hero */
font-family: medium;
//font-style: normal;
font-weight: 400;
font-size: 55px;
line-height: 65px;
/* or 99% */
// display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;


background: linear-gradient(266.96deg, #01081E 0%, #0534BA 83.96%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`

const Span = styled.span`
/* تجربه دسترسی بدون محدودیت به دنیای سرگرمی */

// position: absolute;
// width: 745px;
// height: 141px;
// left: calc(50% - 745px/2 + 0.5px);
// top: 268px;

/* hero */
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 64px;
line-height: 63px;
/* or 99% */
// display: flex;
// align-items: center;
// text-align: center;
// letter-spacing: -0.03em;
// font-feature-settings: 'salt' on;

// background: linear-gradient(266.96deg, #01081E 0%, #0534BA 83.96%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// background-clip: text;
// text-fill-color: transparent;


`

function HomeNote() {
  return (
    <P>
     <Span>تجربه دسترسی  </Span> بدون محدودیت <Span>به دنیای سرگرمی </Span>
      
    </P>
  )
}

export default HomeNote