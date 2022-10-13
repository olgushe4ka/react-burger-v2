import ingredientsStyles from "./burgerIngredients.module.css";
import PropTypes from "prop-types";
import Tabs from "./components/tabs";
import Menuconstructor from "./components/menuConstructor";
import Api from "../Api/Api";



function BurgerIngredients() {
  const data = Api("https://norma.nomoreparties.space/api/ingredients");

  const buns = data.filter((item) => item.type === "bun");
  const mains = data.filter((item) => item.type === "main");
  const sauces = data.filter((item) => item.type === "sauce");


  return (
    <section className={`${ingredientsStyles.main} pl-15 pr-15 pb-0 pt-0`}>
      <div className={ingredientsStyles.headerfixed}>
        <Tabs />
      </div>
      <p
        className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
        value="buns"
      >
        Булки
      </p>
      <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
        {buns.map((dataIng) => {
          return (
            <Menuconstructor
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
  );
}

BurgerIngredients.propTypes = {
  price: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default BurgerIngredients;
