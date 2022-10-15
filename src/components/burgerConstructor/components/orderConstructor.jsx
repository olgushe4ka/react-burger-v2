import burgerConstructorStyles from "../burgerConstructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useMemo } from "react";


function OrderConstructor({ cart }) {

  const bun = useMemo(() => cart.find(
    (ingredient) => ingredient.type === "bun"
  ));


  const ingredients = useMemo(() => cart.filter(
    (ingredient) => ingredient.type !== "bun"
  ));

  return (
    <div className={`${burgerConstructorStyles.orderConstructor} pl-9 pr-5 pb-0 pt-6`} >
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      />

      <ul className={`${burgerConstructorStyles.list}`}>
        {ingredients.map((ingredientItem) => {
          return (
            <li key={ingredientItem._id}
              className={`${burgerConstructorStyles.listElement} pl-0 pr-0 pb-2 pt-2`}
            >
              <div
                className={`${burgerConstructorStyles.dragIcon} pl-0 pr-3 pb-0 pt-0`}
              >
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                isLocked={false}
                price={ingredientItem.price}
                type={ingredientItem.type}
                thumbnail={ingredientItem.image}
                text={ingredientItem.name}
              />
            </li>
          );
        })}
      </ul>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      />
    </div>
  );
}

OrderConstructor.propTypes = {
  cart: PropTypes.array.isRequired,
 };

export default OrderConstructor;
