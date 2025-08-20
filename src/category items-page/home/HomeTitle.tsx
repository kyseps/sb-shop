import styled, { css } from "styled-components"

const StyledHomeTitle = styled.div`
width : 74%;
margin:auto;
margin-top : 100px;

// border: 1px solid red;



`

const Text = styled.p`
font-style: normal;

${(props) => 
  props.as === "h1" &&
  css`
  /* بازی های استیم */
  font-family: black;


/* hero */

font-weight: 900;
font-size: 64px;
line-height: 63px;
/* identical to box height, or 99% */
display: flex;
align-items: center;
text-align: right;
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

color: #E9F5FC;

// margin-bottom : 20px;


  `
}


${(props) => 
  props.as === "p" &&
  css`
  /* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است */
  font-family: 'Peyda';

  
  /* parag */
 
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 159% */
  display: flex;
  align-items: center;
  text-align: right;
  font-feature-settings: 'salt' on, 'ss01' on;
  // opacity : 0.9;
  
  color: rgba(233, 245, 252, 0.7);
  
  margin-top : 30px;
  `
}

`
function HomeTitle() {
  return (
    <StyledHomeTitle dir="rtl">
      <Text as="h1">بازی های استیم</Text>
      {/* <Text as="p"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
       از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
       </Text> */}
        
    </StyledHomeTitle>
  )
}

export default HomeTitle