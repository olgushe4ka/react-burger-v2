import burgerConstructorStyles from "./burgerConstructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import OrderConstructor from "./components/orderConstructor";
import Sum from "./components/sum";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState } from "react";
import Modal from "../Modal/Modal";

function BurgerConstructor() {
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false); // Булевый стейт для одной конкретной модалки

  // Закрытие всех модалок
  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
    // тут же закрываем и другие модалки
  };

  // Обработка нажатия Esc
  const handleEscKeydown = (e) => {
    e.key === "Escape" && closeAllModals();
  };

  const openModal = () =>{
    setIsOrderDetailsOpened(true);
  }

  return (
    <>
    <section className={`${burgerConstructorStyles.main} pl-4 pr-4 pb-0 pt-0`}>
      <OrderConstructor />
      <div
        className={`${burgerConstructorStyles.totalSumBox} pl-4 pr-4 pb-0 pt-10`}
      >
        <Sum></Sum>
        <Button
          type="primary"
          size="medium"
          onClick={openModal}
        >
          Оформить заказ
        </Button>
      </div>
    </section>

    {isOrderDetailsOpened && (
        <Modal
     
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
         <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BurgerConstructor;
