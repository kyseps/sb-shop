import { useMutation } from "@tanstack/react-query";
import { signUp as signUApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function useSignup() {
    const navigate= useNavigate();

    const [usernameExistsError, setUsernameExistsError] = useState(false);
    const [emailExistsError, setEmailExistsError] = useState(false);
    const [phoneExistsError, setPhoneExistsError] = useState(false);

    const {mutate: signup, isPending } = useMutation({
        mutationFn: signUApi,

        // recieve newly created user as data
        onSuccess: (user) => {
            console.log(user)
            toast.success("اکانت شما با موفقیت ساخته شد");
            navigate("/login")
        },

        onError: (err : any) => {
            console.log(err)
            toast.error(err.message)

            if(err.message === "username exists"){
                setUsernameExistsError(true)
            }else{setUsernameExistsError(false)}


            if(err.message === "email exists"){
                setEmailExistsError(true)
              }else {
                setEmailExistsError(false)
    
              }
    
    
              if(err.message === "phone exists"){
                setPhoneExistsError(true)
              }else{
                setPhoneExistsError(false)
              }


        }

        
    });

    return { signup, isPending , usernameExistsError, emailExistsError, phoneExistsError}
}