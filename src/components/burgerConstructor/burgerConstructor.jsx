import burgerConstructorStyles from "./burgerConstructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderConstructor from "./components/orderConstructor";
import Sum from "./components/sum";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CONSTRUCTOR_ADD_INGREDIENTS, CONSTRUCTOR_REMOVE_INGREDIENTS
} from "../../services/actions/ingredients";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';

function BurgerConstructor() {
  const dispatch = useDispatch();

  const ingredientInTheCart = useSelector((state) => state.ingredients.cartIng);
  const bunInTheCart = useSelector((state) => state.ingredients.cartBun);

  const ingredientsAll = [...bunInTheCart, ...ingredientInTheCart]


  //открытие Модального окна
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);


  const cleanCart = () => {
    dispatch({
      type: CONSTRUCTOR_REMOVE_INGREDIENTS,
          });
  };


  const closeModal = () => {
    setIsOrderDetailsOpened(false);
    cleanCart()
  };

  const openModal = () => {
    setIsOrderDetailsOpened(true);
  };


  // DND

  const moveIngredientToConstructor = (item) => {
    dispatch({
      type: CONSTRUCTOR_ADD_INGREDIENTS,
      payload: {
        ...item,
      }
    });
  };

  const [{ isHover }, dropIng] = useDrop({
    accept: "ingredient",

    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ing) { moveIngredientToConstructor(ing); },
  });

  return (
    <div ref={dropIng}>
      {ingredientsAll.length === 0 && (<div className={`${burgerConstructorStyles.main} ml-10 mr-10 mb-10 mt-10`}>
        <p className="text text_type_main-medium ml-0 mr-0 mb-10 mt-10" >Заказ пуст.</p>
        <p className="text text_type_main-medium" >
          Вы можете добавить ингредиенты, перетащив их из списка сюда.
        </p>
      </div>)}

      {ingredientsAll.length > 0 && (<section
        className={`${burgerConstructorStyles.main} pl-4 pr-4 pb-0 pt-0`}
      >
        <div >
          <OrderConstructor />
        </div>
        <div
          className={`${burgerConstructorStyles.totalSumBox} pl-4 pr-4 pb-0 pt-10`}
        >
          <Sum />
          <Button
            type="primary"
            size="medium"
            onClick={openModal}
            htmlType="button"
          >
            Оформить заказ
          </Button>
        </div>
      </section>)}

      {isOrderDetailsOpened && (
        <Modal closeAllModals={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default BurgerConstructor;
