import burgerConstructorStyles from "../burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { CONSTRUCTOR_DELETE_INGREDIENTS } from "../../../services/actions/ingredients";
import OrderIngConstructor from "./order-ing-constructor";
import { useSelector, useDispatch } from "../../../utils/hooks";
import { TIingredient, TIingredientWithItem } from "../../../types/ingredients";

function OrderConstructor() {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients.cartIng);
  const buns = useSelector((state) => state.ingredients.cartBun);

  const bun = buns[buns.length - 1];

  //Удаление элемента
  const deleteIngredient = (indexOf: {}) => {
    dispatch({
      type: CONSTRUCTOR_DELETE_INGREDIENTS,
      payload: indexOf,
    });
  };

  return (
    <div
      className={`${burgerConstructorStyles.orderConstructor} pl-9 pr-5 pb-0 pt-6`}
    >
      {buns.length > 0 && (
        <div className={`pl-8 pr-0 pb-0 pt-0`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            price={bun?.price}
            thumbnail={bun?.image}
            text={bun?.name + " (верх)"}
            // id={bun?._id}
          />
        </div>
      )}
      <ul className={`${burgerConstructorStyles.list}`}>
        {ingredients.map((ingredientItem: TIingredientWithItem, index: number) => {
          return (
            <li
              key={ingredientItem.id}
              className={`${burgerConstructorStyles.listElement} pl-0 pr-0 pb-2 pt-2`}
            >
              <div
                className={`${burgerConstructorStyles.dragIcon} pl-0 pr-3 pb-0 pt-0`}
              >
                <DragIcon type="primary" />
              </div>
              <OrderIngConstructor
                price={ingredientItem.price}
                type={ingredientItem.type}
                image={ingredientItem.image}
                name={ingredientItem.name}
                index={index}
                id={ingredientItem._id}
                handleClose={() => deleteIngredient({ index })}
              />
            </li>
          );
        })}
      </ul>
      {buns.length > 0 && (
        <div className={`pl-8 pr-0 pb-0 pt-0`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            price={bun?.price}
            thumbnail={bun?.image}
            text={bun?.name + " (низ)"}
            // id={bun?._id}
          />
        </div>
      )}
    </div>
  );
}

export default OrderConstructor;
