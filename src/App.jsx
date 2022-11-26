import { ConstructorPage, LoginPage, RegisterPage, ForgotPassword, ResetPassword, Profile, Ingredients, Page404 } from "./pages/index";
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { testRegistration } from "./utils/burger-api";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "./services/actions/ingredients";
import { useEffect } from "react";

function App() {
 // const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  //const data = useSelector((state) => state.ingredients.ingredients);

  const background = location.state?.background;

  return (
   
      <Switch location={background || location}>
        <Route path="/" exact={true} >
          <ConstructorPage />
        </Route>
        <Route path="/login" >
          <LoginPage />
        </Route>
        <Route path="/register" >
          <RegisterPage />
        </Route>
        <Route path="/forgot-password" >
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" >
          <ResetPassword />
        </Route>
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

