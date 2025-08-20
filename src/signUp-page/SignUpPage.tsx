import styled from "styled-components"
import { useSignup } from "@/features/authentication/useSignup"
import { useForm } from "react-hook-form"
import SpinnerMini from "@/shared/ui/SpinnerMini"
import { Link } from "react-router-dom"
import { useEffect } from "react"


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

const SignUpForm = styled.form`
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
const SignupButton = styled.button`

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

`
function SignUpPage() {

  useEffect(() => {
    // Apply the unique background with repeat
    document.body.style.background = 
 'black';


    // Cleanup to reset the background when component unmounts
    return () => {
      document.body.style.background = '';
    };
  }, []);

   // custom hook for signUP
   const {signup, isPending , usernameExistsError, emailExistsError, phoneExistsError} 
   = useSignup();
   // const { register, formState: {errors}, getValues, handleSubmit, reset } = useForm();
   const { register, handleSubmit, resetField, formState: { errors }, getValues } = useForm();
  
   const onSubmit = async (
    {username, email, password, phone} : any) => {
    // e.preventDefault();

    signup(
      {username, email, password, phone},
     
      {onSettled: () => {
        resetField("password"),
        resetField("passwordConfirm")
      } },
      
      
    )

   }

  return (
    <Body>
        <StyledLoginBox dir="rtl">
            <ContentContainer>

            <div className="flex flex-col gap-5">

                <p>
                    <Heading>عضویت</Heading>
                    <Intro>سلام!</Intro>
                    <Intro>لطفا اطلاعات خواسته شده را تکمیل کنید</Intro>
                </p>


                <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type='text'
                            id="username"
                            {...register("username", {required: "نام کاربری  ضروری است",})}
                            placeholder='نام کاربری'
                            style={{borderColor:errors.username? "red" : "" }}

                            />
  {usernameExistsError&& <Intro style={{ color: 'red' }}>نام کاربری وجود دارد</Intro>}
  {errors.username && <Intro style={{ color: 'red' }}>{errors.username.message?.toString()}</Intro>}        


                        <Input
                             type='email'
                             id='email'
                             placeholder='ایمیل'
                             {...register("email", {required: "ایمیل ضروری است" ,
                                pattern:{
                                 value:  /\S+@\S+\.\S+/,
                                 message: "Please write a valid email address"
                                } })}
                             style={{borderColor:errors.email? "red" : "" }}
                        />
{emailExistsError&& <Intro style={{ color: 'red' }}>ایمیل وجود دارد</Intro>}
{errors.email && <Intro style={{ color: 'red' }}>{errors.email.message?.toString()}</Intro>}




                        <Input
                          type='text'
                          id="phone"
                          placeholder='شماره تلفن'
                          {...register("phone" , {
                            required: "شماره تلفن ضروری است",
                           
                          })}
                          style={{borderColor:errors.email? "red" : "" }}
                        />

{phoneExistsError && <Intro style={{ color: 'red' }}>شماره تلفن وجود دارد</Intro>}
{errors.phone && <Intro style={{ color: 'red' }}>{errors.phone.message?.toString()}</Intro>}



                        <Input
                         type='password'
                         id="password"
                         {...register("password", {
                           required:"لطفا  رمز عبور را وراد کنید",
                         })}
                         placeholder=' رمز عبور'
                         style={{borderColor:errors.email? "red" : "" }}
                         /> 

{errors.password && <Intro style={{ color: 'red' }}>{errors.password.message?.toString()}</Intro>}


                         <Input
                            type='password'
                            id="passwordConfirm"
                            {...register("passwordConfirm", {
                              required:"اینجا نمیتواند خالی باشد",
                              validate: (value) => 
                                value === getValues().password || "پسورد همخوانی ندارد"
                            })}
                            placeholder='تکرار رمز عبور'
                            style={{borderColor:errors.email? "red" : "" }}
                            /> 
{errors.passwordConfirm && <Intro style={{ color: 'red' }}>{errors.passwordConfirm.message?.toString()}</Intro>} 

                        <SignupButton type='submit'>
                  {isPending? <SpinnerMini/> : <span>عضویت</span>}  

                        </SignupButton>

                        
                <Link to="/login">
                <Intro>حساب کاربری دارید؟</Intro>
                </Link>

                    </SignUpForm>
                </div>
            </ContentContainer>
        </StyledLoginBox>
    
    </Body>
  )
}

export default SignUpPage

