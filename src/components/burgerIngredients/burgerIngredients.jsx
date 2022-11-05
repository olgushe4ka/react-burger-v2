import ingredientsStyles from "./burgerIngredients.module.css";
import PropTypes from "prop-types";
import Tabs from "./components/tabs";
import MenuConstructor from "./components/menuConstructor";
import { useState, useMemo, useContext, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { ingredientPropType } from "../../utils/prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import { getItems, SET_INGREDIENT_MODAL, RESET_INGREDIENT_MODAL } from "../../services/actions/ingredients";


function BurgerIngredients() {
 
  const dispatch = useDispatch();
  const data = useSelector(
    state => state.ingredients.ingredients
  );
  
  useEffect(
    () => {
      dispatch(getItems());
    },
    [dispatch]
  );




  const buns = useMemo(
    () => data.filter((item) => item.type === "bun"),
    [data]
  );
  const mains = useMemo(
    () => data.filter((item) => item.type === "main"),
    [data]
  );
  const sauces = useMemo(
    () => data.filter((item) => item.type === "sauce"),
    [data]
  );

  //Модальные окна

  const onIngredientClick = (data) => {
    dispatch({ type: SET_INGREDIENT_MODAL, payload: data });
   
  };

  const ingredientsData = useSelector(state => state.ingredients.ingredientDetails)


  const closeIngredientModal = () => {
    dispatch({ type: RESET_INGREDIENT_MODAL });
  };


  //const [ingredientsData, setIngredientsData] = useState(null);

  

  // const closeModal = () => {
  //   setIngredientsData(null);
  // };


  //Прокрутка Tab
  const [currentTab, setCurrentTab] = useState("buns");

   const onTabClick = (tab) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className={`${ingredientsStyles.main} pl-15 pr-15 pb-0 pt-0`}>
        <div className={ingredientsStyles.headerfixed}>
          <div className={`${ingredientsStyles.tabs}`} >
            <Tab
              value="buns"
              active={currentTab === "buns"}
              onClick={onTabClick}
            >
              Булки
            </Tab>
            <Tab
              value="sauces"
              active={currentTab === "sauces"}
              onClick={onTabClick}
            >
              Соусы
            </Tab>
            <Tab
              value="mains"
              active={currentTab === "mains"}
              onClick={onTabClick}
            >
              Начинки
            </Tab>
          </div>
        </div>
        <p
          className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
          id="buns"
        >
          Булки
        </p>
        <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
          {buns.map((dataIng) => {
            return (
              <div
                key={dataIng._id}
                onClick={() => onIngredientClick(dataIng)}
              >
                <MenuConstructor
                  price={dataIng.price}
                  type={dataIng.type}
                  image={dataIng.image}
                  name={dataIng.name}
                />
              </div>
            );
          })}
        </div>
        <p
          className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
          id="sauces"
        >
          Соусы
        </p>
        <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
          {sauces.map((dataIng) => {
            return (
              <div
                key={dataIng._id}
                onClick={() => onIngredientClick(dataIng)}
              >
                <MenuConstructor
                  price={dataIng.price}
                  type={dataIng.type}
                  image={dataIng.image}
                  name={dataIng.name}
                />
              </div>
            );
          })}
        </div>
        <p
          className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
          id="mains"
        >
          Начинки
        </p>
        <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
          {mains.map((dataIng) => {
            return (
              <div
                key={dataIng._id}
                onClick={() => onIngredientClick(dataIng)}
              >
                <MenuConstructor
                  price={dataIng.price}
                  type={dataIng.type}
                  image={dataIng.image}
                  name={dataIng.name}
                />
              </div>
            );
          })}
        </div>
      </section>

      {ingredientsData && (
        <Modal closeAllModals={closeIngredientModal} title={"Детали ингридиента"}>
          <IngredientDetails ingredients={ingredientsData} />
        </Modal>
      )}
    </>
  );
}

// BurgerIngredients.propTypes = {
//   data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
// };

export default BurgerIngredients;
