import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ onlyUnAuth, children, ...props }) => {
  const location = useLocation();

  const isAuthChecked = useSelector((state) => state.login.isAuthChecked);


  if (onlyUnAuth && isAuthChecked) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Redirect to={from} />;
  }

  if (!onlyUnAuth && !isAuthChecked) {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }

  return <Route {...props}>{children}</Route>;
};
