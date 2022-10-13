import OrderDetailsStyles from "./OrderDetails.module.css";
import logo from "../../images/OrderDetails_icon.svg";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function OrderDetails() {
  return (
    <div className={`${OrderDetailsStyles.main} pl-0 pr-0 pb-0 pt-0`}>
      <a href="" className={`${OrderDetailsStyles.closeIcon}`}>
        {" "}
        <CloseIcon type="primary" />{" "}
      </a>
      <p
        className={`${OrderDetailsStyles.orderNumber} text text_type_digits-large`}
      >
        034536
      </p>

      <p
        className={`${OrderDetailsStyles.textIdentificator} text text_type_digits-medium pl-0 pr-0 pb-15 pt-8`}
      >
        идентификатор заказа
      </p>
      <img src={logo} alt="logo" />
      <p
        className={`${OrderDetailsStyles.textZakazgotov} text text_type_digits-medium pl-0 pr-0 pb-2 pt-15`}
      >
        Ваш заказ начали готовить
      </p>
      <p
        className={`${OrderDetailsStyles.textDogdites} text text_type_digits-medium pl-0 pr-0 pb-30 pt-0`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
