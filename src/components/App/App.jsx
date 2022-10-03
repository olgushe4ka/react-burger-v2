import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import AppHeader from "../appHeader/appHeader";
import appStyles from "./App.module.css";

function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader />
      <div className={`${appStyles.appWithoutHeader}`}>
        <h1
          className={`${appStyles.title} text text_type_main-large pl-15 pr-0 pb-5 pt-10`}
        >
          Соберите бургер
        </h1>
        <div className={`${appStyles.displayFlex}`}>
          {" "}
          <BurgerIngredients />
          <BurgerConstructor />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
