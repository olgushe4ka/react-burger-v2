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

  const ingredientInTheCart = useSelector(
    (state) => state.ingredients.cartIng
  );

  const bunInTheCart = useSelector(
    (state) => state.ingredients.cartBun
  );

  const ingredientsAll = [...bunInTheCart, ...ingredientInTheCart]

  const ingredientsId = ingredientsAll.map((ingrItem) => {
    return ingrItem._id;
  });

  const ingredients = ingredientsId.slice(1);

  console.log(ingredients);

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
  const getOrderNumber = useCallback(() => {
        return () => dispatch(orderBurger({ingredients}));
  }, [])

  const dispatch = useDispatch();

  //const getOrderNumber = () => 
  // useEffect(
  //   () => {
  //     dispatch(orderBurger({ingredients}));
  //   },
  //   [dispatch],
  // );







  const moveIngredientToConstructor = (items) => {
    dispatch({
      type: CONSTRUCTOR_ADD_INGREDIENTS,
      items: items
    });
  };

  const modalData = useSelector((state) => state.ingredients.orderDetails);

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
          <OrderDetails orderNumber={modalData?.order?.number} />
        </Modal>
      )}
    </div>
  );
}

export default BurgerConstructor;
