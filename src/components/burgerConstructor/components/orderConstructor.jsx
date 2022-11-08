import burgerConstructorStyles from "../burgerConstructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useContext } from "react";
import BurgerIngredientsContext from "../../../context/burger-ingredients-context";
import { useSelector } from "react-redux";

function OrderConstructor() {

  const cart = useSelector(
    state => state.ingredients.cart
  );

  const ingredients = useMemo(() =>
    cart.filter((ingredient) => ingredient.type !== "bun")
  );

  const buns = useMemo(() =>
    cart.filter((ingredient) => ingredient.type === "bun")
  );

  const bun = buns[buns.length - 1];


// DND Sorting
   //state.burgerStructure.ingredients = state.burgerStructure.ingredients.map((item) => ({ ...item, isDragging: item.dragId === action.payload }));

 // DND

 const [{ opacity }, drag] = useDrag({
  type: "ingredient",
  item: { id },

  collect: (monitor) => ({
    opacity: monitor.isDragging() ? 0.5 : 1,
  }),
});



 const moveIngredientToConstructor = (item) => {
  dispatch({
    type: CONSTRUCTOR_ADD_INGREDIENTS,
    payload: item,
  });
};

const [{ isHover }, drop] = useDrop({
  accept: "ingredient",

  collect: (monitor) => ({
    isHover: monitor.isOver(),
  }),
  drop(ingredient) {
    moveIngredientToConstructor(ingredient);
  },
});



  return (
    <div
      className={`${burgerConstructorStyles.orderConstructor} pl-9 pr-5 pb-0 pt-6`} ref={drop}
    >
      <div className={`pl-8 pr-0 pb-0 pt-0`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          price={bun?.price}
          thumbnail={bun?.image}
          text={bun?.name + " (верх)"}
        />
      </div>
      <ul className={`${burgerConstructorStyles.list}`} ref={drag}>
        {ingredients.map((ingredientItem) => {
          return (
            <li
              key={ingredientItem._id}
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
      <div className={`pl-8 pr-0 pb-0 pt-0`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          price={bun?.price}
          thumbnail={bun?.image}
          text={bun?.name + " (низ)"}
        />
      </div>
    </div>
  );
}

export default OrderConstructor;
