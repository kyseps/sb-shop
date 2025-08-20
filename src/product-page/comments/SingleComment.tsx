import HandThumbDownIcon from "@/shared/icons/HandThumbDownIcon"
import HandThumbUpIcon from "@/shared/icons/HandThumbUpIcon"
import ReplyIcon from "@/shared/icons/ReplyIcon"
import { useState } from "react"
import styled, { css } from "styled-components"
import UserEmptyPicIcon from "./UserEmptyPicIcon"

const ContentContainer = styled.div`
display : flex;
gap : 20px;

width : 100%;

`

const ProfilePicture = styled.div`

& svg{
    width : 61px;
    height : 80px;
  }
`


const Name = styled.h1`

/* card-title */
font-family: 'Peyda';
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

const Comment = styled.p`

font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */
display: flex;
align-items: center;
text-align: justify;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.6);

`

const Number = styled.span`

${(props) => 
    props.about === "InActive" && 
    css`
    
    font-family: 'Peyda';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    // line-height: 24px;
    /* identical to box height, or 133% */
    
    color: rgba(255, 255, 255, 0.6);
    }
  
    `} 

    
${(props) => 
    props.about === "Active" && 
    css`
    
        font-family: 'Peyda';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        /* identical to box height, or 133% */


        color: #FFFFFF;


    }
  
    `} 

`

const Button = styled.button`
& svg{
    fill : white;
    // fill-opacity: 1;


    ${(props) => 
        props.about === "dislike" && 
        css`
    
    
        }
      
        `} 


        ${(props) => 
            props.about === "like" && 
            css`

            margin-top : -5px;
        
            }
          
            `}
}
`



type Props = {
    UserName : string,
    CommentText : string,
}

function SingleComment({UserName , CommentText} : Props) {
        // const [IsLiked , setIsLiked] = useState(false);
        const [countLike , setCountLike] = useState(0);
        const [countDisLike , setCountDisLike] = useState(0);
        // const [IsDisLiked , setIsDisLiked] = useState(false);
    
        
    
        const handleLike = () => {
            setCountLike ((countLike) => countLike + 1);
        }
    
    
        const handleDisLike = () => {
            setCountDisLike ((countDisLike) => countDisLike + 1);
        }
    
    
        const FormatNumber = (Number: any ) => {
            let FaNum = new Intl.NumberFormat('fa-IR').format(Number).replace(/\٬/g, "");
            return FaNum;
          }
          
  return (
    <ContentContainer>
    {/* LEFT  */}
    <ProfilePicture>
    <UserEmptyPicIcon/>

    </ProfilePicture>



    {/* RIGHT  */}
    <div className="flex  flex-col gap-2 w-full mb-7">

        <div className="flex justify-between">
        <Name>{UserName}</Name>
        
        <div className="flex items-center justify-center gap-8">


            {/*  className="flex flex-row justify-center items-center" */}
          
            {/* DISLIKE */}
            <div className="flex gap-3" >
            <Number about="Active">{FormatNumber(countLike)}</Number>
            <Button onClick={handleLike} about="dislike"><HandThumbDownIcon/></Button>
            </div>



            {/* LIKE */}
            <div className="flex gap-3" >
            <Number about="InActive">{FormatNumber(countDisLike)}</Number>
            <Button onClick={handleDisLike} about="like"><HandThumbUpIcon/></Button>
            </div>
            
            
           <button><ReplyIcon/></button> 
        </div>

        </div>


        <Comment>
            {CommentText}
        </Comment>

    </div>

</ContentContainer>
  )
}

export default SingleComment