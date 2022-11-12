import OrderDetailsStyles from "./OrderDetails.module.css";
import logo from "../../images/OrderDetails_icon.svg";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  orderBurger,} from "../../services/actions/ingredients";


function OrderDetails() {

  const ingredientInTheCart = useSelector((state) => state.ingredients.cartIng);
  const bunInTheCart = useSelector((state) => state.ingredients.cartBun);
  const ingredientsAll = [...bunInTheCart, ...ingredientInTheCart]
  const ingredientsId = ingredientsAll.map((ingrItem) => { return ingrItem._id; });

  const ingredients = ingredientsId.slice(1);

  const dispatch = useDispatch();


  useEffect(
    () => {
      dispatch(orderBurger({ ingredients }));
    },
    [dispatch],
  );

  const modalData = useSelector((state) => state.ingredients.orderDetails);


  return (
    <div className={`${OrderDetailsStyles.main} pl-0 pr-0 pb-0 pt-0`}>
      <p
        className={`${OrderDetailsStyles.orderNumber} text text_type_digits-large`}
      >
        {modalData?.order.number}
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

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};

export default OrderDetails;
