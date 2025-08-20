import api from "../shared/API/api";



export async function getUserData() {
    try{
        const res = await api.get("https://sbshop.ir/user/profile/");

        if (res.data.error || !res.data) {
            throw new Error("Something went wrong!");
        }
    
        console.log(res.data); // Log the response data
        return res.data; // Return the actual user data
    }catch(error: any){
        console.log(error.message)
        throw error;
    }


}


export async function editUserData(userData : any) {
  try {
      const response = await api.post('https://sbshop.ir/user/profile/', 
          userData,
          {      
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      ); // Use POST for updating user data

      console.log(response.data)
      if (response.data.error) {
          throw new Error("Something went wrong!");
      }

      return response.data; // Return the updated user data
  } catch (error: any) {
      console.error(error.message);
      throw error; // Rethrow the error to be handled by React Query
  }
}
