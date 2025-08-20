import styled from "styled-components"

import SingleComment from "./SingleComment"

const TableRow = styled.div`
width : 100%;

display : flex;
flex-direction : column;
margin-top  : 20px;
`

const MainComment = styled.div`
`

const Reply = styled.div`
display : flex;
gap : 30px;
 

 `
const Line = styled.div`
/* Line 1 */
// height : 500px;
height : full;
margin-top : -30px;
margin-bottom : -10px;
// width :0;

margin-right : 28px;
// margin-top : 50px;
// margin-right : -40px;

// border : 1px solid green;
border-right: 3px solid rgba(87, 87, 87, 0.22);



}
`

function CommentsUI() {

  return (
    <>

        <TableRow>
        {/* Main Comment */}
        <MainComment>
            <SingleComment 
            CommentText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            UserName = "علی احمدی"
            />
        </MainComment>

        

        {/* REPLY */}

        <Reply>

            <Line></Line>


        <div>
            <SingleComment
             CommentText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
             UserName = "علی احمدی"
            />

            <SingleComment
             CommentText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
             UserName = "مرتضی غلامی"
            />

        </div>
       

        </Reply>

        </TableRow>


        {/* ANOTHER COMMENT */}
        <TableRow>
              {/* Main Comment */}
        <MainComment>
            <SingleComment 
            CommentText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            UserName = "علی احمدی"
            />
        </MainComment>
        </TableRow>
    </>
  )
}

export default CommentsUI
