import burgerConstructorStyles from "./burgerConstructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import OrderConstructor from "./components/orderConstructor";
import Sum from "./components/sum";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { ingredientPropType } from "../../utils/prop-types";

function BurgerConstructor({data}) {
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false); 

  const closeModal = () => {
    setIsOrderDetailsOpened(false);
  };

  const openModal = () => {
    setIsOrderDetailsOpened(true);
  };

  return (
    <>
      <section
        className={`${burgerConstructorStyles.main} pl-4 pr-4 pb-0 pt-0`}
      >
        <OrderConstructor cart={data} />
        <div
          className={`${burgerConstructorStyles.totalSumBox} pl-4 pr-4 pb-0 pt-10`}
        >
          <Sum />
          <Button type="primary" size="medium" onClick={openModal} htmlType="button">
            Оформить заказ
          </Button>
        </div>
      </section>

      {isOrderDetailsOpened && (
        <Modal closeAllModals={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}


BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
};

export default BurgerConstructor;
