import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../../utils/hooks";
import { Location } from "history";

type TProtectedRoute = {
  onlyUnAuth?: boolean;
  children?: JSX.Element;
  path?: string;
  exact?: boolean;
};

export const ProtectedRoute = ({
  onlyUnAuth,
  children,
  ...props
}: TProtectedRoute) => {
  // const location= useLocation();
  const location = useLocation<{ from: Location }>();

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
