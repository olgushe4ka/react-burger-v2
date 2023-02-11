import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import FeedСonsist from "../components/feed-consist/feed-consist";
import { useParams } from "react-router-dom";
import {
  LIVE_ORDER_FEED_CONNECT,
  wsConnect,
  wsDisconnect,
} from "../services/actions/web-soket";
import { useEffect } from "react";
import { baseWS, baseWSUser } from "../utils/burger-api";
import { getCookie } from "../utils/cookie";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "../utils/hooks";
import { TIingredient, TOrders } from "../types/ingredients";

function OrderInfo() {
  const dispatch = useDispatch();
  const { id }:{id: string} = useParams();

  const history = useHistory();
  const pathFeedOrOrder = history.location.pathname;

  //WS
  const token = getCookie("accessToken");

  useEffect(() => {
    if (pathFeedOrOrder === `/profile/orders/${id}`) {
      dispatch(wsConnect(`${baseWSUser}?token=${token}`));
    } else dispatch(wsConnect(baseWS));
    //dispatch({ type: LIVE_ORDER_FEED_CONNECT, payload: baseWS})

    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  const orders: TOrders[] = useSelector((state) => state.ws.table.orders);
  const props = orders?.find((order) => order?._id === id);
  const ingredientsAll = useSelector((state) => state.ingredients.ingredients);

  const ingredients: Array<any> = [];

  ingredientsAll.forEach((item: TIingredient) => {
    props?.ingredients.forEach((id: string) => {
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
    if (props?.status === "done") {
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

  return (
    <>
      {props && (
        <div className={`${styles.feedIdMain} `}>
          <p
            className={`${styles.feddIdOrderNumber} text text_type_digits-default `}
          >
            # {props?.number}
          </p>
          <p
            className={`${styles.feddIdbutgerName} text text_type_main-medium pl-0 pr-0 pb-0 pt-10`}
          >
            {props?.name}
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
            <FormattedDate date={new Date(props?.createdAt)} />

            <div className={`${styles.feedIdpriceBox} pl-0 pr-0 pb-0 pt-0`}>
              <p className="text text_type_digits-default mr-2">
                {sumIngredWithInitial}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderInfo;
