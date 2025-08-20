import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/apiUserData";

export function useGetUserData() {
    
    const { isPending, data } = useQuery({
        queryKey: ["userData"],
        queryFn: getUserData,
    },
);

    return { isPending, data }; // Return the loading state, data, and error
}




