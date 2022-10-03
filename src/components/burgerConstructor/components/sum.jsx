import burgerConstructorStyles from "../burgerConstructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Sum() {
  return (
    <div
      className={`${burgerConstructorStyles.priceBoxLarge} pl-0 pr-10 pb-0 pt-0`}
    >
      <p className="text text_type_main-large mr-2">500</p>
      <div className={burgerConstructorStyles.priceIconLarge}>
        {" "}
        <CurrencyIcon type="primary" />
      </div>{" "}
    </div>
  );
}

export default Sum;
