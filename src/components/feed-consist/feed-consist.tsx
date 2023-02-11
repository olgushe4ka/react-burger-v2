import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-consist.module.css";
//import { useSelector, useDispatch } from "react-redux";
import { useSelector, useDispatch } from "../../utils/hooks";
import { TIingredient } from "../../types/ingredients";

function FeedСonsist({ props }: {props: string | any}) {
  const ingredients: TIingredient[] = useSelector(
    (state) => state.ingredients.ingredients
  );

  const ingredient: TIingredient | undefined = ingredients?.find(
    (item: TIingredient) => item?._id === props[0]
  );

  return (
    <>
      <div className={`${styles.ingredientBox} pl-0 pr-0 pb-0 pt-0`}>
        <div className={`${styles.ingredientLeftBox}`}>
          <div className={`${styles.imageBox} pl-0 pr-0 pb-0 pt-0`}>
            <img
              className={`${styles.image}`}
              src={ingredient?.image}
              alt="фото ингридиента"
            />
          </div>
          <p
            className={`${styles.name} text text_type_main-small pl-4 pr-0 pb-0 pt-0`}
          >
            {ingredient?.name}
          </p>
        </div>
        <div className={`${styles.priceBox} pl-0 pr-6 pb-0 pt-0`}>
          <p className="text text_type_digits-default mr-2">{props[1]} x</p>
          <p className="text text_type_digits-default mr-2">
            {ingredient?.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default FeedСonsist;
