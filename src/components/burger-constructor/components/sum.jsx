import burgerConstructorStyles from "../burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

function Sum() {
  const ingredients = useSelector((state) => state.ingredients.cartIng);
  const buns = useSelector((state) => state.ingredients.cartBun);

  const bun = buns[buns.length - 1];

  const ingredientsArr = ingredients.map((ingredient) => {
    return ingredient.price;
  });

  const initialSum = 0;

  const sumIngredWithInitial = ingredientsArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialSum
  );

  const sumWithBuns = (
    sumIngredWithInitial +
    (bun?.price ?? 0) * 2
  ).toLocaleString("ru-RU");

  return (
    <div
      className={`${burgerConstructorStyles.priceBoxLarge} pl-0 pr-10 pb-0 pt-0`}
    >
      <p className="text text_type_main-large mr-2">{sumWithBuns}</p>
      <div className={burgerConstructorStyles.priceIconLarge}>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
}

export default Sum;
