import ArrowLeftIcon from "@/shared/icons/ArrowLeftIcon"
import EyeSlashIcon from "@/shared/icons/EyeSlashIcon"
import UserCircleIcon from "@/shared/icons/UserCircleIcon"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled , {css} from "styled-components"
import "@/shared/FormatNumber"
import EyeIcon from "@/shared/icons/EyeIcon"
import DiscordTinyPic from "../TinyPics/DiscordTinyPic"
import TwitchTinyPic from "../TinyPics/TwitchTinyPic"
import { useGetUserData } from "@/features/acc/useGetUserData"

const MainContainer = styled.div`
// flex-basis : 80%;
// width : 90%;



`
const StyledUserProfileBox = styled.div`

/* Rectangle 19 */

box-sizing: border-box;

// width: 955px;
width : 100%;
height: auto; 

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
flex-direction : column;
// justify-content : space-between;
// flex-wrap: wrap;
align-items : bottom;
`



const ContentContainer = styled.div`

display : flex;
flex-direction : row;
// justify-content : space-between;
flex-wrap: wrap;
// align-items : bottom;


width : 90%;
// height : 50%;
margin : auto;




padding : 20px 15px 8px 15px;

`

const RightSideContainer = styled.div`
// width : 168px;

flex-basis : 50%;




`
const LeftSideContainer = styled.div`
// width : 168px;

flex-basis : 50%;
// margin-top : 5px;

`

const Heading = styled.div`

display: flex;
// align-items: center;
gap: 0.8rem;

text-align: right;

color: #FFFFFF;


& svg {
  width: 26px;
  height: 25.93px;
  stroke: #FFC744;
  stroke-opacity : 1;
}

${(props) => 
  props.as === "h1" &&
  css`
  
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 29px;
margin-top : -8px;
  `
}

${(props) => 
  props.as === "h2" &&
  css`
  
font-family: bold;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
margin-bottom : 6px;
  `
}
`


const SeeMoreLink = styled(NavLink)`
/* مشاهده همه */

font-family: 'Peyda';
font-style: normal;
// font-weight: 700;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
text-align: right;

color: #FFFFFF;
opacity: 0.6;

& svg {
  // stroke-opacity : 0.6;
  width : 24px;
  // height : 26px;
}
`

const P = styled.p`

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;


color: rgba(255, 255, 255, 0.6);

margin-bottom : 25px;
margin-top : 5px;

& svg{
  cursor : pointer;
}

transition: all 0.3s;

`

const PBlured = styled.p`
/* ali.ahmadi23@gmail.com */

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;

color: rgba(255, 255, 255, 0.6);

filter: blur(3px);

margin-bottom : 25px;
margin-top : 5px;


transition: all 0.3s;

`





function UserProfileBox() {

  const [isClicked1 , setIsClicked1] = useState(false);
  const [isClicked2 , setIsClicked2] = useState(false);

  const {isPending, data} = useGetUserData()

  console.log(data)

   const handleClick1 = () => {
    setIsClicked1((e) => !e);
   }

   const handleClick2 = () =>{
    setIsClicked2((e) => !e);
   }

  //  CONVERTING NUMBERS 
    const FormatNumber = (Number: any ) => {
      let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
      return FaNum;
    }

  return (
    <MainContainer dir="rtl">

    {/* HEADER */}
    <div className="flex justify-between"> 
    <Heading as="h1">
    <UserCircleIcon/>  
      مشخصات کاربری
      </Heading>

    <SeeMoreLink to="/acc-details">
      مشاهده همه
      <ArrowLeftIcon/>
      </SeeMoreLink>
    </div>
    
  
    
    {/* BOX */}
    <StyledUserProfileBox>
      <ContentContainer>

        {isPending && <></>}

        {/* LEFT SIDE */}
        <RightSideContainer>
          <Heading as="h2">نام کاربری</Heading>
          <P>{data?.username}</P>

          <Heading as="h2">شماره تماس</Heading>
          <div className="flex gap-2">
            {
              isClicked1
              ?(
                <>
                <P onClick={handleClick1}><EyeSlashIcon/></P>
                <P>{FormatNumber(data?.phone_number)}+</P>
                </>
              )
              :(
                <>
                <P onClick={handleClick1}><EyeIcon/></P>
                <PBlured>{FormatNumber(data?.phone_number)}+</PBlured>
                </>
              )
            }
            
           
            
          </div>

        </RightSideContainer>


        {/* RIGHT SIDE   */}
        <LeftSideContainer>
          <Heading as="h2">ایمیل</Heading>
          <div  className="flex gap-2">
          {
            isClicked2
            ?(
              <>
               <P onClick={handleClick2}><EyeSlashIcon/></P>
                <P>{data?.email}</P>
              </>
            )
            :(
              <>
                <P onClick={handleClick2}><EyeIcon/></P>
                <PBlured>{data?.email}</PBlured>
              </>
            )
          }
          
          </div>

          <Heading as="h2">اکانت های متصل</Heading>
          <div className="flex gap-4">
            <TwitchTinyPic/>
            <DiscordTinyPic/>
          </div>
        </LeftSideContainer>

      </ContentContainer>
    </StyledUserProfileBox>
    </MainContainer>
  )
}

export default UserProfileBox