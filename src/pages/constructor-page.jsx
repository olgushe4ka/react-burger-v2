import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import styles from "./constructor-page.module.css";

import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredients } from "../utils/burger-api";


function ConstructorPage() {
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
    <div className={styles.App}>
      <div className={`${styles.appWithoutHeader}`}>
        <h1
          className={`${styles.title} text text_type_main-large pl-15 pr-0 pb-5 pt-10`}
        >
          Соберите бургер
        </h1>
        <div className={`${styles.displayFlex}`}>
          <DndProvider backend={HTML5Backend}>
            {ingredients && <BurgerIngredients />}
            {ingredients && <BurgerConstructor />}
          </DndProvider>
        </div>
      </div>
    </div>
  );
}

export default ConstructorPage;
