import {
  Input, Button, EmailInput, PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { changeProfileInfo, getProfileInfo, logOut } from "../services/actions/login";
import { useCallback, useEffect, useState } from "react";
import { eraseCookie } from "../utils/cookie";


function ProfileHistoryOrders() {
  const name = useSelector((state) => state.login.userName);
  const email = useSelector((state) => state.login.email);
  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);


  const dispatch = useDispatch();

  const sendRequest = useCallback(() => {
    dispatch(logOut());
  }, [])

  // useEffect(() => {
  //   dispatch(getProfileInfo());
  // }, [dispatch]);

  const onExitBtnClick = () => {
    sendRequest();
    eraseCookie("accessToken")
    localStorage.removeItem("refreshToken");
  }



  return (
    <>
      <div className={`${styles.profileGrid} `}>
        <div className={`${styles.profileLeftBox} ml-0 mr-15 mb-0 mt-0`}>
          <div className={`${styles.profileMenu}`}>
            <Link to="/profile" className={`${styles.profileButton} text text_type_main-medium`}>
              Профиль
            </Link>
            <Link to="/profile/orders" className={`${styles.profileButtonActive} text text_type_main-medium`}>
              История заказов
            </Link>
            <button className={`${styles.profileButton} text text_type_main-medium`} onClick={() => onExitBtnClick()}>
              Выход
            </button>
          </div>

          <p className={`${styles.ptofileTextDown} text text_type_main-default ml-0 mr-0 mb-0 mt-20`}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div className={`${styles.profileInput}`}>
        <p className="text text_type_main-default">Страница в разработке</p>

        </div>


      </div>
    </>
  );
}

export default ProfileHistoryOrders;
