import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../shared/API/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../shared/API/constants";

function useUser2() {
    const [isAuthorized, setIsAuthorized] = useState<any>(null);
    const [userData, setUserData] = useState<any>([]);


    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/user/token/refresh/", { refresh: refreshToken });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }

        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration && tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }

        console.log(token)
    };


    
   
    const getUserData = async () => {
          try {
            const res = await api.get("https://sbshop.ir/user/profile/");
            setUserData(res.data);
            // setLoading(false);
          //   console.log(res.data)
          } catch (error : any) {
            console.error(error.message);
            // return null;
          } finally {
          }
        };
      
        useEffect(() => {
          getUserData();
      }
    , []);
    


    return { isAuthorized, auth , userData , getUserData}


}

export default useUser2