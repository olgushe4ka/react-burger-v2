import burgerConstructorStyles from "../burgerConstructor.module.css";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function OrderConstructor(props) {
  return (
    <div
      className={`${burgerConstructorStyles.constructorBox} pl-5 pr-5 pb-0 pt-6`}
    >
      <div
        className={`${burgerConstructorStyles.dragIcon} pl-0 pr-3 pb-0 pt-0`}
      >
        <DragIcon type="primary" />
      </div>
      <div
        className={`${burgerConstructorStyles.darkBackround} pl-0 pr-0 pb-0 pt-0`}
        style={{ display: "flex" }}
      >
        <div style={{ display: "flex" }}>
          <img
            className={burgerConstructorStyles.image}
            src={props.image}
            alt="фото ингридиента"
          />
          <p
            className={`${burgerConstructorStyles.title} text text_type_main-small`}
          >
            {props.name}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className={`${burgerConstructorStyles.priceBox}  pl-0 pr-6 pb-0 pt-0`}
          >
            {" "}
            <p className="text text_type_main-medium mr-2">{props.price}</p>
            <CurrencyIcon type="primary" />
            <div className="pl-6 pr-0 pb-0 pt-0">
              <DeleteIcon type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


OrderConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


export default OrderConstructor;
