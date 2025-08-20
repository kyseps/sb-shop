import Sidebar from "@/shared/Sidebar"
import styled from "styled-components"
import AllOrdersBox from "./AllOrdersBox"


const BoxesContainer = styled.div`
// width : 80%;
// margin: auto;
margin-top : 50px;


display : flex;
flex-direction : row;
align-item : center;
justify-content : center;
gap : 30px;
flex-wrap: wrap;

margin-bottom : 60px;

`

const RightSide = styled.div`
margin-right : -74px;
`

const LeftSide = styled.div`
flex-basis : 60%;
display : flex;
flex-direction : column;
gap :40px;


margin-top : -34px;

`

function HomeBoxes() {
  return (
    <BoxesContainer dir="rtl">

        <RightSide>
        <Sidebar/>
        </RightSide>

        <LeftSide>
        <AllOrdersBox/>
        </LeftSide>
    </BoxesContainer>
  )
}

export default HomeBoxes