import {
  Input, Button, EmailInput, PasswordInput, FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-numbers.module.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";



function FeedNumbers() {
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

    <div className={`${styles.main} `}>
      <div className={`${styles.readyBox} `}>
        <h3 className={`${styles.ready} text text_type_main-medium  pl-0 pr-0 pb-4 pt-0`}      >
          Готовы:
        </h3>
        <p className={`${styles.readyNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
          0355448
        </p>
        <p className={`${styles.readyNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
          0355449
        </p>
        <p className={`${styles.readyNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
          0355445
        </p>
      </div>

      <div className={`${styles.inWorkBox} `}>
        <h3 className={`${styles.inWork} text text_type_main-medium  pl-0 pr-0 pb-4 pt-0`}      >
          В работе:
        </h3>
        <p className={`${styles.inWorkNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
          0355555
        </p>
        <p className={`${styles.inWorkNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
          0355556
        </p>
        <p className={`${styles.inWorkNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}      >
          0355557
        </p>
      </div>

      <div className={`${styles.doneBox} `}>
        <h3 className={`${styles.titleDone} text text_type_main-medium  pl-0 pr-0 pb-0 pt-0`}      >
          Выполнено за всё время:
        </h3>
        <p className={`${styles.numberBig} text text_type_digits-large  pl-0 pr-0 pb-0 pt-0`}      >
          152152
        </p>
      </div>

      <div className={`${styles.doneTodayBox} `}>
        <h3 className={`${styles.titleDone} text text_type_main-medium  pl-0 pr-0 pb-0 pt-0`}      >
          Выполнено за сегодня:
        </h3>
        <p className={`${styles.numberBig} text text_type_digits-large  pl-0 pr-0 pb-0 pt-0`}      >
          152
        </p>
      </div>
    </div>

  );
}

export default FeedNumbers;
