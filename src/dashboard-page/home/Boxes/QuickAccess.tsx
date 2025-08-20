import BookMarkIcon from "@/shared/icons/BookMarkIcon"
import styled, { css } from "styled-components"

const StyledQuickAccess = styled.section`
// border :1px solid green;
// width : 1%;
margin : auto;


display : flex;
flex-direction : column;
gap : 25px;


`

const Text = styled.h1`
/* دسترسی های سریع */



color: #FFFFFF;


${(props) => 
    props.as === "h1" &&
    css`
    // position: absolute;
    // width: 169px;
    // height: 29px;
    left: 1068px;
    top: 1059px;

    font-family:black;
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 29px;
    /* identical to box height */
    display: flex;
    gap : 10px;
    align-items: center;
    text-align: right;

    & svg {
        fill : #FFC744;
      }

    `
  }



  ${(props) => 
    props.as === "h2" &&
    css`
    
    // position: absolute;
    // width: 120px;
    height: 23px;
    left: 655px;
    top: 1136px;
    
    font-family: bold;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: center;   
    
    `
  }
`
const Container = styled.div`
// border :1px solid gray;
display : flex;
flex-wrap : wrap;
gap : 17.5px;
`

const ElementsBox =styled.a`
/* Rectangle 31 */

box-sizing: border-box;

// position: absolute;
width: 210px;
height: 53px;
left: 565px;
top: 1121px;

/* main-box */
background: linear-gradient(180deg, rgba(95, 95, 95, 0.22) 0%, rgba(132, 132, 132, 0.21) 100%);
border-radius: 10px;


display : flex;
align-items : center;
justify-content : center;
`
function QuickAccess() {
  return (
    <StyledQuickAccess>
        <Text as="h1">
            <BookMarkIcon/>
            دسترسی های سریع
        </Text>

        <Container>
        

            <ElementsBox href="#"><Text as="h2">تماس با پشتیبانی</Text></ElementsBox>
            <ElementsBox href="#"><Text as="h2">اینستاگرام</Text></ElementsBox>
            <ElementsBox href="#"><Text as="h2">تلگرام</Text></ElementsBox>
            <ElementsBox href="#"><Text as="h2">تماس با پشتیبانی</Text></ElementsBox>

        </Container>
    </StyledQuickAccess>
  )
}

export default QuickAccess