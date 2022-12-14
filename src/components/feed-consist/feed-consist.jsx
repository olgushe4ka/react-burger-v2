import {
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-consist.module.css";

import { useSelector, useDispatch } from "react-redux";


function FeedСonsist({ props }) {

  const ingredients = useSelector((state) => state.ingredients.ingredients);

  return (
    <>
      <div className={`${styles.ingredientBox} pl-0 pr-0 pb-0 pt-0`}>
        <div className={`${styles.ingredientLeftBox}`}>
          <div className={`${styles.imageBox} pl-0 pr-0 pb-0 pt-0`}>
            <img
              className={`${styles.image}`}
              src={props.image}
              alt="фото ингридиента"
            />
          </div>
          <p
            className={`${styles.name} text text_type_main-small pl-4 pr-0 pb-0 pt-0`}
          >
            {props.name}
          </p>
        </div>
        <div className={`${styles.priceBox} pl-0 pr-6 pb-0 pt-0`}>
          <p className="text text_type_digits-default mr-2">1 x</p>
          <p className="text text_type_digits-default mr-2">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default FeedСonsist;
