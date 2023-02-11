import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info-modal.module.css";
import FeedСonsist from "../feed-consist/feed-consist";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "../../utils/hooks";
import { TIingredient, TOrders } from "../../types/ingredients";

function OrderInfoModal({ orders }: {orders: TOrders}) {
  const props = orders;
  const ingredientsAll = useSelector((state) => state.ingredients.ingredients);
  const ingredients: Array<any> = [];

console.log(orders)


  ingredientsAll?.forEach((item: TIingredient) => {
    props.ingredients?.forEach((id: string | number) => {
      if (item._id == id) {
        ingredients.push(item);
      }
    });
  });

  //Считаем повторение ингридиентов
  const ingredientsIDs = ingredients.map((item) => {
    return item._id;
  });

  const countIngridients: Array<number> = [];

  for (const item of ingredientsIDs) {
    countIngridients[item] = countIngridients[item]
      ? countIngridients[item] + 1
      : 1;
  }

  const countIngridientsArr = Object.entries(countIngridients);

  //Статус
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

  const clearHistory = (e: Event) => {
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
          {countIngridientsArr.map((ingredient, index) => {
            return <FeedСonsist props={ingredient} key={index} />;
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
