import burgerConstructorStyles from "./burgerConstructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderConstructor from "./components/orderConstructor";
import Sum from "./components/sum";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState, useContext, useEffect, useCallback } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CONSTRUCTOR_ADD_INGREDIENTS, orderBurger,
} from "../../services/actions/ingredients";
import { useDrop } from "react-dnd";

function BurgerConstructor() {
  const ingredientsAll = useSelector((state) => state.ingredients.cart);

  const ingredients = ingredientsAll.map((ingrItem) => {
    return ingrItem._id;
  });

  //открытие Модального окна
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

  const closeModal = () => {
    setIsOrderDetailsOpened(false);
  };

  const openModal = () => {
    setIsOrderDetailsOpened(true);
    getOrderNumber()
  };

  //Формирование номера заказа Модального окна через redux

  const modalData = useSelector((state) => state.ingredients.orderDetails);

  const dispatch = useDispatch();

const getOrderNumber = useCallback(
  () => {
    dispatch(orderBurger({ ingredients }));
  },
  [dispatch],
);

  const moveIngredientToConstructor = ( items) => {
    dispatch({
      type: CONSTRUCTOR_ADD_INGREDIENTS,
      items:  items
    });
  };



  // DND
  const [{ isHover }, dropIng] = useDrop({
    accept: "ingredient",

    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ing) {
      moveIngredientToConstructor(ing);
    },
  });

  return (
    <>
      <section
        className={`${burgerConstructorStyles.main} pl-4 pr-4 pb-0 pt-0`}
      >
        <div ref={dropIng}>
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
      </section>

      {isOrderDetailsOpened && (
        <Modal closeAllModals={closeModal}>
          <OrderDetails orderNumber={modalData?.order?.number} />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;
