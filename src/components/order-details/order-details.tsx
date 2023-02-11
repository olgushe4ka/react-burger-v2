import OrderDetailsStyles from "./order-details.module.css";
import logo from "../../images/OrderDetails_icon.svg";
import { useEffect } from "react";
import { orderBurger } from "../../services/actions/ingredients";
import { TailSpin } from "react-loader-spinner";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "../../utils/hooks";

function OrderDetails() {
  const isLoading = useSelector(
    (state) => state.ingredients.orderDetailsIsLoading
  );
  const ingredientInTheCart = useSelector((state) => state.ingredients.cartIng);
  const bunInTheCart = useSelector((state) => state.ingredients.cartBun);
  const ingredientsAll = [...bunInTheCart, ...ingredientInTheCart];
  const ingredients= ingredientsAll.map((ingrItem) => {
    return ingrItem._id;
  });

  const isAuthChecked = useSelector((state) => state.login.isAuthChecked);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderBurger({ingredients}));
  }, [dispatch]);

  const modalData = useSelector((state) => state.ingredients.orderDetails);

  if (!isAuthChecked) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={`${OrderDetailsStyles.main} pl-0 pr-0 pb-0 pt-0`}>
      {isLoading && (
        <div className={`${OrderDetailsStyles.loading} `}>
          <TailSpin
            color="white"
           // strokeColor="grey"
           // strokeWidth="5"
           // animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}

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

export default OrderDetails;
