import OrderDetailsStyles from "./OrderDetails.module.css";
import logo from "../../images/OrderDetails_icon.svg";

function OrderDetails() {
  return (
    <div className={`${OrderDetailsStyles.main} pl-0 pr-0 pb-0 pt-0`}>
      <p
        className={`${OrderDetailsStyles.orderNumber} text text_type_digits-large`}
      >
        034536
      </p>

      <p
        className={`${OrderDetailsStyles.textIdentificator} text text_type_main-medium pl-0 pr-0 pb-15 pt-8`}
      >
        идентификатор заказа
      </p>
      <img src={logo} alt="logo" />
      <p
        className={`${OrderDetailsStyles.textZakazgotov} text text_type_main-small pl-0 pr-0 pb-2 pt-15`}
      >
        Ваш заказ начали готовить
      </p>
      <p
        className={`${OrderDetailsStyles.textDogdites} text text_type_main-small pl-0 pr-0 pb-30 pt-0`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
