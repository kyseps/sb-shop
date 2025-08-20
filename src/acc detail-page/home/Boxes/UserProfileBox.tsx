import UserCircleIcon from "@/shared/icons/UserCircleIcon"
import styled , {css} from "styled-components"
import "@/shared/FormatNumber"
import DiscordTinyPic from "../TinyPics/DiscordTinyPic"
import TwitchTinyPic from "../TinyPics/TwitchTinyPic"
import PencilIcon from "@/shared/icons/PencilIcon"
import ConnectedIcon from "@/shared/icons/ConnectedIcon"
import SteamTinyPic from "../TinyPics/SteamTinyPic"
import { useGetUserData } from "@/features/acc/useGetUserData"
import { useEditUserData } from "@/features/acc/useEditUserData"
import { useEffect, useState } from "react"
import SpinnerMini from "@/shared/ui/SpinnerMini"

const MainContainer = styled.div`
display : flex;
flex-direction : column;
gap : 8px;




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
// gap :0px;

width : 90%;
// height : 50%;
margin : auto;


// border : 1px solid red;

padding : 35px 15px 35px 15px;

`

const RightSideContainer = styled.div`
// width : 168px;

flex-basis : 50%;

display:flex;
flex-direction : column;
gap : 25px;


`
const LeftSideContainer = styled.div`
// width : 168px;

flex-basis : 50%;
// margin-top : 5px;

display:flex;
flex-direction : column;
gap : 25px;
`

const Heading = styled.div`

display: flex;
// align-items: center;
gap: 0.8rem;
// flex-wrap : wrap;

text-align: right;

color: #FFFFFF;



& svg {
  width: 26px;
  height: 25.93px;
  stroke: #FFC744;
  stroke-opacity : 1;
  cursor : pointer;
}

${(props) => 
  props.as === "h1" &&
  css`
  
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 29px;
// margin-top : 8px;

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


& svg{
  width : 18px;
  hieght : 17.95px;
  stroke: rgba(233, 245, 252, 0.42);
  stroke-opacity : 0.42;

}
  `
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
gap : 15px;


color: rgba(255, 255, 255, 0.6);

// margin-bottom : 25px;
// margin-top : 5px;

& svg{
  cursor : pointer;
}

transition: all 0.3s;
`
const Input = styled.input`
// font-family: 'Peyda';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 20px;
/* identical to box height */
// display: flex;
// align-items: center;
// text-align: right;
// gap : 15px;

background: none;
border: none;
color: rgba(255, 255, 255, 0.6);

outline: none;

border-bottom:1px solid rgba(255, 255, 255, 0.6);

// width: 85px;
${(props) => 
  props.about==="email" &&
  css`
  width : 100%;
  `
}

`

const Acount = styled.span`

display : flex;
gap: 15px;

margin-bottom : 10px;

&:last-child {
  // border : 1px solid red;
  margin-bottom: 0px;
}




& svg{
  width : 20px;
  height : 20px;
}

${(props) => 
  props.about === "username" &&
  css`
  font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
text-align: right;
  color: #FFFFFF;
  `
}
`

const Button = styled.button`
/* Rectangle 27 */

box-sizing: border-box;

// height: 23px;

display: flex;
align-items: flex-end;
text-align: center;
justify-content : center;

background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;


/* Text */
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 13px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;

color: #000001;

${(props) => 
  props.about === "connect" &&
  css`
  width: 68px;

  `
}

${(props) => 
  props.about === "confirmed" &&
  css`
  width: 81px;

  `
}
`

function UserProfileBox() {

  


    const { isPending, data} = useGetUserData();
    const { isUpdating, upadateUser} = useEditUserData();

    const [editUsername, setEditUsername] = useState(false)
    const [editFirstName, setEditFirstName] = useState(false)
    const [editLastName, setEditLastName] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editEmail, setEditEmail] = useState(false)

    const [userInfo, setUserInfo] = useState({
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        phone_number: '',
    });


    useEffect(() => {
      if (data) {
          setUserInfo({
              email: data.email || '',
              username: data.username || '',
              first_name: data.first_name || '',
              last_name: data.last_name || '',
              phone_number: data.phone_number || '',
          });
      }
  }, [data]);

  if (isPending) return <div><SpinnerMini/></div>;

  const handleChange = (e: any) => {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
      upadateUser(userInfo, {
          onSuccess: (updatedData) => {
              // Update local state with the new user data
              setUserInfo(updatedData);
              setEditUsername(false)
              setEditFirstName(false)
              setEditLastName(false)
              setEditPhone(false)
              setEditEmail(false)      
          }
      });
  };

  return (
    <MainContainer dir="rtl">

    {/* HEADER */}
    <div className="flex justify-between"> 
    <Heading as="h1">
    <UserCircleIcon/>  
      مشخصات کاربری
      </Heading>
    </div>
    
  
    
    {/* BOX */}
    <StyledUserProfileBox>
      <ContentContainer>

        {/* RIGHT SIDE */}
        <RightSideContainer>

{/*   USERNAME */}
        <div>
          {
            editUsername?
            (     
            <Input
              type='text'
              name="username"
              // value={userInfo.username}
              defaultValue={data.username || ""}
              onChange={handleChange}
              onBlur={handleEdit}
              disabled={isUpdating}

          />)
          :
          (
            <>
             <Heading as="h2">نام کاربری
              <button  onClick={() => setEditUsername(true)}>
              <PencilIcon/>
              </button>
              </Heading>
              <div className="flex items-center gap-2">
              <P>{data.username}</P>      
          </div>
            </>
          )
          }
           
            </div>

{/* FIRST NAME */}
            
        <div>
          {
            editFirstName?
            (     
            <Input
              type='text'
              name="first_name"
              // value={userInfo.username}
              defaultValue={data?.first_name}
              onChange={handleChange}
              onBlur={handleEdit}
              disabled={isUpdating}

          />)
          :
          (
            <>
             <Heading as="h2">نام
              <button  onClick={() => setEditFirstName(true)}>
              <PencilIcon/>
              </button>
              </Heading>
              <div className="flex items-center gap-2">
              <P>{data?.first_name}</P>      
          </div>
            </>
          )
          }
           
        </div>


{/* LAST NAME */}

<div>
          {
            editLastName?
            (     
            <Input
              type='text'
              name="last_name"
              // value={userInfo.username}
              defaultValue={data.last_name}
              onChange={handleChange}
              onBlur={handleEdit}
              disabled={isUpdating}

          />)
          :
          (
            <>
             <Heading as="h2">نام خانوادگی
              <button  onClick={() => setEditLastName(true)}>
              <PencilIcon/>
              </button>
              </Heading>
              <div className="flex items-center gap-2">
              <P>{data.last_name}</P>      
          </div>
            </>
          )
          }
           
        </div>


{/* PHONE NUMBER */}
<div>
          {
            editPhone?
            (     
            <Input
              type='text'
              name="phone_number"
              // value={userInfo.username}
              defaultValue={data.phone_number}
              onChange={handleChange}
              onBlur={handleEdit}
              disabled={isUpdating}

          />)
          :
          (
            <>
             <Heading as="h2">شماره تماس
              <button  onClick={() => setEditPhone(true)}>
              <PencilIcon/>
              </button>
              </Heading>
              <div className="flex items-center gap-2">
              <P>{data.phone_number}</P>      
          </div>
            </>
          )
          }
           
        </div>  
       
          
        
        </RightSideContainer>


        {/* LEFT SIDE   */}
        <LeftSideContainer>
  {/* EMAIL */}
<div>
          {
            editEmail?
            (     
            <Input
            about="email"
              type='text'
              name="email"
              // value={userInfo.username}
              defaultValue={data.email}
              onChange={handleChange}
              onBlur={handleEdit}
              disabled={isUpdating}

          />)
          :
          (
            <>
             <Heading as="h2">ایمیل
              <button  onClick={() => setEditEmail(true)}>
              <PencilIcon/>
              </button>
              </Heading>
              <div className="flex items-center gap-2">
              <P>{data.email}</P>      
          </div>
            </>
          )
          }
           
        </div>  
         

          <div>
          <Heading as="h2">
            شماره کارت
          <div> <PencilIcon/> </div>
            </Heading>
            <P>6037997556567878</P>
          </div>
          


          <div>
            <Heading as="h2">اکانت های متصل</Heading>
            {/* <div className="flex flex-col gap-2"> */}
            <Acount about="username"> <TwitchTinyPic/> John.Doe <ConnectedIcon/></Acount>
            <Acount about="username"> <DiscordTinyPic/> John.Doe <ConnectedIcon/></Acount> 
            <Acount> <SteamTinyPic/> <Button about="connect">اتصال</Button></Acount>
            {/* </div> */}
          </div>
        </LeftSideContainer>

      </ContentContainer>
    </StyledUserProfileBox>
    </MainContainer>
  )
}

export default UserProfileBox