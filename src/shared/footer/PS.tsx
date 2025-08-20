import styled from "styled-components"

const StyledPS = styled.p`
/* تمام حقوق برای فروشگاه محصولات مجازی SB Shop محفوظ است. */

// position: absolute;
// width: 395px;
// height: 32px;
// left: 753px;
// top: 5494px;

width : 80%;
height : 50px;
margin: auto;
// margin-top : -50px;

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 32px;
/* identical to box height, or 200% */
display : flex;
// align-items: center;
// text-align: right;
justify-content : center;

color: #FFFFFF;

opacity: 0.6;

// border : 1px solid red;
`

const PS = () => {
  return (
    <StyledPS dir="rtl">تمام حقوق برای فروشگاه محصولات مجازی SB Shop محفوظ است.</StyledPS>
  )
}

export default PS