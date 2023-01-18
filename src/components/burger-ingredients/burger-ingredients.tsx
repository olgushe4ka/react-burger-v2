import ingredientsStyles from "./burger-ingredients.module.css";
import IngredientConstructor from "./components/ingredient-constructor";
import { useState, useMemo, useEffect } from "react";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
//import { useDispatch,  } from "react-redux";
import {
  SET_INGREDIENT_MODAL,
  RESET_INGREDIENT_MODAL,
} from "../../services/actions/ingredients";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { TIingredient, TIingredientWithItem } from "../../types/ingredients";
import { useSelector, useDispatch } from "../../utils/hooks";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ingredients.ingredients);

  const buns = useMemo(
    () => data?.filter((item: TIingredientWithItem) => item.type === "bun"),
    [data]
  );
  const mains = useMemo(
    () => data?.filter((item: TIingredientWithItem) => item.type === "main"),
    [data]
  );
  const sauces = useMemo(
    () => data?.filter((item: TIingredientWithItem) => item.type === "sauce"),
    [data]
  );

  //Модальные окна

  const onIngredientClick = (data: TIingredientWithItem) => {
    dispatch({ type: SET_INGREDIENT_MODAL, payload: data });
  };

  const ingredientsData = useSelector(
    (state) => state.ingredients.ingredientDetails
  );

  const history = useHistory();

  const closeIngredientModal = () => {
    dispatch({ type: RESET_INGREDIENT_MODAL });
    history.goBack();
  };

  //Tab
  const [currentTab, setCurrentTab] = useState("buns");

  const onTabClick = (tab: string) => {
    console.log(tab);
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const { ref: refBuns, inView: inViewBuns } = useInView({ threshold: 0 });
  const { ref: refSauces, inView: inViewSauces } = useInView({
    threshold: 0.8,
  });
  const { ref: refMains, inView: inViewMains } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("buns");
    }
    if (inViewSauces) {
      setCurrentTab("sauces");
    }
    if (inViewMains) {
      setCurrentTab("mains");
    }
  }, [inViewBuns, inViewSauces, inViewMains]);

  return (
    <>
      <section className={`${ingredientsStyles.main} pl-15 pr-15 pb-0 pt-0`}>
        <div className={ingredientsStyles.headerfixed}>
          <div className={`${ingredientsStyles.tabs}`}>
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
          ref={refBuns}
        >
          Булки
        </p>
        <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
          {buns.map((dataIng: TIingredientWithItem) => {
            return (
              <div
                key={dataIng._id}
                id={Math.random().toString(36).slice(2)}
                onClick={() => onIngredientClick(dataIng)}
              >
                <IngredientConstructor
                  item={dataIng}
                  id={dataIng._id}
                  price={dataIng.price}
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
        <div
          className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}
          ref={refSauces}
        >
          {sauces.map((dataIng: TIingredientWithItem) => {
            return (
              <div key={dataIng._id} onClick={() => onIngredientClick(dataIng)}>
                <IngredientConstructor
                  item={dataIng}
                  id={dataIng._id}
                  price={dataIng.price}
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
        <div
          className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}
          ref={refMains}
        >
          {mains.map((dataIng: TIingredientWithItem) => {
            return (
              <div key={dataIng._id} onClick={() => onIngredientClick(dataIng)}>
                <IngredientConstructor
                  item={dataIng}
                  id={dataIng._id}
                  price={dataIng.price}
                  image={dataIng.image}
                  name={dataIng.name}
                />
              </div>
            );
          })}
        </div>
      </section>
      {ingredientsData && (
        <Modal
          closeAllModals={closeIngredientModal}
          title={"Детали ингридиента"}
        >
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
