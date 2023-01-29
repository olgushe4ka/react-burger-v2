import { Link, useParams } from "react-router-dom";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import ingredientDetailsStyles from "./ingredients.module.css";
import { useSelector, useDispatch } from "../utils/hooks";
import { TIingredient } from "../types/ingredients";

function Ingredients() {
  const ingredients: TIingredient[] = useSelector((state) => state.ingredients.ingredients);

  const { id }: { id: string } = useParams();


  const ingredient = ingredients?.find(
    (ingredient: TIingredient) => ingredient._id === id
  );

  return (
    <>

      {/* <IngredientDetails ingredients={ingredient} /> */}
      {ingredient !== undefined && (
      <div className={`${ingredientDetailsStyles.main} pl-0 pr-0 pb-0 pt-0`}>

        <div className={ingredientDetailsStyles.image}>
          <img src={ingredient?.image} alt="logo" />
        </div>
        <p
          className={`${ingredientDetailsStyles.name} text text_type_main-medium  pl-0 pr-0 pb-8 pt-4`}
        >
          {ingredient?.name}
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
              {ingredient?.calories}
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
              {ingredient?.proteins}
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
              {ingredient?.fat}
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
              {ingredient?.carbohydrates}
            </p>
          </div>
        </div> 
      </div>
      )}
    </>
  );
}

export default Ingredients;
