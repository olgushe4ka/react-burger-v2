import ingredientsStyles from "../burgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";


function Tabs() {
  return (
    <div className={`${ingredientsStyles.tabs}`}>
      <Tab value="buns" active={true}>
        Булки
      </Tab>
      <Tab value="sauces">Соусы</Tab>
      <Tab value="mains">Начинки</Tab>
    </div>
  );
}

export default Tabs;
