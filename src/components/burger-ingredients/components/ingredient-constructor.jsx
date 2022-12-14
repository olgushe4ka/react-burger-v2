import ingredientsStyles from "../burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function IngredientConstructor(props) {
  const { id, name, price, image, index, item } = props;

  const location = useLocation();

  //Drag and drop
  const [{ opacity }, drag] = useDrag({
    type: "ingredient",
    // item: {item, index},
    item: { item },

    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 1 : 0.5,
    }),
  });

  //Counter
  let counter = 0;

  const ingredientInTheCart = useSelector((state) => state.ingredients.cartIng);

  const bunInTheCart = useSelector((state) => state.ingredients.cartBun);

  const allIngInTheCart = [...bunInTheCart, ...ingredientInTheCart];

  allIngInTheCart?.forEach(
    (ingredient) => ingredient.name === name && (counter += 1)
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

IngredientConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IngredientConstructor;
