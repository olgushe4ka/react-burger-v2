import ingredientsStyles from "../burgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";


function Tabs(value) {

  
  const [current, setCurrent] = useState('buns')

  return (
    <div className={`${ingredientsStyles.tabs}`}>
      <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>Соусы</Tab>
      <Tab value="mains" active={current === 'mains'} onClick={setCurrent} >Начинки</Tab>
    </div>
  );
}

export default Tabs;
