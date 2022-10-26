import ingredientsStyles from "../burgerIngredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function MenuConstructor(props) {
  return (
    <div className={`${ingredientsStyles.ingredietBox} pl-5 pr-5 pb-0 pt-6`}>
      <div className={`${ingredientsStyles.counter}`}>
        <Counter count={1} size="small" />
      </div>
      <img src={props.image} alt="фото ингридиента" />
      <div className={ingredientsStyles.priceBox}>
        <p className="text text_type_main-medium mr-2">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-small mt-2">{props.name}</p>
    </div>
  );
}

MenuConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuConstructor;
