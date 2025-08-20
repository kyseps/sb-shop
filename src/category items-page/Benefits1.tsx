import GlobeWithMapIcon from "@/shared/icons/GlobeWithMapIcon"
import LayerStackIcon from "@/shared/icons/LayerStackIcon"
import LinkIcon from "@/shared/icons/LinkIcon"
import RepeatIcon from "@/shared/icons/RepeatIcon"
import styled, { css } from "styled-components"

const StyledBenefits1 = styled.div`

width : 80%; 
margin : auto;

display : flex;
// flex-direction : row;
flex-wrap : wrap;
color :white;
// align-items: right;
// justify-content : center;

// margin-bottom : 20px;
margin-top : 80px;

& svg{
    width : 50px;
}

`

const BenefitsItem = styled.div`
flex-basis : 25%;

display : flex;
flex-direction : column;
flex-wrap: wrap;
gap : 15px;
align-items: center;
justify-content : center;
`

const Text = styled.p`
${(props) =>
    props.as === "h1" &&
    css`
    /* ارتباط مستقیم */

    font-family: 'Peyda';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    /* identical to box height */
    text-align: center;

    color: #FFFFFF;
    
    margin-bottom : 5px;
    `
}

${(props) =>
    props.as === "p" &&
    css`
    /* با استیم */

    
    /* info-text */
    font-family: 'Peyda';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    /* identical to box height, or 142% */
    text-align: center;
    font-feature-settings: 'salt' on, 'ss01' on;
    
    color: rgba(255, 255, 255, 0.6);
    
    
    `
}
 
`
function Benefits1() {
  return (
    <StyledBenefits1 dir="rtl">

        <BenefitsItem>
            <LinkIcon/>
            <p>
            <Text as="h1">ارتباط مستقیم</Text>
            <Text as="p">با استیم</Text>
            </p>
        </BenefitsItem>

        <BenefitsItem>
            <LayerStackIcon/>
            <p>
            <Text as="h1">تنوع بالا</Text>
            <Text as="p">هزاران بازی و DLC</Text>
            </p>
        </BenefitsItem>


        <BenefitsItem>
            <RepeatIcon/>
            <p>
            <Text as="h1">قیمت های بروز</Text>
            <Text as="p">بروزرسانی روزانه قیمت‌ها</Text>
            </p>
        </BenefitsItem>


        <BenefitsItem>
            <GlobeWithMapIcon/>
            <p>
            <Text as="h1">تنوع ریجن</Text>
            <Text as="p">امکان خرید برای شش ریجن</Text>
            </p>
        </BenefitsItem>
   
    </StyledBenefits1>
  )
}

export default Benefits1