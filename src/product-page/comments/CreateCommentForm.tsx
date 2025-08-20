import styled from "styled-components"

const StyledCreateCommentForm = styled.div`
display : flex;
flex-direction : column;
gap : 20px;

margin-top : 50px;
`
const Heading = styled.h1`
/* نظر خود را ثبت کنید */



/* card-title */
font-family: black;
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

const NameBox = styled.input`
width: 386px;
height: 30px;

background: rgba(87, 87, 87, 0.22);
border-radius: 10px;

border: 2px solid rgba(87, 87, 87, 0.088) ;

/* نام شما */


font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height */
display: flex;
padding : 10px;

color: rgba(255, 255, 255, 0.6);


&:focus{
    outline: none;
  }


`

const EmailBox = styled.input`
/* Frame 70 */

box-sizing: border-box;

// position: absolute;
width: 386px;
height: 30px;
left: 808px;
top: 2493px;

background: rgba(87, 87, 87, 0.22);


border: 2px solid rgba(87, 87, 87, 0.088) ;

border-radius: 10px;


/* ایمیل */



font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height */
display: flex;
// text-align : right;
padding : 10px;
// align-items: flex-end;
// text-align: center;

color: rgba(255, 255, 255, 0.6);


&:focus{
    outline: none;
  }



`
const Commentbox = styled.input`
/* Frame 71 */

box-sizing: border-box;

// position: absolute;
// width: 792px;
height: 122px;

background: rgba(87, 87, 87, 0.22);
border: 2px solid rgba(87, 87, 87, 0.088) ;

border-radius: 10px;

/* نظر خود را بنویسید! */


font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
// line-height: 20px;
/* identical to box height */
display: flex;
align-items: flex-top;
text-align: right;
justify-content : start;

color: rgba(255, 255, 255, 0.6);

padding : 10px;


&:focus{
    outline: none;
  }


//   margin-bottom: 0;
//   padding-bottom: 0;
  line-height: 1em;

`

const Button = styled.button`
/* Rectangle 27 */

box-sizing: border-box;

width: 101px;
height: 41px;


background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;


font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
justify-content : center;

color: #000001;


`

function CreateCommentForm() {
  return (
    <StyledCreateCommentForm>
        <Heading>نظر خود را ثبت کنید</Heading>

        <div className="flex gap-5 flex-wrap">
            <NameBox type="text" placeholder="نام شما"></NameBox>
            <EmailBox type="text" placeholder="ایمیل "></EmailBox>
        </div>

        <Commentbox type="text" placeholder="نظر خود را بنویسید!"></Commentbox>

        <div dir="ltr">
        <Button>ثبت</Button>
        </div>

    </StyledCreateCommentForm>
  )
}

export default CreateCommentForm