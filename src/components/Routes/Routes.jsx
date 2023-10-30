import { Navigate } from "react-router-dom";
import {useAppContext} from "../../contexts/AppContext";

export const ProtectedRouteElementForUnauthorizedUser = ({
  element,
}) => {
  const { isLoggedIn } = useAppContext();
  return isLoggedIn ? element : <Navigate to="/" replace />;
};
