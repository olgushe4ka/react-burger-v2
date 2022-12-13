import styles from "./pages-styles.module.css";
import FeedBurgers from "../components/feed-burgers/feed-burgers";
import FeedNumbers from "../components/feed-numbers/feed-numbers";
import { useSelector, useDispatch } from "react-redux";
import { wsConnect } from "../services/actions/web-soket";
import { baseWS } from "../utils/burger-api";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";


function Feed() {
  const dispatch = useDispatch();

  const allOrders = useSelector((state) => state.ws.table.orders);

  const numbers = useSelector((state) => state.ws.table);

  //WS

  useEffect(() => {
    dispatch(wsConnect(baseWS));
  }, [dispatch]);



  const openOrderInfo = (data) => {
    return <Redirect to="/feed/:id" props={data} />;
  }

  return (
    <div className={`${styles.feedMain} ml-15 mr-0 mb-0 mt-0`}>
      <h2 className={`${styles.feedTitle} text text_type_main-large ml-0 mr-0 mb-5 mt-10`}          >
        Лента заказов
      </h2>
      <div className={`${styles.feedContent} ml-0 mr-0 mb-0 mt-0`}>
        <div className={`${styles.feedNumbers}`}>
          {allOrders?.map((order) => {
            return (
              <FeedBurgers key={order.number} order={order} onClick={() => openOrderInfo(order)} />
            )
          })}
        </div>
        <FeedNumbers numbers={numbers} />
      </div>
    </div>
  );
}

export default Feed;
