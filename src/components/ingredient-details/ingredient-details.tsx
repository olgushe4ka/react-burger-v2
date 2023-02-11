import ingredientDetailsStyles from "./ingredient-details.module.css";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { TIingredient } from "../../types/ingredients";

function IngredientDetails({ ingredients }: {ingredients: TIingredient}) {
  const location = useLocation();
  const history = useHistory();

  //при перезагрузке , чтобы шло на страницу с ингредиентом
  useEffect(() => {
    window.addEventListener("beforeunload", clearHistory);
    return () => {
      window.removeEventListener("beforeunload", clearHistory);
    };
  }, []);

  const clearHistory = (e: Event) => {
    e.preventDefault();
    history.replace({ state: {} });
  };

  return (
    <div className={`${ingredientDetailsStyles.main} pl-0 pr-0 pb-0 pt-0`}>
      <div className={ingredientDetailsStyles.image}>
        <img src={ingredients?.image} alt="logo" />
      </div>
      <p
        className={`${ingredientDetailsStyles.name} text text_type_main-medium  pl-0 pr-0 pb-8 pt-4`}
      >
        {ingredients?.name}
      </p>
      <div
        className={`${ingredientDetailsStyles.infoBox}  pl-25 pr-25 pb-15 pt-0`}
      >
        <div
          className={`${ingredientDetailsStyles.propBox} pl-0 pr-0 pb-0 pt-0`}
        >
          <p
            className={`${ingredientDetailsStyles.textTipe} text text_type_main-small pl-0 pr-0 pb-2 pt-0`}
          >
            Калории,ккал
          </p>
          <p
            className={`${ingredientDetailsStyles.textnumbers} text text_type_digits-default pl-0 pr-0 pb-0 pt-0`}
          >
            {ingredients?.calories}
          </p>
        </div>
        <div
          className={`${ingredientDetailsStyles.propBox} pl-0 pr-0 pb-0 pt-0`}
        >
          <p
            className={`${ingredientDetailsStyles.textTipe} text text_type_main-small pl-0 pr-0 pb-2 pt-0`}
          >
            Белки, г
          </p>
          <p
            className={`${ingredientDetailsStyles.textnumbers} text text_type_digits-default pl-0 pr-0 pb-0 pt-0`}
          >
            {ingredients?.proteins}
          </p>
        </div>
        <div
          className={`${ingredientDetailsStyles.propBox} pl-0 pr-0 pb-0 pt-0`}
        >
          <p
            className={`${ingredientDetailsStyles.textTipe} text text_type_main-small pl-0 pr-0 pb-2 pt-0`}
          >
            Жиры, г
          </p>
          <p
            className={`${ingredientDetailsStyles.textnumbers} text text_type_digits-default pl-0 pr-0 pb-0 pt-0`}
          >
            {ingredients?.fat}
          </p>
        </div>
        <div
          className={`${ingredientDetailsStyles.propBox} pl-0 pr-0 pb-0 pt-0`}
        >
          <p
            className={`${ingredientDetailsStyles.textTipe} text text_type_main-small pl-0 pr-0 pb-2 pt-0`}
          >
            Углеводы, г
          </p>
          <p
            className={`${ingredientDetailsStyles.textnumbers} text text_type_digits-default pl-0 pr-0 pb-0 pt-0`}
          >
            {ingredients?.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
