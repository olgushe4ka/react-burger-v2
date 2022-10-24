import ingredientsStyles from "./burgerIngredients.module.css";
import PropTypes from "prop-types";
import Tabs from "./components/tabs";
import Menuconstructor from "./components/menuConstructor";
import { useState, useMemo, useContext } from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { ingredientPropType } from "../../utils/prop-types";
import BurgerIngredientsContext from "../../context/burger-ingredients-context";


function BurgerIngredients() {

  const data = useContext(BurgerIngredientsContext);

  const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
  const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);
  const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);


  //Модальные окна
  const [ingredientsData, setIngredientsData] =
    useState(null);

  const closeModal = () => {
    setIngredientsData(null);
  };


  return (
    <>
      <section className={`${ingredientsStyles.main} pl-15 pr-15 pb-0 pt-0`}>
        <div className={ingredientsStyles.headerfixed}>
          <Tabs value={buns} />
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
              <div key={dataIng._id} onClick={() => setIngredientsData(dataIng)}>
                <Menuconstructor
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
              <div key={dataIng._id} onClick={() => setIngredientsData(dataIng)}>
                <Menuconstructor
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
              <div key={dataIng._id} onClick={() => setIngredientsData(dataIng)}>
                <Menuconstructor
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
        <Modal closeAllModals={closeModal}
          title={'Детали ингридиента'} >
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
