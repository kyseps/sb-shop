import { useEffect, useState } from 'react'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/shared/API/constants'
import { jwtDecode } from 'jwt-decode'
import api from './API/api'



function IsAuth() {

    const [isAuthorized , setIsAuthorized] = useState<any>(null)

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    } , [])

   async function refreshToken () {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            const res = await api.post("/user/token/refresh/" , {refresh: refreshToken})
            if(res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN , res.data.access)
                setIsAuthorized(true)
            }
            else {
                setIsAuthorized(false)
            }
        } catch (error){
            console.log(error)
            setIsAuthorized(false)
        }
    }

    async function auth () {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000

        if (tokenExpiration && tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }

    }

    if(isAuthorized === null){
        return <div>Loading...</div>
    }


  return (
    <div>IsAuth</div>
  )
}

export default IsAuth