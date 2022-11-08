import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import AppHeader from "../appHeader/appHeader";
import appStyles from "./App.module.css";
import { getIngredients } from "../../utils/burger-api";
import { useEffect, useState } from "react";
import BurgerIngredientsContext from "../../context/burger-ingredients-context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {

  const [ingredients, setIngredients] = useState([]);


  useEffect(() => {
    const getIngredientsData = async () => {
      try {
        const res = await getIngredients();

        setIngredients(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getIngredientsData();
  }, []);


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
        <DndProvider backend={HTML5Backend}>
            {ingredients && <BurgerIngredients  />}
            {ingredients && <BurgerConstructor 
            />}
            </DndProvider >
        </div>
      </div>
    </div>
  );
}

export default App;
