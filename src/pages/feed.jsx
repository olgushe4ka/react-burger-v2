import {
  Input, Button, EmailInput, PasswordInput, FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { changeProfileInfo, getProfileInfo, logOut } from "../services/actions/login";
import { useCallback, useEffect, useState } from "react";
import { eraseCookie } from "../utils/cookie";
import FeedBurgers from "../components/feed-burgers/feed-burgers";


function Feed() {
  // const name = useSelector((state) => state.login.userName);
  // const [emailValue, setEmailValue] = useState(email);
  // const dispatch = useDispatch();
  // const sendRequest = useCallback(() => {
  //   dispatch(logOut());
  // }, [])
  // useEffect(() => {
  //   dispatch(getProfileInfo());
  // }, [dispatch]);




  return (
    <>
      <div className={`${styles.feedMain} pl-2 pr-2 pb-0 pt-0`}>
        <h2 className={`${styles.feedTitle} text text_type_main-large pl-15 pr-0 pb-5 pt-10`}          >
          Лента заказов
        </h2>
        <div className={`${styles.allBurgers}  pl-15 pr-0 pb-0 pt-0`}>

        <FeedBurgers />

        </div>
      </div>
    </>
  );
}

export default Feed;
