import { ConstructorPage, LoginPage, RegisterPage, ForgotPassword, ResetPassword, Profile, Ingredients, Page404 } from "./pages/index";
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { testRegistration } from "./utils/burger-api";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "./services/actions/ingredients";
import { useEffect } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { getProfileInfo } from "./services/actions/login";



function App() {
 // const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);

  //const data = useSelector((state) => state.ingredients.ingredients);

  const background = location.state?.background;

  return (
   
      <Switch location={background || location}>
        <Route onlyUnAuth={false} path="/" exact={true} >
          <ConstructorPage />
        </Route>
        <ProtectedRoute onlyUnAuth={true} path="/login" >
          <LoginPage />
        </ProtectedRoute>
        <Route onlyUnAuth={true} path="/register" >
          <RegisterPage />
        </Route>
        <ProtectedRoute onlyUnAuth={true} path="/forgot-password" >
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path="/reset-password" >
          <ResetPassword />
        </ProtectedRoute>
        <Route path="/profile" exact={true}>
          <Profile />
        </Route>
        <Route path="/ingredients/:id" >
          <Ingredients />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>

  );
}

export default App;

