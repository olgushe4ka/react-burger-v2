import burgerConstructorStyles from "../burgerConstructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useContext, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { CONSTRUCTOR_ADD_INGREDIENTS } from "../../../services/actions/ingredients";
import OrderIngConstructor from "./orderIngConstructor";
//import update from 'immutability-helper'



function OrderConstructor() {
  const dispatch = useDispatch();

  // const [idForDrop, setForDrop] = useState([]);

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


  //DND 
  const moveIngredientToConstructor = (item) => {
    dispatch({
      type: CONSTRUCTOR_ADD_INGREDIENTS,
      payload: item,
    });
  };

  const [{ isHover }, drop] = useDrop({
    accept: "sorting",

    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      moveIngredientToConstructor(ingredient);
      //const projectId = ingredient.getItem().uuid;
    },
  });


  // DND Sorting



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
      <ul className={`${burgerConstructorStyles.list}`} >
        {ingredients.map((ingredientItem, index) => {
          return (
            <li
              key={Math.random().toString(36).slice(2)}
              // ref={drag}
              className={`${burgerConstructorStyles.listElement} pl-0 pr-0 pb-2 pt-2`}
            // {setForDrop(ingredientItem._id)}
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
