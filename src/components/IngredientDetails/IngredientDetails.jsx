import ingredientDetailsStyles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";


function IngredientDetails(data) {
  const props = data.props;

  return (
    <div className={`${ingredientDetailsStyles.main} pl-0 pr-0 pb-0 pt-0`}>
      <div className={ingredientDetailsStyles.image}>
           <img src={props.image} alt="logo" />
      </div>
      <p
        className={`${ingredientDetailsStyles.name} text text_type_main-medium  pl-0 pr-0 pb-8 pt-4`}
      >
        {props.name}
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
            {props.calories}
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
            {props.proteins}
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
            {props.fat}
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
            {props.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}


IngredientDetails.propTypes = {
  carbohydrates: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  proteins: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default IngredientDetails;
