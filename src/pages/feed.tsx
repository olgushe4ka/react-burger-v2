import styles from "./pages-styles.module.css";
import FeedBurgers from "../components/feed-burgers/feed-burgers";
import FeedNumbers from "../components/feed-numbers/feed-numbers";
import {
  LIVE_ORDER_FEED_CONNECT,
  LIVE_ORDER_FEED_DISCONNECT,
  wsConnect,
  wsDisconnect,
} from "../services/actions/web-soket";
import { baseWS } from "../utils/burger-api";
import { useEffect, useState } from "react";
import Modal from "../components/modal/modal";
import { useLocation, useHistory } from "react-router-dom";
import OrderInfoModal from "../components/order-info-modal/order-info-modal";
import { useSelector, useDispatch } from "../utils/hooks";

import { Location } from "history";
import { TOrders } from "../types/ingredients";

function Feed() {
  const [modalOpen, setModalOpen] = useState<null | TOrders>(null);

  const dispatch = useDispatch();
  const history = useHistory();
  //const location = useLocation();
  const location = useLocation<{ background: Location }>();

  //const background = location.state?.background;
  const background = location.state && location.state.background;

  const allOrders = useSelector((state) => state.ws.table.orders);

  const numbers = useSelector((state) => state.ws.table);

  const onModalClose = () => {
    setModalOpen(null);
    history.goBack();
  };

  //WS
  useEffect(() => {
    dispatch(wsConnect(baseWS));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  const openOrderInfo = (data: TOrders) => {
    setModalOpen(data);
  };
  return (
    <>
      <div className={`${styles.feedMain} ml-15 mr-0 mb-0 mt-0`}>
        <h2
          className={`${styles.feedTitle} text text_type_main-large ml-0 mr-0 mb-5 mt-10`}
        >
          Лента заказов
        </h2>
        <div className={`${styles.feedContent} ml-0 mr-0 mb-0 mt-0`}>
          <div className={`${styles.feedNumbers}`}>
            {allOrders?.map((order: TOrders) => {
              return (
                <div key={order.number} onClick={() => openOrderInfo(order)}>
                  <FeedBurgers order={order} />
                </div>
              );
            })}
          </div>
          <FeedNumbers numbers={numbers} />
        </div>
      </div>

      {modalOpen && (
        <Modal closeAllModals={onModalClose}>
          <OrderInfoModal orders={modalOpen} />
        </Modal>
      )}
    </>
  );
}

export default Feed;
