import { ConstructorPage, LoginPage, RegisterPage, ForgotPassword, ResetPassword, Profile, Ingredients, Page404 } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { testRegistration } from "./utils/burger-api";

function App() {
  
  return (
    <Router>
      <Switch>
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
    </Router>
  );
}

export default App;

