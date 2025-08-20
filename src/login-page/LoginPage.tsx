import SpinnerMini from "@/shared/ui/SpinnerMini"
import styled from "styled-components"
import { useForm } from 'react-hook-form';
import axios from 'axios'



const Body = styled.div`
 height: 100vh; /* Use viewport height */
    // width: 100vw; /* Use viewport width */
    background: black;

    display: flex;
    align-items: center;
    justify-content: center;
    

    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    overflow: hidden; /* Prevent scrolling */
     box-sizing: border-box;

`

const StyledLoginBox = styled.div`

width: 507px;

background: radial-gradient(123.17% 132.38% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%);
border-radius: 50px;


/* border */

border : double 2px transparent;
background-image: radial-gradient(123.17% 132.38% at 50.04% 0%, #3865E4 0%, #0534BA 22%, rgba(0, 0, 1, 0) 100%), //origin background
linear-gradient(180deg, rgba(5, 52, 186, 0.4) 0%, rgba(87, 87, 87, 0.088) 100%); //border
background-origin: border-box;
background-clip: content-box, border-box;
r-box;
background-clip: content
`
const ContentContainer = styled.div`
padding : 2rem ;
padding-top : 0.8rem;
display : flex;
flex-direction : column;
align-items: center;
gap : 45px;
`

const LoginForm = styled.form`
display:flex;
flex-direction : column;
gap : 20px;
`
const Heading = styled.h1`

margin-bottom : 10px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 63px;
/* or 198% */
letter-spacing: -0.03em;
font-feature-settings: 'salt' on;

color: #FFFFFF;


`
const Intro = styled.p`
font-family: 'Peyda';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;

font-feature-settings: 'salt' on, 'ss01' on;

color: rgba(233, 245, 252, 0.7);


`

const Input = styled.input`
width: 408px;
height: 41px;

background: rgba(87, 87, 87, 0.22);
border-radius: 10px;


&:focus {
outline : none;
}

/* info-text */
font-family: medium;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;

color: #FFFFFF;

border : double 2px transparent;
    background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(87, 87, 87, 0.22) 100%), //origin background
    linear-gradient(180deg, rgba(233, 245, 252, 0.168) 0%, rgba(87, 87, 87, 0.088) 100%);//border
    background-origin: border-box;
    background-clip: content-box, border-box;  

text-indent: 10px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    // -webkit-transition-delay: 9999s;
    // -webkit-transition-property: background-color, color;
    // -webkit-box-shadow: 0 0 0px 1000px rgba(87, 87, 87, 0.22) inset;
    border : 1px solid rgba(233, 245, 252, 0.168);
    //  -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;

  }
`
const LoginButton = styled.button`

width: 409px;
height: 41px;

background: radial-gradient(101.87% 145.12% at 50% 0%, #FFD87E 0%, #FFC744 52.5%, #DB873A 80%, #D2853D 100%);
border-radius: 10px;

font-family: black;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 23px;


color: #000001;


align-items : center;
display:flex;
justify-content:center;
`;


import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();
  React.useEffect(() => {
    document.body.style.background = 'black';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  const { register, handleSubmit, resetField, formState: { errors } } = useForm();
  const [isPending, setIsPending] = React.useState(false);
  const [step, setStep] = React.useState<'email' | 'otp'>('email');
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState("");

  // Handle form submit
  const onSubmit = async (data: { email?: string; otp?: string }) => {
    setIsPending(true);
    setError(null);
    setSuccess(false);
    if (step === 'email') {
      try {
        await axios.post('https://app.sbshop.ir/api/send-otp', { email: data.email });
        setEmail(data.email || "");
        setStep('otp');
        setSuccess(true);
        resetField("email");
      } catch (err) {
        setError("ارسال کد با خطا مواجه شد. لطفا ایمیل معتبر وارد کنید.");
      } finally {
        setIsPending(false);
      }
    } else if (step === 'otp') {
      try {
        const res = await axios.post('https://app.sbshop.ir/api/verify-otp', { email, otp: data.otp });
        if (res.data && res.data.success && res.data.data && res.data.data.token) {
          // Save token in localStorage with 6 hours expiry
          const token = res.data.data.token;
          const expiresAt = Date.now() + 6 * 60 * 60 * 1000; // 6 hours in ms
          localStorage.setItem('sbshop_token', token);
          localStorage.setItem('sbshop_token_expires', expiresAt.toString());
          setSuccess(true);
          setError(null);
        navigate("/");
        } else {
          setError("ورود موفقیت آمیز نبود. لطفا دوباره تلاش کنید.");
        }
      } catch (err) {
        setError("کد وارد شده صحیح نیست یا منقضی شده است.");
      } finally {
        setIsPending(false);
      }
    }
  };

  return (
    <Body>
      <StyledLoginBox dir="rtl">
        <ContentContainer>
          <div className="flex flex-col gap-5">
            <p>
              <Heading>ورود</Heading>
              <Intro>سلام!</Intro>
              {step === 'email' ? (
                <Intro>لطفا ایمیل خود را وارد کنید تا کد یکبار مصرف برای شما ارسال شود</Intro>
              ) : (
                <Intro>کد ارسال شده به ایمیل خود را وارد کنید</Intro>
              )}
            </p>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              {step === 'email' ? (
                <>
                  <Input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="ایمیل"
                    {...register("email", {
                      required: "ایمیل ضروری است",
                      pattern: {
                        value: /\S+@\S+\.\S+/, 
                        message: "لطفا یک ایمیل معتبر وارد کنید"
                      }
                    })}
                    style={{ borderColor: errors.email ? "red" : "" }}
                    disabled={isPending}
                  />
                  {errors.email && <Intro style={{ color: 'red' }}>{errors.email.message?.toString()}</Intro>}
                </>
              ) : (
                <>
                  <Input
                    type="text"
                    id="otp"
                    maxLength={6}
                    autoComplete="one-time-code"
                    placeholder="کد ۶ رقمی"
                    {...register("otp", {
                      required: "کد ضروری است",
                      pattern: {
                        value: /^\d{6}$/,
                        message: "کد باید ۶ رقم باشد"
                      }
                    })}
                    style={{ borderColor: errors.otp ? "red" : "" }}
                    disabled={isPending}
                  />
                  {errors.otp && <Intro style={{ color: 'red' }}>{errors.otp.message?.toString()}</Intro>}
                </>
              )}
              <LoginButton type='submit' disabled={isPending}>
                {isPending ? <SpinnerMini /> : <span>{step === 'email' ? 'ارسال کد' : 'ارسال'}</span>}
              </LoginButton>
            </LoginForm>
            {success && step === 'email' && <Intro style={{ color: 'green' }}>کد با موفقیت ارسال شد!</Intro>}
            {success && step === 'otp' && <Intro style={{ color: 'green' }}>ورود موفقیت آمیز بود!</Intro>}
            {error && <Intro style={{ color: 'red' }}>{error}</Intro>}
          </div>
        </ContentContainer>
      </StyledLoginBox>
    </Body>
  );
}

export default LoginPage
