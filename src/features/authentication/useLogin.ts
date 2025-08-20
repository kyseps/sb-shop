import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {Login as LoginApi} from "../../services/apiAuth"
import { useState } from "react";

export function useLogin() {
    const navigate = useNavigate();
  const [error, setError] = useState(false); // State to track error status


    const {mutate: Login, isPending } = useMutation({
        mutationFn: ({email, password}: any) => LoginApi({email, password}),

        

        onSuccess: (user) => {
            console.log(user)
            navigate("/", {replace: true});
            setError(false)
        },

        onError: (err) => {
            console.log("Error", err)
            // toast.error(" incorrect Email or password  ");
            setError(true)
        },

        
       
    });

    return{Login , isPending , error ,setError }
}
