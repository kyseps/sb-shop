// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { editUserData } from "../../services/apiUserData"; // Adjust the import path
// import toast from "react-hot-toast";

// export function useEditUserData() {
//   const queryClient = useQueryClient();

//     const {isPending, data, error} = useMutation({
//         mutationFn: editUserData,
//         onSuccess: () => {
//             // Optional: Invalidate queries or perform additional actions on success
//             // e.g., queryClient.invalidateQueries(['userData']);
//             toast.success("Setting successfully edited");
//             queryClient.invalidateQueries({ queryKey: ["userData"] });
//         },
//         onError: (error) => {
//             console.error("Edit failed:", error.message);
//             toast.error(error.message)
//         },
//     });

//     return {isPending, data, error}
// }


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserData } from "../../services/apiUserData"; // Adjust the import path
import toast from "react-hot-toast";

export function useEditUserData() {
    const queryClient = useQueryClient();
    const {mutate: upadateUser,  isPending : isUpdating} = useMutation({
        mutationFn: editUserData,
        onSuccess: () => {                                  
            // toast.success("Setting successfully edited");
            queryClient.invalidateQueries({ queryKey: ["userData"] });
        },
        onError: (error) => {
            console.error("Edit failed:", error.message);
            toast.error(error.message)
        },
    });

    return {isUpdating, upadateUser}
}