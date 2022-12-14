import {
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  Profile,
  Ingredients,
  Page404,
  ProfileHistoryOrders,
  Feed,
  OrderInfo,
} from "../../pages/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { baseWS } from "../../utils/burger-api";
import { useDispatch } from "react-redux";
import { getItems } from "../../services/actions/ingredients";
import { useEffect } from "react";
import { ProtectedRoute } from "../protected-route/protected-route";
import { getProfileInfo } from "../../services/actions/login";
import AppHeader from "../app-header/app-header";
import { wsConnect } from "../../services/actions/web-soket";

function App() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);

  const background = location.state?.background;

  //WS
  useEffect(() => {
    dispatch(wsConnect(baseWS));
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <ConstructorPage />
        </Route>
        <Route path="/feed" exact={true}>
          <Feed />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <OrderInfo />
        </Route>
        <ProtectedRoute onlyUnAuth={true} path="/login">
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path="/register">
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path="/forgot-password">
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path="/reset-password">
          <ResetPassword />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={false} path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={false} path="/profile/orders" exact={true}>
          <ProfileHistoryOrders />
        </ProtectedRoute>
        <ProtectedRoute
          onlyUnAuth={false}
          path="/profile/orders/:id"
          exact={true}
        >
          <OrderInfo />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <Ingredients />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
