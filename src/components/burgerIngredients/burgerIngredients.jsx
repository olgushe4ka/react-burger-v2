import ingredientsStyles from "./burgerIngredients.module.css";
import { data } from "../../utils/data";
import PropTypes from "prop-types";
import Tabs from "./components/tabs";
import Menuconstructor from "./components/menuConstructor";

//сделать, как пройдем Хуки
// const buns = useMemo(data.filter((item) => item.type === 'bun'), [data]);
// const mains = useMemo(data.filter((item) => item.type === 'main'), [data]);
// const sauces = useMemo(data.filter((item) => item.type === 'sauce'), [data]);

function BurgerIngredients() {
  return (
    <section className={`${ingredientsStyles.main} pl-15 pr-15 pb-0 pt-0`}>
      <div className={ingredientsStyles.header_fixed}>
        <Tabs />
      </div>
      <p
        className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}
      >
        Булки
      </p>
      <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
        {data.map((dataIng) => {
          if (dataIng.type === "bun")
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
      >
        Соусы
      </p>
      <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
        {data.map((dataIng) => {
          if (dataIng.type === "sauce")
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
      >
        Начинки{" "}
      </p>
      <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
        {data.map((dataIng) => {
          if (dataIng.type === "main")
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
