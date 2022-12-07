import {
  Input, Button, EmailInput, PasswordInput, FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { changeProfileInfo, getProfileInfo, logOut } from "../services/actions/login";
import { useCallback, useEffect, useState } from "react";
import { eraseCookie } from "../utils/cookie";


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
  const today = new Date();

  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredientsOnlyFive = ingredients.slice(0, 5);



  return (
    <>
      <div className={`${styles.feedMain} pl-2 pr-2 pb-0 pt-0`}>
        <p className={`${styles.feedTitle} text text_type_digits-default pl-0 pr-0 pb-5 pt-0`}          >
          Лента заказов
        </p>
        <div className={`${styles.allBurgers} `}>
          <div className={`${styles.burgerBox} `}>
            <div>
              <p className={`${styles.orderNumber} text text_type_digits-default`}>#034535</p>

              <FormattedDate date={
                new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate(),
                  today.getHours(),
                  today.getMinutes() - 1,
                  0,
                )
              } />
            </div>

            <p className={`${styles.butgerName} text text_type_digits-default pl-0 pr-0 pb-0 pt-0`}          >
              Death Star Starship Main бургер
            </p>

            <div>
              <ul className={`${styles.ingredientsIcons} pl-0 pr-0 pb-0 pt-0`} >
                {ingredientsOnlyFive.map((item) => {
                  return (
                    <li className={`${styles.ingredientIcon}`}>
                      <img className={`${styles.ingredientIconImage}`} src={item.image} alt="фото ингридиента" />
                    </li>
                  )
                })
                }
                {ingredients[5] && (<li className={`${styles.ingredientIconSix}`}>
                  <img className={`${styles.ingredientIconImageSix}`} src={ingredients[5].image} alt="фото ингридиента" />
                  <p className={`${styles.ingredientsCounter} text text_type_digits-small`} >+{ingredients.length - 5}</p>
                </li>)}
         
              </ul>

              <p className="text text_type_main-medium mr-2">480</p>
              <CurrencyIcon type="primary" /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
