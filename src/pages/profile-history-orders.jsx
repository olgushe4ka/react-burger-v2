import styles from "./pages-styles.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../services/actions/login";
import { useCallback, useEffect, useState } from "react";
import { eraseCookie, getCookie } from "../utils/cookie";
import FeedBurgers from "../components/feed-burgers/feed-burgers";
import { baseWSUser } from "../utils/burger-api";
import { wsConnect, wsDisconnect } from "../services/actions/web-soket";
import Modal from "../components/modal/modal";
import OrderInfoModal from "../components/order-info-modal/order-info-modal";
import { useHistory } from "react-router-dom";

function ProfileHistoryOrders() {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(null);

  const name = useSelector((state) => state.login.userName);
  const email = useSelector((state) => state.login.email);
  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);

  const allOrders = useSelector((state) => state.ws.table.orders);

  const dispatch = useDispatch();

  const sendRequest = useCallback(() => {
    dispatch(logOut());
  }, []);

  const onExitBtnClick = () => {
    sendRequest();
    eraseCookie("accessToken");
    localStorage.removeItem("refreshToken");
  };

  //WS
  const token = getCookie("accessToken");

  useEffect(() => {
    dispatch(wsConnect(`${baseWSUser}?token=${token}`));
    return () => {
      dispatch(wsDisconnect())
    }
  }, [dispatch]);

  
  const openOrderInfo = (data) => {
    setModalOpen(data);
  };

  const onModalClose = () => {
    setModalOpen(null);
    history.goBack();
  };

  console.log(modalOpen);

  return (
    <>
      <div className={`${styles.profileGridHistory} `}>
        <div className={`${styles.profileLeftBox} ml-0 mr-15 mb-0 mt-0`}>
          <div className={`${styles.profileMenu}`}>
            <Link
              to="/profile"
              className={`${styles.profileButton} text text_type_main-medium`}
            >
              ??????????????
            </Link>
            <Link
              to="/profile/orders"
              className={`${styles.profileButtonActive} text text_type_main-medium`}
            >
              ?????????????? ??????????????
            </Link>
            <button
              className={`${styles.profileButton} text text_type_main-medium`}
              onClick={() => onExitBtnClick()}
            >
              ??????????
            </button>
          </div>

          <p
            className={`${styles.ptofileTextDown} text text_type_main-default ml-0 mr-0 mb-0 mt-20`}
          >
            ?? ???????? ?????????????? ???? ???????????? ???????????????? ???????? ???????????????????????? ????????????
          </p>
        </div>
        <div className={`${styles.profileFeedBurgers} ml-15 mr-0 mb-0 mt-0`}>
          {allOrders?.map((order) => {
            return (
              <div key={order.number} onClick={() => openOrderInfo(order)}>
                <FeedBurgers order={order} />
              </div>
            );
          })}
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

export default ProfileHistoryOrders;
