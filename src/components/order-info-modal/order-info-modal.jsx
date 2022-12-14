import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info-modal.module.css";
import FeedСonsist from "../feed-consist/feed-consist";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function OrderInfoModal({ orders }) {

  const props = orders;
  const ingredientsAll = useSelector((state) => state.ingredients.ingredients);
  const ingredients = [];

  ingredientsAll?.forEach((item) => {
    props.ingredients?.forEach((id) => {
      if (item._id == id) {
        ingredients.push(item);
      }
    });
  });

  const statusOfOrder = (() => {
    if (props.status === "done") {
      return `Выполнен`;
    } else {
      return `В работе`;
    }
  })();

  //сумма

  const ingredientsArr = ingredients.map((ingredient) => {
    return ingredient.price;
  });

  const initialSum = 0;

  const sumIngredWithInitial = ingredientsArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialSum
  );

  //при перезагрузке , чтобы шло на страницу с ингредиентом
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("beforeunload", clearHistory);
    return () => {
      window.removeEventListener("beforeunload", clearHistory);
    };
  }, []);

  const clearHistory = (e) => {
    e.preventDefault();
    history.replace({ state: {} });
  };

  return (
    <>
      <div className={`${styles.feedIdMain} `}>
        <p
          className={`${styles.feddIdOrderNumber} text text_type_digits-default `}
        >
          # {props.number}
        </p>
        <p
          className={`${styles.feddIdbutgerName} text text_type_main-medium pl-0 pr-0 pb-0 pt-10`}
        >
          {props.name}
        </p>
        <p
          className={`${styles.feddIdStatus} text text_type_main-small pl-0 pr-0 pb-15 pt-3`}
        >
          {statusOfOrder}
        </p>

        <p
          className={`${styles.feddIdbutgerSostav} text text_type_main-medium pl-0 pr-0 pb-6 pt-0`}
        >
          Состав:
        </p>

        <div className={`${styles.feedIdIngredients} `}>
          {ingredients.map((ingredient) => {
            return <FeedСonsist props={ingredient} key={uuidv4()} />;
          })}
        </div>

        <div className={`${styles.feedIddownBox} pl-0 pr-0 pb-0 pt-10`}>
          <FormattedDate date={new Date(props.createdAt)} />

          <div className={`${styles.feedIdpriceBox} pl-0 pr-0 pb-4 pt-0`}>
            <p className="text text_type_digits-default mr-2">
              {sumIngredWithInitial}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderInfoModal;
