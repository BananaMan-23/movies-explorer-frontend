import { Navigate } from "react-router-dom";

export const ProtectedRouteElementForUnauthorizedUser = ({
  isLoggedIn,
  element,
}) => {
  return isLoggedIn ? element : <Navigate to="/" replace />;
};
