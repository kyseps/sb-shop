import styled from "styled-components"

const Container = styled.div`
/* Rectangle 26 */

box-sizing: border-box;

position: absolute;
left: 5%;
top: auto;
right : 5%;
bottom: 0%;

 width: 90%;
 height: 55px;

margin : auto;
margin-top : -50px;

/* item-list-bg */
// background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 15px;

`

const Border = styled.div`

padding : 2px 2px 2px 2px;
background :linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);

/* Note: backdrop-filter has minimal browser support */

border-radius: 15px;
`

const StyledMembership = styled.div`

 width: 100%;
 height: 50px;


/* item-list-bg */
background: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0.41) 100%);
border-radius: 15px;


display : flex;
justify-content: space-between;
align-items : center;
`

const Form = styled.form`
width : 78%;
background : none;
border:none;

`
const Input =styled.input`

 width: 80%;
 height: 50px;

margin : auto;
margin-left : 15px;
margin-top : 5px;

background : none;
border-radius: 15px;



&:focus
{
  outline: none;
  background : none;
  border : none;
}

&:active
{
  outline: none;
  background : none;
  border : none;
}


&:hover
{
  outline: none;
  background : none;
  border : none;
}


/* info-text */
font-family: medium;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;

color: #FFFFFF;

opacity: 0.6;
`
const ButtonMemberShip = styled.button`

width : 22%;
height: 41px;


margin-right : 5px;

background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;


font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;

color: #000001;
`


function Membership() {
  return (
    
 
                  <Container>

                    <Border>
                      <StyledMembership>

                  

                      <Form>
                      <Input type="text" name="Email" placeholder="example.mail@Gmail.com" autoComplete="off"/>
                      </Form>
                  
                      <ButtonMemberShip>عضویت</ButtonMemberShip>
                      
                        
                      </StyledMembership>
                     

                    
                    </Border>
                    
                  </Container>
  
  )
}

export default Membership