import { ACCESS_TOKEN, REFRESH_TOKEN } from "../shared/API/constants";
import api from "../shared/API/api";

export async function Login({email , password}: any) {
  // try {
      const res = await api.post("https://app.sbshop.ir/send-otp/",
         { email, password  }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
     console.log(res.data.error)
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      //   navigate("/" , { state: { email: email } });
        
        return res;
}

export async function signUp({username, password, email, phone} : any) {
  

      const response = await api.post('https://app.sbshop.ir/api/user/signup', {
          username: username,
          password: password,
          email: email,
          phone: phone
      }, {      
          headers: {
              'Content-Type': 'application/json'
          }
      });

      
          console.log( response.data);
          console.log( response.data.error);
          
          if(response.data.error === "email exists" || response.data.error === "username exists" ||  response.data.error === "phone exists" ){
              throw new Error(response.data.error)
          }

        
          return response;

}


export async function getCurrentUser() {
console.log("getCurrentUser called");

  const token = localStorage.getItem(ACCESS_TOKEN);
  if (!token) {
      throw new Error('No token');
  }

  return true; // User is authorized
  
}

export async function logout() {
// const queryClient = useQueryClient();

  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
  // queryClient.invalidateQueries({queryKey: ['user']});

}