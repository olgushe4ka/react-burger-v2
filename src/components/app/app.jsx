import { ConstructorPage, LoginPage, RegisterPage, ForgotPassword, ResetPassword, Profile, Ingredients, Page404, ProfileHistoryOrders } from "../../pages/index";
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { testRegistration } from "../../utils/burger-api";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../services/actions/ingredients";
import { useEffect } from "react";
import { ProtectedRoute } from "../protectedRoute/protectedRoute";
import { getProfileInfo } from "../../services/actions/login";
import AppHeader from "../appHeader/appHeader";


function App() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(history)

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);

  //const data = useSelector((state) => state.ingredients.ingredients);

  const background = location.state?.background;

  return (
    <>
   <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true} >
          <ConstructorPage />
        </Route>
        <ProtectedRoute onlyUnAuth={true} path="/login" >
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path="/register" >
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path="/forgot-password" >
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path="/reset-password" >
          <ResetPassword />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={false} path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={false} path="/profile/orders" exact={true}>
          <ProfileHistoryOrders />
        </ProtectedRoute>
        <Route path="/ingredients/:id" >
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

