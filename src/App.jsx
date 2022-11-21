import { HomePage, LoginPage, RegisterPage, ForgotPassword, ResetPassword, Profile, Ingredients } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} >
          <HomePage />
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
        <Route path="/profile" >
          <Profile />
        </Route>
        <Route path="/ingredients/:id" >
          <Ingredients />
        </Route>
        <Route>
          <p className="text text_type_main-large ml-25 mr-25 mb-25 mt-25">Ошибка 404</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

