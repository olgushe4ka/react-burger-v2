import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-burgers.module.css";
import { Link, useLocation, useHistory } from "react-router-dom";
//import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "../../utils/hooks";
import { TIingredient, TOrders } from "../../types/ingredients";

function FeedBurgers({ order }: {order: TOrders}) {
  const history = useHistory();

  const pathFeedOrOrder = history.location.pathname;

  const location = useLocation();

  const today = new Date();

  const ingredientsIds = order.ingredients;
  const ingredientsAll = useSelector((state) => state.ingredients.ingredients);

  const ingredients: Array<TIingredient> = [];

  ingredientsAll.forEach((item: TIingredient) => {
    ingredientsIds.forEach((id: string) => {
      if (item._id == id) {
        ingredients.push(item);
      }
    });
  });

  const ingredientsOnlyFive = ingredients.slice(0, 5);

  //сумма

  const ingredientsArr = ingredients.map((ingredient: TIingredient) => {
    return ingredient.price;
  });
  const initialSum = 0;

  const sumIngredWithInitial = ingredientsArr.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    initialSum
  );

  return (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      to={{
        pathname: `${pathFeedOrOrder}/${order._id}`,
        state: { background: location },
      }}
    >
      <div className={`${styles.allBurgers} `}>
        <div className={`${styles.burgerBox} pl-6 pr-6 pb-6 pt-6`}>
          <div className={`${styles.numberAndDateBox} `}>
            <p
              className={`${styles.orderNumber} text text_type_digits-default`}
            >
              {order.number}
            </p>
            <FormattedDate date={new Date(order.createdAt)} />
          </div>

          <p
            className={`${styles.butgerName} text text_type_main-medium pl-0 pr-0 pb-8 pt-6`}
          >
            {order.name}
          </p>

          <div className={`${styles.ingredientsBox} pl-0 pr-0 pb-0 pt-0`}>
            <ul className={`${styles.ingredientsIcons} pl-0 pr-0 pb-0 pt-0`}>
              {ingredientsOnlyFive.map((item: TIingredient, index: number) => {
                return (
                  <li className={`${styles.ingredientIcon}`} key={index}>
                    <img
                      className={`${styles.ingredientIconImage}`}
                      src={item.image}
                      alt="фото ингридиента"
                    />
                  </li>
                );
              })}
              {ingredients[5] && (
                <li className={`${styles.ingredientIconSix}`}>
                  <img
                    className={`${styles.ingredientIconImageSix}`}
                    src={ingredients[5].image}
                    alt="фото ингридиента"
                  />
                  <p
                    className={`${styles.ingredientsCounter} text text_type_digits-small`}
                  >
                    +{ingredients.length - 5}
                  </p>
                </li>
              )}
            </ul>
            <div className={`${styles.priceBox} pl-0 pr-0 pb-0 pt-0`}>
              <p className="text text_type_main-medium mr-2">
                {sumIngredWithInitial}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FeedBurgers;
