import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
    
    const {isPending, data: isAuthorized} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    },
    
    )

    return {isPending, isAuthorized}
}