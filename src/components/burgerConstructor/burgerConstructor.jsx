import burgerConstructorStyles from "./burgerConstructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import OrderConstructor from "./components/orderConstructor";
import Sum from "./components/sum";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import { ingredientPropType } from "../../utils/prop-types";
import BurgerIngredientsContext from "../../context/burger-ingredients-context";
import { saveOrder } from "../../utils/burger-api";


function BurgerConstructor() {

  const ingredientsAll = useContext(BurgerIngredientsContext);
  const ingredients = ingredientsAll.map((ingrItem) => { return ingrItem._id })

  //открытие Модального окна
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

  const closeModal = () => {
    setIsOrderDetailsOpened(false);
  };

  const openModal = () => {
    handleOrderClick();
    setIsOrderDetailsOpened(true);
  };

  //Формирование номера заказа Модального окна
  const [modalData, setModalData] = useState(null);

  const handleOrderClick = () => {
    saveOrder({ ingredients })
      .then(data => {
        setModalData(data);
      });
  };

  return (
    <>
      <section className={`${burgerConstructorStyles.main} pl-4 pr-4 pb-0 pt-0`}>
        <OrderConstructor />
        <div className={`${burgerConstructorStyles.totalSumBox} pl-4 pr-4 pb-0 pt-10`} >
          <Sum />
          <Button type="primary" size="medium" onClick={openModal} htmlType="button">
            Оформить заказ
          </Button>
        </div>
      </section>

      {isOrderDetailsOpened && (
        <Modal closeAllModals={closeModal}>
          <OrderDetails orderNumber={modalData.order.number} />
        </Modal>
      )}
    </>
  );
}


// BurgerConstructor.propTypes = {
//   data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
// };

export default BurgerConstructor;
