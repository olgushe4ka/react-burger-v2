import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import styles from "./constructor-page.module.css";

import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function ConstructorPage() {

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
             <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      </div>
    </div>
  );
}

export default ConstructorPage;
