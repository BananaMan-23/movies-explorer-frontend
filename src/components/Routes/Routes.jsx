import { Navigate } from "react-router-dom";

export const ProtectedRouteElementForAuthorizedUser = ({
  isLoggedIn,
  element,
}) => {
  return !isLoggedIn ? element : <Navigate to="/movies" replace />;
};

export const ProtectedRouteElementForUnauthorizedUser = ({
  isLoggedIn,
  element,
}) => {
  return isLoggedIn ? element : <Navigate to="/" replace />;
};
