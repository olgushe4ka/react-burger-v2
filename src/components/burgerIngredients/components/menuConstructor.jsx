import ingredientsStyles from "../burgerIngredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useState } from "react";
import IngredientDetails from "../../IngredientDetails/IngredientDetails";
import Modal from "../../Modal/Modal";

function Menuconstructor(props) {

  //Модальные окна
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);

  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);  };

  const handleEscKeydown = (e) => {
    e.key === "Escape" && closeAllModals();  };

  const openModal = () => {
    debugger
    setIsIngredientDetailsOpened(true);  }

  return (
    <>
      <div className={`${ingredientsStyles.ingredietBox} pl-5 pr-5 pb-0 pt-6`}  onClick={openModal}>
        <div className={`${ingredientsStyles.counter}`}>
          {" "}
          <Counter count={1} size="small" />{" "}
        </div>
        <img  src={props.image} alt="фото ингридиента" />
        <div className={ingredientsStyles.priceBox}>
          {" "}
          <p className="text text_type_main-medium mr-2">{props.price}</p>
          <CurrencyIcon type="primary" />{" "}
        </div>
        <p className="text text_type_main-small mt-2">{props.name}</p>
      </div>

      {isIngredientDetailsOpened && (
        <Modal
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <IngredientDetails
            image={props.image}
            proteins={props.proteins}
            fat={props.fat}
            carbohydrates={props.carbohydrates}
            calories={props.calories}
            name={props.name}
          />
        </Modal>
      )}
    </>
  );
}

Menuconstructor.propTypes = {
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Menuconstructor;
