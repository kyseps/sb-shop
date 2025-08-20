import styled from "styled-components"
import PS from "./PS"
import InstagramIcon from "./feature/InstagramIcon"
import WhatsAppIcon from "./feature/WhatsAppIcon"
import TwitterIcon from "./feature/TwitterIcon"
import DiscordIcon from "./feature/DiscordIcon"
import SamandehiLogo from "./feature/samandehiLogo.png"
import eNamadLogo from "./feature/eNamadLogo.png"

const StyledFooter = styled.footer`
width : 80%;
margin : auto;
`

const StyledFooterBox = styled.div`
/* Rectangle 21 */

box-sizing: border-box;

width: 100%;

// height : 483px;
margin : auto;
margin-bottom : 20px;

// padding : 15% 50%; 


border-radius: 50px;


/* glass */
// background: white;
background : linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0) 100%);
backdrop-filter: blur(20px);
/* Note: backdrop-filter has minimal browser support */



/* border */

border : double 2px transparent;
background-image: linear-gradient(180deg, #13141C 0%, rgba(0, 0, 1, 0) 100%), //origin background
linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;
`

const MainHeader = styled.h1`
font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 32px;
/* identical to box height, or 99% */
// display: flex;
// align-items: center;
// text-align: right;
font-feature-settings: 'salt' on;

/* blue-verylight */
color: #E9F5FC;

`

const AddresAndnumber = styled.div`
width: 350px; 
margin-top : 18px;


/* ۰۲۱-۹۱۳۰ ۶۹۶۱ تهران، تهرانپارس، خیابان امیری، کوچه 2، پلاک 223 */

// width: 100%;
// height: 46px;


font-family: peyda;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
/* or 142% */
// display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on, 'ss01' on;

/* blue-verylight */
color: #E9F5FC;

opacity: 0.6;

letter-spacing: 0.5px;

`

const P = styled.a`
/* ۰۲۱-۹۱۳۰ ۶۹۶۱ تهران، تهرانپارس، خیابان امیری، کوچه 2، پلاک 223 */

// width: 100%;
// height: 46px;


font-family: peyda;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
/* or 142% */
display: flex;
align-items: center;
text-align: right;
font-feature-settings: 'salt' on, 'ss01' on;

/* blue-verylight */
color: #E9F5FC;

opacity: 0.6;

letter-spacing: 0.5px;


&:hover{
  position : relative;
  cursor : pointer;
  // margin-right : 5px;
  background : none;
  // position: relative;

  display : flex;
  //  margin-right : 5px;
  transform: translateX(-5px);
  transition: transform 0.3s;

}

 &:hover::before{
   content : "";


   width : 8px;
   height : 8px;
   transition: all 0.5s;

   /* Ellipse 1 */

   position: absolute;
   left: 106.69%;
 
   
   background: #FFC744;
   filter: blur(5px);
   

 
 }


`

const Header = styled.h2`

// position: absolute;
// width: 207.34px;
// height: 28px;
// left: 1311.66px;
// top: 5142px;

/* 22-bold */
font-family: 'Peyda';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;

/* blue-verylight */
color: #E9F5FC;

`

const ContextContainer  = styled.div`
display : flex;
flex-direction : row;


margin-right : auto;
margin-left : auto;
width : 90%;

`

const Footer = () => {
  return (
    <StyledFooter>
      {/* <Border> */}
<StyledFooterBox>

  <ContextContainer>
    {/*ارتباط با ما*/}
    <div dir="rtl" className="basis-1/4 items-center py-20">
      <MainHeader>ارتباط با ما</MainHeader>


      {/* آدرس  و شماره تلفن */}
      <AddresAndnumber>
      <p>۰۲۱-۹۱۳۰۶۹۶۱</p>
      <p>تهران، تهرانپارس، خیابان امیری، کوچه 2، پلاک 223</p>
      </AddresAndnumber>


      {/* لوگوی سوشیال مدیا */}
      <div className="flex gap-6 mt-8">
      <WhatsAppIcon href="#"/>
      <TwitterIcon href="#" />
      <DiscordIcon href="#" />
      <InstagramIcon href="#"/>
      </div>


      {/*  لوگو نماد و ساماندهی */}
      <div className="flex gap-8 mr-4 mt-5">
        <img src={eNamadLogo}/>
        <img src={SamandehiLogo} />
      </div>        
   
    </div>





       {/* صفحات پرکاربرد*/}
    <div dir="rtl" className="basis-3/4 items-center py-20">
      <MainHeader>صفحات پرکاربرد</MainHeader>
      <div className="flex flex-wrap gap-20 mt-12">
        {/* 1 */}
        <div className="flex flex-col gap-3">
        <Header>خدمات مشتریان</Header>
        <P>حساب کاربری</P>
        <P>حساب کاربری</P>
        <P>حساب کاربری</P>
        <P>حساب کاربری</P>
        <P>حساب کاربری</P>
        <P>حساب کاربری</P>
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-3">
        <Header>همراه با ما</Header>
        <P href="#">صفحه اصلی</P>
        <P>لیست محصولات</P>
        <P>استریمر ها</P>
        <P>درباره ما</P>
        </div>

      {/* 3 */}
        <div  className="flex flex-col gap-3">
        <Header>لینک های مهم</Header>
        <P>شرایط استفاده</P>
        <P>حریم خصوصی</P>
        <P>پرسش های متداول</P>
        <P>تماس با ما</P>
        <P>تخفیف ها</P>
        </div>
        

      </div>

    </div>


  </ContextContainer>

</StyledFooterBox>
    {/* </Border> */}

    <PS/>
    </StyledFooter>
  
    
  )
}

export default Footer