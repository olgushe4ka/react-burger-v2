import ingredientsStyles from "../burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import {
  TIingredient,
  TIingredientConstructor,
} from "../../../types/ingredients";
import { useSelector } from "../../../utils/hooks";

function IngredientConstructor(props: TIingredientConstructor) {
  const { id, name, price, image, item } = props;

  const location = useLocation();

  //Drag and drop
  const [{ opacity }, drag] = useDrag({
    type: "ingredient",
    item: { item },

    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 1 : 0.5,
    }),
  });

  //Counter
  let counter = 0;

  const ingredientInTheCart: [] = useSelector(
    (state) => state.ingredients.cartIng
  );

  const bunInTheCart = useSelector((state) => state.ingredients.cartBun);

  const allIngInTheCart: TIingredient[] = [
    ...bunInTheCart,
    ...ingredientInTheCart,
  ];

  allIngInTheCart?.forEach(
    (ingredient: TIingredient) => ingredient.name === name && (counter += 1)
  );

  return (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      to={{
        pathname: `/ingredients/${id}`,
        state: { background: location },
      }}
    >
      <div
        className={`${ingredientsStyles.ingredietBox} pl-5 pr-5 pb-0 pt-6`}
        id={id}
        ref={drag}
      >
        <div className={`${ingredientsStyles.counter}`}>
          {counter > 0 && <Counter count={counter} size="small" />}
        </div>
        <img src={image} alt="фото ингридиента" />
        <div className={ingredientsStyles.priceBox}>
          <p className="text text_type_main-medium mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-small mt-2">{name}</p>
      </div>
    </Link>
  );
}

export default IngredientConstructor;
