import styled from "styled-components"
import CommentIconYellow from "@/shared/icons/CommentIconYellow"
import CommentsUI from "./CommentsUI"
import CreateCommentForm from "./CreateCommentForm"

const StyledComments = styled.section`


/** for responsive **/
// display : flex;
flex-direction : row;
// align-item : center;
justify-content : center;
gap : 30px;
flex-wrap: wrap;

margin-top : 50px;
margin-bottom : 50px;
`

const Container = styled.div`

display : flex;
flex-direction : column;
// gap : 20px;

`

const Heading = styled.div`

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 32px;
/* identical to box height, or 145% */
display: flex;
gap : 10px; 
align-items: center;
text-align: right;
font-feature-settings: 'salt' on;

/* blue-verylight */
color: #E9F5FC;


`

const Comments = () => {
  return (
    <StyledComments dir="rtl">
        <Container>

            <Heading>
                <CommentIconYellow/>
                <span>نظرات</span>
            </Heading>

            <CommentsUI/>

            <CreateCommentForm/>

        </Container>

    </StyledComments>
  )
}

export default Comments