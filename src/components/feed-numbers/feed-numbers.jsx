import {
  Input, Button, EmailInput, PasswordInput, FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-numbers.module.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";



function FeedNumbers({ numbers }) {
  // const name = useSelector((state) => state.login.userName);
  // const [emailValue, setEmailValue] = useState(email);
  // const dispatch = useDispatch();
  // const sendRequest = useCallback(() => {
  //   dispatch(logOut());
  // }, [])
  // useEffect(() => {
  //   dispatch(getProfileInfo());
  // }, [dispatch]);

  //const ready = numbers.map((item) => item.status === 'done');
  //console.log(numbers)

  //const order = numbers.orders

  const orders = useSelector((state) => state.ws.table.orders);

  const ready = orders?.filter((item) => item.status === 'done').slice(0, 5)
  const pending = orders?.filter((item) => item.status === 'pending').slice(0, 5)

  const readyNumbers = ready?.map((item) => item.number)
  const pendingNumbers = pending?.map((item) => item.number)

   return (

    <div className={`${styles.main} `}>
      <div className={`${styles.readyBox} `}>
        <h3 className={`${styles.ready} text text_type_main-medium  pl-0 pr-0 pb-4 pt-0`}      >
          Готовы:
        </h3>
        {readyNumbers?.map((number) => {
          return (
            <p key={number} className={`${styles.readyNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
              {number}
            </p>)
        })}

      </div>

      <div className={`${styles.inWorkBox} `}>
        <h3 className={`${styles.inWork} text text_type_main-medium  pl-0 pr-0 pb-4 pt-0`}      >
          В работе:
        </h3>

        {pendingNumbers?.map((number) => {
          return (
            <p key={number} className={`${styles.inWorkNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
              {number}
            </p>)
        })}
      </div>

      <div className={`${styles.doneBox} `}>
        <h3 className={`${styles.titleDone} text text_type_main-medium  pl-0 pr-0 pb-0 pt-0`}      >
          Выполнено за всё время:
        </h3>
        <p className={`${styles.numberBig} text text_type_digits-large  pl-0 pr-0 pb-0 pt-0`}      >
          {numbers?.total}
        </p>
      </div>

      <div className={`${styles.doneTodayBox} `}>
        <h3 className={`${styles.titleDone} text text_type_main-medium  pl-0 pr-0 pb-0 pt-0`}      >
          Выполнено за сегодня:
        </h3>
        <p className={`${styles.numberBig} text text_type_digits-large  pl-0 pr-0 pb-0 pt-0`}      >
          {numbers?.totalToday}
        </p>
      </div>
    </div>

  );
}

export default FeedNumbers;
