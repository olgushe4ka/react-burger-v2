import {
  Input, Button, EmailInput, PasswordInput, FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-burgers.module.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";



function FeedBurgers({ order }) {

  const today = new Date();

  const ingredientsIds = order.ingredients;
  const ingredientsAll = useSelector((state) => state.ingredients.ingredients);


  // const ingredients = ingredientsAll.filter((item) => {
  //   ingredientsIds.map((id) => item._id === id)
  // })

  const ingredients = []

  ingredientsAll.forEach((item) => {
    ingredientsIds.forEach((id) => {
        if (item._id == id) {
          ingredients.push(item);
        }
    });
});

 const ingredientsOnlyFive = ingredients.slice(0, 5);

  const openOrderInfo = (data) => { }



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
      <div className={`${styles.allBurgers} `} onClick={() => openOrderInfo(ingredients)}>
        <div className={`${styles.burgerBox} pl-6 pr-6 pb-6 pt-6`}>
          <div className={`${styles.numberAndDateBox} `}>
            <p className={`${styles.orderNumber} text text_type_digits-default`}>{order.number}</p>

            {/* <FormattedDate date={()=>
             order.createdAt
            } /> */}
          </div>

          <p className={`${styles.butgerName} text text_type_main-medium pl-0 pr-0 pb-8 pt-6`}          >
            {order.name}
          </p>

          <div className={`${styles.ingredientsBox} pl-0 pr-0 pb-0 pt-0`}>
            <ul className={`${styles.ingredientsIcons} pl-0 pr-0 pb-0 pt-0`} >
              {ingredientsOnlyFive.map((item) => {
                return (
                  <li className={`${styles.ingredientIcon}`} key={uuidv4()}>
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
            <div className={`${styles.priceBox} pl-0 pr-0 pb-0 pt-0`} >
              <p className="text text_type_main-medium mr-2">{sumIngredWithInitial}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default FeedBurgers;
