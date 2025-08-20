import styled from "styled-components"
import UserEmptyProfile from "./UserEmptyProfile"
import { useGetUserData } from "@/features/acc/useGetUserData"
import SpinnerMini from "../ui/SpinnerMini"

const Container = styled.div`

display: flex;
align-items: center;
text-align: right;
gap : 22px;

// height: 24px;

margin-right : 100px;
margin-top : 45px;
`

const Name = styled.h1`
/* علی احمدی، سلام! */

/* card-title */
font-family: bold;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 32px;
/* identical to box height, or 177% */
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on;

color: #E9F5FC;
`

const PhoneNumber = styled.p`
/* 09123456789 */

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.6);


`



function UserProfileIntro() {
  const{isPending, data} = useGetUserData()


  const fullname = `${data?.first_name} ${data?.last_name}`
  const username = data?.username
  const isFullname = data?.first_name && data?.last_name;


  return (
    <Container dir="rtl">
        <UserEmptyProfile/>
        <div>
          {
            isPending? 
            (<SpinnerMini/>):
            (<>
            <Name>{isFullname? fullname : username }، سلام!</Name>
            <PhoneNumber>{data?.phone_number}</PhoneNumber>
            </>)
          }
             
        </div>
    </Container>
  )
}

export default UserProfileIntro