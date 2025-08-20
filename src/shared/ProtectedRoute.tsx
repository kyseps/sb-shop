import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "./ui/Spinner";

const FullPage = styled.div`
  // height: 100vh;
  // background-color: "red";
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({children}: any) {
const {isPending, isAuthorized} = useUser()

console.log(isPending)

console.log(isAuthorized)



    if (isPending) {
        return <FullPage><Spinner/></FullPage>;
    }

    if (isAuthorized === null) {
      return <FullPage>hi</FullPage>;
  }

    return isAuthorized? children : <Navigate to="/login" />

}

export default ProtectedRoute