import ingredientsStyles from "../burgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function Tabs() {
  return (
    <div className={`${ingredientsStyles.tabs}`}>
      <Tab value="one" active={true}>
        Булки
      </Tab>
      <Tab value="two">Соусы</Tab>
      <Tab value="three">Начинки</Tab>
    </div>
  );
}

export default Tabs;
