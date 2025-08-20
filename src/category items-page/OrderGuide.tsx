import styled, { css } from "styled-components"


const StyledOrderGuide = styled.section`
width : 80%;
margin: auto;

margin-top:320px;
margin-bottom : 200px;
`

const Heading = styled.h1`

display : flex;
flex-direction : column;
${(props) => 
    props.as === "h2" &&
    css`

    // راهنمای
    font-family: 'Peyda';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 63px;
    /* identical to box height, or 99% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: 'salt' on, 'ss01' on;
    
    color: #E9F5FC;

    `
}

${(props) => 
    props.as === "h1" &&
    css`

    // سفارش
    
    font-family: black;
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 63px;
    /* identical to box height, or 99% */
    display: flex;
    align-items: center;
    text-align: center;
    font-feature-settings: 'salt' on, 'ss01' on;


    // 268.01deg



    background: linear-gradient(268.01deg, #E9F5FC 51.71%, #88B7F9 97.82%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    

    `
}




${(props) => 
    props.as === "p" &&
    css`
    
    /* parag */
    font-family: 'Peyda';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 159% */
    display: flex;
    align-items: center;
    text-align: center;
    font-feature-settings: 'salt' on, 'ss01' on;
    
    color: rgba(233, 245, 252, 0.7);
    
    

    `
}


`
const Steps = styled.div`

display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
gap : 10px;
`
const StepsTitle = styled.h1`


/* 22-bold */
font-family: 'Peyda';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;
/* identical to box height */
text-align: center;

color: #FFFFFF;

margin-top : 20px;


`

const StepsDescription = styled.p`


/* info-text */
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
/* or 142% */
text-align: center;
font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(255, 255, 255, 0.6);


`
function OrderGuide() {
  return (
    <StyledOrderGuide dir="rtl">
        <Heading>
            <span className="flex gap-1 items-center justify-center">
            <Heading as="h2">راهنمای</Heading>
            <Heading as="h1">سفارش</Heading>

            </span>
            <Heading as="p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</Heading>
        </Heading>


        <div className="flex gap-2 mt-20">
            <Steps>
                <NumberOneIcon/>
                <StepsTitle>جستجو و انتخاب بازی</StepsTitle>
                <StepsDescription>
                    با استفاده از سرویس بازی‌های استیم SB Shop 
                    می‌توانید به بیش از ۱۰۰ هزار عنوان بازی دسترسی داشته باشید.
                </StepsDescription>
            </Steps>

            <Steps>
                <NumberTwoIcon/>
                <StepsTitle>انتخاب ریجن و افزودن به سبد خرید</StepsTitle>
                <StepsDescription>
                در صفحه محصول می‌توانید قیمت و وضعیت موجودی در شش ریجن 
                آمریکا، ترکیه، برزیل، روسیه، آرژانتین و چین را مشاهده فرمایید.
                </StepsDescription>
            </Steps>

            <Steps>
                <NumberThreeIcon/>
                <StepsTitle>پرداخت و تحویل محصول</StepsTitle>
                <StepsDescription>
                تبریک! محصول موردنظر شما با موفقیت به سبد خرید اضافه شد.
                 برای تکمیل خرید و پرداخت می‌توانید به صفحه سبد خرید مراجعه کنید.
                </StepsDescription>
            </Steps>

        </div>

    </StyledOrderGuide>
  )
}

export default OrderGuide


/********* ICONS ***********/
function NumberOneIcon() {
    return (
 <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_2205_760)"/>
        <mask id="mask0_2205_760" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="61" height="61">
        <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint1_radial_2205_760)"/>
        </mask>
        <g mask="url(#mask0_2205_760)">
        <path d="M18.901 30.792L16.021 21.32L30.229 15.624H39.253V61H28.245L28.181 28.68L18.901 30.792Z" fill="white"/>
        </g>
        <defs>
        <radialGradient id="paint0_radial_2205_760" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5) rotate(90) scale(61 42.8186)">
        <stop stop-color="#88B7F9"/>
        <stop offset="0.63" stop-color="#466BCD"/>
        <stop offset="0.8" stop-color="#2650C4"/>
        <stop offset="1" stop-color="#0534BA"/>
        </radialGradient>
        <radialGradient id="paint1_radial_2205_760" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5) rotate(90) scale(61 42.8186)">
        <stop stop-color="#88B7F9"/>
        <stop offset="0.63" stop-color="#466BCD"/>
        <stop offset="0.8" stop-color="#2650C4"/>
        <stop offset="1" stop-color="#0534BA"/>
        </radialGradient>
        </defs>
  </svg>
    )
}

function NumberTwoIcon() {
    return(
 <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_2205_770)"/>
        <mask id="mask0_2205_770" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="61" height="61">
        <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint1_radial_2205_770)"/>
        </mask>
        <g mask="url(#mask0_2205_770)">
        <path d="M16.8253 54.152L31.6733 36.872C32.9533 35.3787 33.9346 34.056 34.6173 32.904C35.3426 31.7093 35.7053 30.4933 35.7053 29.256C35.7053 25.928 33.8493 24.264 30.1373 24.264C28.7719 24.264 27.2999 24.3493 25.7213 24.52C24.1426 24.648 22.4786 24.8187 20.7292 25.032L17.1453 25.416L16.3133 16.904L19.0653 16.52C21.7533 16.0933 24.0359 15.7733 25.9133 15.56C27.7906 15.3467 29.6253 15.24 31.4173 15.24C36.9213 15.24 40.8466 16.3493 43.1933 18.568C45.5399 20.744 46.7133 24.008 46.7133 28.36C46.7133 30.8347 46.1586 33.16 45.0493 35.336C43.9826 37.4693 42.4893 39.6027 40.5693 41.736C38.6493 43.8267 35.7053 46.792 31.7373 50.632C31.7373 50.632 31.3746 50.9947 30.6493 51.72H47.6733V61H16.8253V54.152Z" fill="white"/>
        </g>
        <defs>
        <radialGradient id="paint0_radial_2205_770" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5) rotate(90) scale(61 42.8186)">
        <stop stop-color="#88B7F9"/>
        <stop offset="0.63" stop-color="#466BCD"/>
        <stop offset="0.8" stop-color="#2650C4"/>
        <stop offset="1" stop-color="#0534BA"/>
        </radialGradient>
        <radialGradient id="paint1_radial_2205_770" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5) rotate(90) scale(61 42.8186)">
        <stop stop-color="#88B7F9"/>
        <stop offset="0.63" stop-color="#466BCD"/>
        <stop offset="0.8" stop-color="#2650C4"/>
        <stop offset="1" stop-color="#0534BA"/>
        </radialGradient>
        </defs>
</svg>

    )
}

function NumberThreeIcon() {
    return(
 <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_2205_776)"/>
        <mask id="mask0_2205_776" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="61" height="61">
        <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint1_radial_2205_776)"/>
        </mask>
        <g mask="url(#mask0_2205_776)">
        <path d="M48.0465 47.624C48.0465 52.3173 46.5318 55.8373 43.5025 58.184C40.5158 60.488 36.3558 61.64 31.0225 61.64C29.5718 61.64 27.4172 61.4693 24.5585 61.128C21.7425 60.8293 18.9905 60.4453 16.3025 59.976L17.2625 51.272C20.5052 51.6133 23.2998 51.8907 25.6465 52.104C27.9932 52.3173 29.8918 52.424 31.3425 52.424C33.5612 52.424 35.0332 52.0827 35.7585 51.4C36.5265 50.6747 36.9105 49.416 36.9105 47.624C36.9105 45.5333 36.5905 44.0613 35.9505 43.208C35.3532 42.3547 34.2865 41.928 32.7505 41.928C30.8305 41.928 28.4838 42.6533 25.7105 44.104L20.7185 39.432C23.7052 37.2133 26.1798 35.72 28.1425 34.952C30.1052 34.184 32.0678 33.8 34.0305 33.8C43.3745 33.8 48.0465 38.408 48.0465 47.624ZM46.1905 23.56L25.7105 44.104L19.6305 38.472C20.9532 37.192 23.1078 34.9733 26.0945 31.816C28.7825 29 30.9585 26.7813 32.6225 25.16H16.7505V15.688H46.1905V23.56Z" fill="white"/>
        </g>
        <defs>
        <radialGradient id="paint0_radial_2205_776" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5) rotate(90) scale(61 42.8186)">
        <stop stop-color="#88B7F9"/>
        <stop offset="0.63" stop-color="#466BCD"/>
        <stop offset="0.8" stop-color="#2650C4"/>
        <stop offset="1" stop-color="#0534BA"/>
        </radialGradient>
        <radialGradient id="paint1_radial_2205_776" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5) rotate(90) scale(61 42.8186)">
        <stop stop-color="#88B7F9"/>
        <stop offset="0.63" stop-color="#466BCD"/>
        <stop offset="0.8" stop-color="#2650C4"/>
        <stop offset="1" stop-color="#0534BA"/>
        </radialGradient>
        </defs>
</svg>

    )
}