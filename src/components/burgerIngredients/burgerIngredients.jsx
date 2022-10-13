import ingredientsStyles from "./burgerIngredients.module.css";
import PropTypes from "prop-types";
import Tabs from "./components/tabs";
import Menuconstructor from "./components/menuConstructor";
import Api from "../Api/Api";
import { useState } from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
// import IngredientDetails from "../IngredientDetails/IngredientDetails";
// import Modal from "../Modal/Modal";


function BurgerIngredients() {
  const data = Api("https://norma.nomoreparties.space/api/ingredients");

  const buns = data.filter((item) => item.type === "bun");
  const mains = data.filter((item) => item.type === "main");
  const sauces = data.filter((item) => item.type === "sauce");


  //Модальные окна
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(null);

  const closeAllModals = () => {
    setIsIngredientDetailsOpened(null);
  };

  const handleEscKeydown = (e) => {
    e.key === "Escape" && closeAllModals();
  };


  return (
    <>
      <section className={`${ingredientsStyles.main} pl-15 pr-15 pb-0 pt-0`}>
        <div className={ingredientsStyles.headerfixed}>
          <Tabs />
        </div>
        <p
          className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
          value="buns"
        >
          Булки
          { isIngredientDetailsOpened } Here
        </p>
        <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
          {buns.map((dataIng) => {
            return (
              <Menuconstructor
                oninredientClick={setIsIngredientDetailsOpened}
                 props={dataIng}
                 key={dataIng._id}
                 price={dataIng.price}
                 type={dataIng.type}
                 image={dataIng.image}
                 name={dataIng.name}
              />
            );
          })}

        </div>
        <p
          className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
          value="sauces"
        >
          Соусы
        </p>
        <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
          {sauces.map((dataIng) => {
            return (
              <Menuconstructor
                oninredientClick={setIsIngredientDetailsOpened}
                props={dataIng}
                key={dataIng._id}
                price={dataIng.price}
                type={dataIng.type}
                image={dataIng.image}
                name={dataIng.name}
              />
            );
          })}
        </div>
        <p
          className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
          value="mains"
        >
          Начинки{" "}
        </p>
        <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
          {mains.map((dataIng) => {
            return (
              <Menuconstructor
                oninredientClick={setIsIngredientDetailsOpened}
                props={dataIng}
              key={dataIng._id}
              price={dataIng.price}
              type={dataIng.type}
              image={dataIng.image}
              name={dataIng.name}

              />
            );
          })}
        </div>
      </section>

      {isIngredientDetailsOpened && (
        <Modal
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <IngredientDetails
            props={isIngredientDetailsOpened}

          image={isIngredientDetailsOpened.props.image}
          proteins={isIngredientDetailsOpened.props.proteins}
          fat={isIngredientDetailsOpened.props.fat}
          carbohydrates={isIngredientDetailsOpened.props.carbohydrates}
          calories={isIngredientDetailsOpened.props.calories}
          name={isIngredientDetailsOpened.props.name}
          />
        </Modal>
      )}
    </>
  );
}

BurgerIngredients.propTypes = {
  price: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default BurgerIngredients;
