import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // queryClient.invalidateQueries({queryKey: ['user']});
      queryClient.removeQueries();
      // queryClient.removeQueries({queryKey: ['user']});

      setTimeout(() => {
        // navigate(location.pathname, { replace: true });
        navigate(location.pathname, { replace: true });
        window.location.reload();
      }, 100);
    },
    onSettled: () => {
      // queryClient.removeQueries({queryKey: ['user']})
    },
  });

  return { logout, isPending };
}