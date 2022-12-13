import {
  FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import FeedСonsist from "../components/feed-consist/feed-consist";
import { useSelector } from "react-redux";



function OrderInfo() {

  const today = new Date();
  const ingredients = useSelector((state) => state.ingredients.ingredients);


  return (
    <>
      <div className={`${styles.feedIdMain} `}>
        <p className={`${styles.feddIdOrderNumber} text text_type_digits-default `}>#034535</p>
        <p className={`${styles.feddIdbutgerName} text text_type_main-medium pl-0 pr-0 pb-0 pt-10`}          >
          Death Star Starship Main бургер
        </p>
        <p className={`${styles.feddIdStatus} text text_type_main-small pl-0 pr-0 pb-15 pt-3`}          >
          Выполнен
        </p>

        <p className={`${styles.feddIdbutgerSostav} text text_type_main-medium pl-0 pr-0 pb-6 pt-0`}          >
          Состав:
        </p>

        <div className={`${styles.feedIdIngredients} `}>
          {ingredients.map((ingredient) => {
            return (
              <FeedСonsist props={ingredient} key={ingredient._id}/>)
          })}
        </div>

        <div className={`${styles.feedIddownBox} pl-0 pr-0 pb-0 pt-10`} >
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

          <div className={`${styles.feedIdpriceBox} pl-0 pr-0 pb-0 pt-0`} >
            <p className="text text_type_digits-default mr-2">4 800</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>

    </>
  );
}

export default OrderInfo;
